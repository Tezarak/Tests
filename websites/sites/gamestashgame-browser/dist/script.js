$(function() {

  // Display Recommended
  $('#featured_section__games-recommended').append($('.games-search .games-bit[data-games-rating="5"], [data-games-rating="4"]').clone());

  // Display Featured
  $('#featured_section__games-featured').append($('.games-search .games-bit[data-games-featured]').clone());
      
  // Slick Carousels
  $(".games-hub__navigation").slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    infinite: true,
    variableWidth: true
  });
  $(".featured_section__games").slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToScroll: 4,
    slidesToShow: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          centerMode: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }
     ]
  });



  // Games Search
  var $iso = $('.games-search').isotope({
  	itemSelector : '.games-bit',
  	resizesContainer: true,
  	sortAscending : {
  	  alpha: true,
  	  rating: false,
  	  added:false
  	},
    layoutMode: 'masonry',	
  	transitionDuration: '0.6s',
  	getSortData : {
  		alpha : '[alpha]',
  		added:  '[added] parseInt',
  		rating : '[rating] parseInt'
  	},
  	stagger: 5,
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    }
  });

  // Game Text Search
  var games_navigator__top_bar_search__active = false;
  $('input.games-navigator__bar-search-box').quicksearch('.games-pages .games-search .games-bit', {
    'selector': '.games-bit__title',
    'noResults' : '#noresults_message',
    'onBefore' : function() {
      var game_search = $('.games-pages .games-search');
      $('.games-navigator__content').html(game_search.clone());
    },
    'show': function () {
      $(this).show();
    },
    'hide': function () {
      $(this).hide();
    },
    'onAfter' : function() {
      if(games_navigator__top_bar_search__active)
        $('input.games-navigator__bar-search-box').keyup();
      
      $iso.isotope({filter: function() {return $(this).is(':visible')}});
    }
  });

  // Games Search Categories
  $(document).on('click','[data-games-search-cat]', function(){
   	var filterName = $(this).attr('data-games-search-cat');
  	if (filterName == ''){
  		$iso.isotope({ filter : '*'});
  	}else{
  		$iso.isotope({ filter : '[cat=\"'+filterName+'\"]'});
  	} 
    
    return false;
  });

  // Games Search Featured
  $(document).on('click','[data-games-search-featured]', function(){
    $iso.isotope({ filter : '[data-games-featured]'});
    
    return false;
  });

  // Games Search Top
  $(document).on('click','[data-games-search-rating]', function(){
  	$iso.isotope({ sortBy : 'data-games-rating'});
  	$iso.isotope({ filter : '[data-games-rating=\"5\"]'});
    
    return false;
  });

  // Page Selector
  $(document).on('click','[data-page]', function(){
    var currentpage = $(this).attr('data-page');
    $('.games-navigator__bar-title').html($(this).text());
    $('.games-navigator').addClass('games-navigator--active');
    $('.games-navigator__content').html($(currentpage).clone().show());
    $('.games-hub').hide();
  });

  // Close Page
  $('.games-navigator__bar-close').click(_GamesNavigatorClose);
  function _GamesNavigatorClose(){
    $('.games-navigator').removeClass('games-navigator--active');
    $('.games-navigator__content').html('');
    $('.games-hub').show();
  }

  // Navigator Search
  $('.games-navigator__bar-search-button').click(function(){
    
    $(this).parent().toggleClass('games-navigator__bar-search--active');
    games_navigator__top_bar_search__active = $(this).parent().hasClass('games-navigator__bar-search--active');
    
    // Focus on textbox
    if(games_navigator__top_bar_search__active){
      $('.games-navigator__bar-search-box').focus();
    } else {
      $('.games-navigator__bar-search-box').val('');
      _GamesNavigatorClose();
    }
  });

});