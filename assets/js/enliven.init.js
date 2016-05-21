"use strict";
var Enliven, e_google_maps;

e_google_maps = '';

jQuery(document).ready(function($) {
  Enliven.initTicker();
  Enliven.initNavigation();
});

jQuery(window).load(function($) {
  Enliven.initPostsSlide();
  Enliven.initPostsSlideMediumNoSpacing();
  Enliven.initPostsSlideGrid();
  Enliven.initPostsWithTopGuideLine();
  Enliven.initPostsCarouselMediumThumb();
  Enliven.initPostsCarouselVerticalThumb();
  Enliven.initPostsCarouselSync();
  Enliven.initReviewCarousel();
  Enliven.clickPlayVideo();
  Enliven.initVideoResponsive();
  Enliven.initTabs();
  Enliven.initToggles();
  Enliven.initNotification();
  Enliven.initMaps();
  Enliven.initLighbox();
  Enliven.initBackgroundSlideshow();
});

Enliven = {
  initTicker: function() {
    var ticker;
    ticker = jQuery('.e_ticker');
    if (ticker.length) {
      ticker.find('.owl-carousel').owlCarousel({
        navigation: false,
        pagination: false,
        singleItem: true,
        autoPlay: true
      });
    }
  },
  initNavigation: function() {
    if (jQuery('#e_primary_menu').length) {
      jQuery('#e_primary_menu').superfish({
        cssArrows: false,
        delay: 0,
        speed: 'fast',
        speedOut: 'fast'
      });
      jQuery("#e_primary_menu_mobile").navgoco({
        accordion: true,
        save: true
      });
      jQuery("#e_primary_nav").on("click", ".e_handler", function() {
        jQuery("#e_primary_menu_mobile").slideToggle("slow");
      });
      jQuery("#e_primary_menu_mobile .caret").removeClass("caret").addClass("e_caret");
    }
    if (jQuery('#e_secondary_menu').length) {
      jQuery("#e_secondary_nav").on("click", ".e_handler", function() {
        jQuery("#e_secondary_menu_mobile").slideToggle("slow");
      });
    }
  },
  initPostsSlide: function() {
    var posts_slide;
    posts_slide = jQuery('.e_widget_posts_slide .owl-carousel');
    if (posts_slide.length) {
      jQuery.each(posts_slide, function() {
        var owl;
        owl = jQuery(this);
        owl.owlCarousel({
          navigation: false,
          pagination: true,
          singleItem: true,
          autoPlay: false,
          transitionStyle: 'backSlide'
        });
      });
    }
  },
  initPostsSlideGrid: function() {
    var posts_slide_grid;
    posts_slide_grid = jQuery('.e_widget_posts_slide_grid .owl-carousel');
    if (posts_slide_grid.length) {
      jQuery.each(posts_slide_grid, function() {
        var owl;
        owl = jQuery(this);
        owl.owlCarousel({
          navigation: false,
          pagination: true,
          singleItem: true,
          autoPlay: false,
          transitionStyle: 'backSlide'
        });
      });
    }
  },
  initPostsWithTopGuideLine: function() {
    var posts_with_top_guide_line;
    posts_with_top_guide_line = jQuery('.e_widget_posts_with_top_guide_line .owl-carousel');
    if (posts_with_top_guide_line.length) {
      jQuery.each(posts_with_top_guide_line, function(index, item) {
        jQuery(item).owlCarousel({
          items: 4,
          navigation: false,
          pagination: false,
          autoPlay: false,
          stopOnHover: true,
          itemsDesktop: [1199, 2],
          itemsDesktopSmall: [979, 2]
        });
      });
    }
  },
  initPostsCarouselMediumThumb: function() {
    var posts_carousel_medium_thumb;
    posts_carousel_medium_thumb = jQuery('.e_widget_posts_carousel_medium_thumb .owl-carousel');
    if (posts_carousel_medium_thumb.length) {
      jQuery.each(posts_carousel_medium_thumb, function(index, item) {
        jQuery(item).owlCarousel({
          items: 4,
          navigation: false,
          pagination: false,
          itemsDesktop: [1199, 2],
          itemsDesktopSmall: [979, 2]
        });
      });
    }
  },
  initPostsSlideMediumNoSpacing: function() {
    var posts_slide_medium_no_spacing;
    posts_slide_medium_no_spacing = jQuery('.e_widget_posts_slide_medium_no_spacing .owl-carousel');
    if (posts_slide_medium_no_spacing.length) {
      jQuery.each(posts_slide_medium_no_spacing, function() {
        var owl;
        owl = jQuery(this);
        owl.owlCarousel({
          items: 4,
          navigation: false,
          pagination: false,
          slideSpeed: 700,
          itemsDesktop: [1199, 2],
          itemsDesktopSmall: [979, 2],
          itemsTablet: [768, 2],
          itemsTabletSmall: [640, 1],
          itemsMobile: [479, 1],
          afterInit: function() {
            var widget;
            widget = owl.parents('.widget');
            widget.find('.e_prev').on("click", function() {
              owl.trigger('owl.prev');
            });
            widget.find('.e_next').on("click", function() {
              owl.trigger('owl.next');
            });
          }
        });
      });
    }
  },
  initPostsCarouselVerticalThumb: function() {
    var e_widget_posts_carousel_vertical_thumb;
    e_widget_posts_carousel_vertical_thumb = jQuery('.e_widget_posts_carousel_vertical_thumb .owl-carousel');
    if (e_widget_posts_carousel_vertical_thumb.length) {
      jQuery.each(e_widget_posts_carousel_vertical_thumb, function(index, item) {
        jQuery(item).owlCarousel({
          items: 3,
          navigation: false,
          pagination: true,
          autoPlay: true,
          stopOnHover: true,
          itemsDesktop: [1199, 3]
        });
      });
    }
  },
  initPostsCarouselSync: function() {
    var e_widget_posts_sync;
    e_widget_posts_sync = jQuery('.e_widget_posts_sync');
    if (e_widget_posts_sync.length) {
      jQuery.each(e_widget_posts_sync, function(index, item) {
        var e_thumbs, e_titles;
        e_thumbs = jQuery(item).find('.e_thumbs');
        e_titles = jQuery(item).find('.e_titles');
        e_thumbs.owlCarousel({
          items: 3,
          navigation: true,
          pagination: false,
          autoPlay: false,
          stopOnHover: true,
          itemsDesktop: [1199, 3],
          navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsiveRefreshRate: 200,
          afterAction: function(el) {
            var current;
            current = this.currentItem;
            e_titles.trigger("owl.goTo", current);
          }
        });
        e_titles.owlCarousel({
          items: 3,
          navigation: false,
          pagination: false,
          autoPlay: false,
          stopOnHover: true,
          itemsDesktop: [1199, 3],
          mouseDrag: false,
          touchDrag: false,
          responsiveRefreshRate: 200
        });
      });
    }
  },
  initReviewCarousel: function() {
    var e_widget_review_carousel;
    e_widget_review_carousel = jQuery('.e_widget_review_carousel .owl-carousel');
    if (e_widget_review_carousel.length) {
      jQuery.each(e_widget_review_carousel, function() {
        var owl;
        owl = jQuery(this);
        owl.owlCarousel({
          navigation: true,
          pagination: false,
          singleItem: true,
          autoPlay: false,
          navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          transitionStyle: 'fade'
        });
      });
    }
  },
  clickPlayVideo: function() {
    if (jQuery('.e_widget_videos_list').length) {
      jQuery('.e_widget_videos_list').on('click', '.e_play', function(event) {
        var button, current_item, wrap;
        event.preventDefault();
        button = jQuery(this);
        wrap = button.parents('.e_widget_videos_list');
        current_item = button.parents('.e_item');
        if (current_item.hasClass('e_deactive')) {
          wrap.find('.e_active').removeClass('e_active').addClass('e_deactive');
          current_item.removeClass('e_deactive').addClass('e_active');
        }
      });
    }
  },
  initTabs: function() {
    jQuery('.e_tabs').on('click', '.e_title', function(event) {
      event.preventDefault();
      if (!jQuery(this).hasClass('e_active')) {
        jQuery(this).parents('ul').find('.e_title.e_active').removeClass('e_active');
        jQuery(this).addClass('e_active');
        jQuery(this).parents('.e_tabs').find('.e_tab_content.e_active').removeClass('e_active');
        return jQuery(jQuery(this).attr('href')).addClass('e_active');
      }
    });
  },
  initToggles: function() {
    return jQuery('.e_toggle').on('click', '.e_toggle_title', function(event) {
      event.preventDefault();
      if (jQuery(this).parent().hasClass('e_active')) {
        jQuery(this).parent().removeClass('e_active');
        jQuery(this).find('.e_action').text('+');
        jQuery(this).next().slideUp(500);
      } else {
        if (jQuery(this).parents('.e_toggles').hasClass('e_accordions')) {
          jQuery(this).parents('.e_toggles').find('.e_toggle').removeClass('e_active');
          jQuery(this).parents('.e_toggles').find('.e_action').text('+');
          jQuery(this).parents('.e_toggles').find('.e_toggle_content').slideUp(500);
        }
        jQuery(this).parent().addClass('e_active');
        jQuery(this).find('.e_action').text('-');
        jQuery(this).next().slideDown(500);
      }
    });
  },
  initNotification: function() {
    jQuery('.e_notification').on('click', '.e_close', function(event) {
      event.preventDefault();
      jQuery(this).parents('.e_notification').slideUp(500);
    });
  },
  initMaps: function() {
    var id_map, lat, lng, place, styles;
    if (jQuery('.e_google_maps').length) {
      id_map = jQuery('.e_google_maps').attr('id');
      lat = parseFloat(jQuery('.e_google_maps').attr('data-latitude'));
      lng = parseFloat(jQuery('.e_google_maps').attr('data-longitude'));
      place = jQuery('.e_google_maps').attr('data-place');
      e_google_maps = new GMaps({
        el: '#' + id_map,
        lat: lat,
        lng: lng,
        zoom: 10,
        zoomControl: true,
        zoomControlOpt: {
          style: 'SMALL',
          position: 'TOP_LEFT'
        },
        panControl: true,
        streetViewControl: true,
        mapTypeControl: true,
        overviewMapControl: true
      });
      e_google_maps.addMarker({
        lat: lat,
        lng: lng,
        title: place
      });
      styles = [
        {
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#444444'
            }
          ]
        }, {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#f2f2f2'
            }
          ]
        }, {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        }, {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100
            }, {
              'lightness': 45
            }
          ]
        }, {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        }, {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        }, {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        }, {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#e74c3c'
            }, {
              'visibility': 'on'
            }
          ]
        }
      ];
      e_google_maps.setOptions({
        styles: styles
      });
    }
  },
  initBackgroundSlideshow: function() {
    if (enliven_config.bg_slideshow.length && jQuery('body').hasClass('e_bg_slideshow')) {
      jQuery.vegas('slideshow', {
        backgrounds: enliven_config.bg_slideshow
      });
    }
    if (enliven_config.bg_single.length && jQuery('body').hasClass('e_bg_cover')) {
      jQuery.vegas('slideshow', {
        backgrounds: enliven_config.bg_single
      });
    }
  },
  initLighbox: function() {
    var lighbox_args;
    lighbox_args = {
      baseZIndex: 10001,
      useBodyOverflow: false,
      usePopupEasyClose: false,
      overlayColor: '#1f2328',
      overlayOpacity: 0.65,
      usePopupDefaultStyling: false,
      usePopupCaption: true,
      popupLoaderText: '',
      usePopupNav: true,
      popupBlankCaptionText: false,
      caption: {
        selector: ".e_caption",
        remove: true
      }
    };
    jQuery('.gallery-wrap').poptrox(lighbox_args);
    jQuery('.e_lightbox_video').poptrox(lighbox_args);
  },
  initVideoResponsive: function() {
    jQuery('body').fitVids();
  }
};
