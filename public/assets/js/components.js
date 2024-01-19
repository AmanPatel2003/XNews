/**
 * HSCore -
 *
 * @author HtmlStream
 * @version 1.0
 */
;
(function($) {

  'use strict';

  $.HSCore = {

    /**
     *
     *
     * @param
     *
     * @return
     */
    init: function() {

      $(document).ready(function(e) {
        // Botostrap Tootltips
        $('[data-toggle="tooltip"]').tooltip();

        // Set Background Image Dynamically
        if( $('[data-bg-img-src]').length ) $.HSCore.helpers.bgImage( $('[data-bg-img-src]') );

        // Extends jQuery
        $.HSCore.helpers.extendjQuery();

        // Bootstrap Navigation Options
        $.HSCore.helpers.bootstrapNavOptions.init();

      });

      $(window).on('load', function(e) {

      });

    },

    /**
     *
     *
     * @var
     */
    components: {},

    /**
     *
     *
     * @var
     */
    helpers: {

      Math: {

        /**
         * Returns random value from [startPoint, endPoint] interval.
         *
         * @param Number startPoint
         * @param Number endPoint
         * @param Boolean fixed
         *
         * @return Number
         */
        getRandomValueFromRange(startPoint, endPoint, fixed) {

          fixed = fixed ? fixed : false;

          Math.random();

          return fixed ?

              (Math.random() * (endPoint - startPoint) + startPoint) :
              (Math.floor(Math.random() * (endPoint - startPoint + 1)) + startPoint);

        }

      },

      /**
       * Sets background-image dynamically.
       *
       * @param jQuery collection
       *
       * @return jQuery|undefined
       */
      bgImage: function(collection) {

        if( !collection || !collection.length ) return;

        return collection.each(function(i, el){

          var $el = $(el),
              bgImageSrc = $el.data('bg-img-src');

          if(bgImageSrc) $el.css('background-image', 'url('+bgImageSrc+')');

        });

      },

      /**
       * Extends basic jQuery functionality
       *
       * @return undefined
       */
      extendjQuery: function () {

        $.fn.extend({

          /**
           * Runs specified function after loading of all images.
           *
           * @return Deferred
           */
          imagesLoaded : function () {

            var $imgs = this.find('img[src!=""]');

            if (!$imgs.length) {return $.Deferred().resolve().promise();}

            var dfds = [];

            $imgs.each(function(){
                var dfd = $.Deferred();
                dfds.push(dfd);
                var img = new Image();
                img.onload = function(){dfd.resolve();};
                img.onerror = function(){dfd.resolve();};
                img.src = this.src;
            });

            return $.when.apply($,dfds);

          }

        });

      },

      /**
       * Bootstrap navigation options
       *
       */
      bootstrapNavOptions: {
        init: function() {
          this.mobileHideOnScroll();
        },

        mobileHideOnScroll: function() {
          var $collection = $('.navbar');
          if( !$collection.length ) return;

          var $w = $(window),
          breakpointsMap = {
            'sm': 576,
            'md': 768,
            'lg': 992,
            'xl': 1200
          };

          $('body').on('click.HSMobileHideOnScroll', '.navbar-toggler', function(e){
            var $navbar = $(this).closest('.navbar');

            if( $navbar.length ) {
              $navbar.data('mobile-menu-scroll-position', $w.scrollTop());
            }
            e.preventDefault();
          });

          $w.on('scroll.HSMobileHideOnScroll', function(e){
            $collection.each(function(i,el){
              var $this = $(el), $toggler, $nav, offset, $hamburgers, breakpoint;
              if( $this.hasClass('navbar-toggleable-xl') ) breakpoint = breakpointsMap['xl'];
              else if( $this.hasClass('navbar-toggleable-lg') ) breakpoint = breakpointsMap['lg'];
              else if( $this.hasClass('navbar-toggleable-md') ) breakpoint = breakpointsMap['md'];
              else if( $this.hasClass('navbar-toggleable-xs') ) breakpoint = breakpointsMap['xs'];

              if( $w.width() > breakpoint ) return;

              $toggler = $this.find('.navbar-toggler');
              $nav = $this.find('.navbar-collapse');

              if(!$nav.data('mobile-scroll-hide')) return;

              if($nav.length) {
                offset = $this.data('mobile-menu-scroll-position');

                if( Math.abs( $w.scrollTop() - offset ) > 40 && $nav.hasClass('show') ) {
                  $toggler.trigger('click');
                  $hamburgers = $toggler.find('.is-active');
                  if($hamburgers.length) {
                    $hamburgers.removeClass('is-active');
                  }
                }
              }
            });
          });
        }
      }

    },

    /**
     *
     *
     * @var
     */
    settings: {
      rtl: false
    }

  };

  $.HSCore.init();

})(jQuery);
/**
 * Header Component.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSHeader = {

    /**
     * Base configuration.
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      headerFixMoment: 0,
      headerFixEffect: 'slide',
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      }
    },

    /**
     * Initializtion of header.
     *
     * @param jQuery element
     *
     * @return jQuery
     */
    init: function( element ) {

      if( !element || element.length !== 1 || element.data('HSHeader')) return;

      var self = this;

      this.element = element;
      this.config = $.extend(true, {}, this._baseConfig, element.data());

      this.observers = this._detectObservers();
      this.fixMediaDifference( this.element );
      this.element.data('HSHeader', new HSHeader(this.element, this.config, this.observers ) );

      $(window)
        .on('scroll.uHeader', function(e){

          element
            .data('HSHeader')
            .notify();

        })
        .on('resize.uHeader', function(e){

          if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

          self.resizeTimeOutId = setTimeout( function(){

            element
              .data('HSHeader')
              .checkViewport()
              .update();

          }, 100 );

        })
        .trigger('scroll.uHeader');

      return this.element;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    _detectObservers: function() {

      if(!this.element || !this.element.length) return;

      var observers = {
        'xs': [],
        'sm': [],
        'md': [],
        'lg': [],
        'xl': []
      };

      /* ------------------------ xs -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element') ) {
          observers['xs'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top') ) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section') ) {

            observers['xs'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating') ) {

          observers['xs'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable') ) {
          observers['xs'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom') ) {

          if(this.element.hasClass('u-header--change-appearance')) {
            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top') || this.element.hasClass('u-header--static')) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom') || this.element.hasClass('u-header--abs-top-2nd-screen') ) {

          observers['xs'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ sm -------------------------*/

        // Sticky top

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--sm') ) {
          observers['sm'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        if( this.element.hasClass('u-header--sticky-top--sm') ) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--sm') ) {

            observers['sm'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--sm') ) {

          observers['sm'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--sm') ) {
          observers['sm'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--sm') ) {

          if(this.element.hasClass('u-header--change-appearance--sm')) {
            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--sm') || this.element.hasClass('u-header--static--sm')) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--sm') || this.element.hasClass('u-header--abs-top-2nd-screen--sm') ) {

          observers['sm'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ md -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--md') ) {
          observers['md'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--md') ) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--md') ) {

            observers['md'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--md') ) {

          observers['md'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--md') ) {
          observers['md'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--md') ) {

          if(this.element.hasClass('u-header--change-appearance--md')) {
            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--md') || this.element.hasClass('u-header--static--md')) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--md') || this.element.hasClass('u-header--abs-top-2nd-screen--md') ) {

          observers['md'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      /* ------------------------ lg -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--lg') ) {
          observers['lg'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--lg') ) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--lg') ) {

            observers['lg'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--lg') ) {

          observers['lg'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--lg') ) {
          observers['lg'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--lg') ) {

          if(this.element.hasClass('u-header--change-appearance--lg')) {
            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--lg') || this.element.hasClass('u-header--static--lg')) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--lg') || this.element.hasClass('u-header--abs-top-2nd-screen--lg') ) {

          observers['lg'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ xl -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--xl') ) {
          observers['xl'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--xl') ) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--xl') ) {

            observers['xl'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--xl') ) {

          observers['xl'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        // Sticky bottom

        if( this.element.hasClass('u-header--invulnerable--xl') ) {
          observers['xl'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--xl') ) {

          if(this.element.hasClass('u-header--change-appearance--xl')) {
            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--xl') || this.element.hasClass('u-header--static--xl')) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--xl') || this.element.hasClass('u-header--abs-top-2nd-screen--xl') ) {

          observers['xl'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      return observers;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    fixMediaDifference: function(element) {

      if(!element || !element.length || !element.filter('[class*="u-header--side"]').length) return;

      var toggleable;

      if(element.hasClass('u-header--side-left--xl') || element.hasClass('u-header--side-right--xl')) {

        toggleable = element.find('.navbar-toggleable-xl');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-toggleable-xl')
            .addClass('navbar-toggleable-lg');
        }

      }
      else if(element.hasClass('u-header--side-left--lg') || element.hasClass('u-header--side-right--lg')) {

        toggleable = element.find('.navbar-toggleable-lg');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-toggleable-lg')
            .addClass('navbar-toggleable-md');
        }

      }
      else if(element.hasClass('u-header--side-left--md') || element.hasClass('u-header--side-right--md')) {

        toggleable = element.find('.navbar-toggleable-md');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-toggleable-md')
            .addClass('navbar-toggleable-sm');
        }

      }
      else if(element.hasClass('u-header--side-left--sm') || element.hasClass('u-header--side-right--sm')) {

        toggleable = element.find('.navbar-toggleable-sm');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-toggleable-sm')
            .addClass('navbar-toggleable');
        }

      }

    }

  }

  /**
   * HSHeader constructor function.
   *
   * @param jQuery element
   * @param Object config
   * @param Object observers
   *
   * @return undefined
   */
  function HSHeader( element, config, observers ) {

    if( !element || !element.length ) return;

    this.element = element;
    this.config = config;

    this.observers = observers && $.isPlainObject( observers ) ? observers : {};

    this.viewport = 'xs';
    this.checkViewport();

  }

  /**
   *
   *
   * @return Object
   */
  HSHeader.prototype.checkViewport = function() {

    var $w = $(window);

    if( $w.width() > this.config.breakpointsMap['sm'] && this.observers['sm'].length ){
      this.prevViewport = this.viewport;
      this.viewport = 'sm';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['md'] && this.observers['md'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'md';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['lg'] && this.observers['lg'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'lg';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['xl'] && this.observers['xl'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'xl';
      return this;
    }


    if(this.prevViewport) this.prevViewport = this.viewport;
    this.viewport = 'xs';


    return this;

  }

  /**
   * Notifies all observers.
   *
   * @return Object
   */
  HSHeader.prototype.notify = function(){

    if( this.prevViewport ) {
      this.observers[this.prevViewport].forEach(function(observer){
        observer.destroy();
      });
      this.prevViewport = null;
    }

    this.observers[this.viewport].forEach(function(observer){
      observer.check();
    });

    return this;

  }

  /**
   * Reinit all header's observers.
   *
   * @return Object
   */
  HSHeader.prototype.update = function() {

    // if( this.prevViewport ) {
    //   this.observers[this.prevViewport].forEach(function(observer){
    //     observer.destroy();
    //   });
    //   this.prevViewport = null;
    // }

    for(var viewport in this.observers) {

      this.observers[viewport].forEach(function(observer){
        observer.destroy();
      });

    }

    this.prevViewport = null;

    this.observers[this.viewport].forEach(function(observer){
      observer.reinit();
    });

    return this;

  }

  /**
   * Abstract constructor function for each observer.
   *
   * @param jQuery element
   *
   * @return Boolean|undefined
   */
  function HSAbstractObserver(element) {
    if( !element || !element.length ) return;

    this.element = element;
    this.defaultState = true;

    this.reinit = function() {

      this
        .destroy()
        .init()
        .check();
    }

    return true;
  }

  /**
   * Header's observer which is responsible for 'sticky' behavior.
   *
   * @param jQuery element
   */
  function HSHeaderStickObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.init = function() {
    this.defaultState = true;
    this.offset = this.element.offset().top;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if(docScrolled < this.offset && !this.defaultState){
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.changeState = function() {

    this.element.addClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.toDefaultState = function() {

    this.element.removeClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }


  /**
   * Header's observer which is responsible for 'show/hide' behavior which is depended on scroll direction.
   *
   * @param jQuery element
   */
  function HSHeaderMomentShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.init = function() {
    this.direction = 'down';
    this.delta = 0;
    this.defaultState = true;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') != 0 ? this.element.data('header-fix-moment') : 5;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.checkDirection = function() {

    if( $(window).scrollTop() > this.delta ) {
      this.direction = 'down';
    }
    else {
      this.direction = 'up';
    }

    this.delta = $(window).scrollTop();

    return this;

  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.toDefaultState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.changeState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.check = function() {

    var docScrolled = $(window).scrollTop();
    this.checkDirection();


    if( docScrolled >= this.offset && this.defaultState && this.direction == 'down' ) {
      this.changeState();
    }
    else if ( !this.defaultState && this.direction == 'up') {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.init = function() {
    if(!this.defaultState && $(window).scrollTop() > this.offset) return this;

    this.defaultState = true;
    this.transitionDuration = parseFloat( getComputedStyle( this.element.get(0) )['transition-duration'], 10 ) * 1000;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') > this.element.outerHeight() ? this.element.data('header-fix-moment') : this.element.outerHeight() + 100;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.destroy = function() {
    if( !this.defaultState && $(window).scrollTop() > this.offset ) return this;

    this.element.removeClass('u-header--untransitioned');
    this._removeCap();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._insertCap = function() {

    this.element.addClass('js-header-fix-moment u-header--untransitioned');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', this.element.outerHeight() );

    }

    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      default :
        this.element.addClass('u-header--invisible')
    }

    this.capInserted = true;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._removeCap = function() {

    var self = this;

    this.element.removeClass('js-header-fix-moment');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', 0 );

    }

    if(this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);

    this.removeCapTimeOutId = setTimeout(function() {
      self.element.removeClass('u-header--moved-up u-header--faded u-header--invisible');
    }, 10);

    this.capInserted = false;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.check = function() {

    var $w = $(window);

    if( $w.scrollTop() > this.element.outerHeight() && !this.capInserted ) {
      this._insertCap();
    }
    else if($w.scrollTop() <= this.element.outerHeight() && this.capInserted) {
      this._removeCap();
    }

    if( $w.scrollTop() > this.offset && this.defaultState)  {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }



  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.changeState = function() {

    this.element.removeClass('u-header--untransitioned');

    if( this.animationTimeoutId ) clearTimeout( this.animationTimeoutId );

    switch( this.effect ) {
      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.toDefaultState = function() {

    var self = this;

    this.animationTimeoutId = setTimeout(function(){
      self.element.addClass('u-header--untransitioned');
    }, this.transitionDuration );


    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;
      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeLogoObserver( element, config ) {

    if( !HSAbstractObserver.call( this, element ) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }
    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 0;
    }
    if(this.hasFixedClass) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.imgs = this.element.find('.u-header__logo-img');
    this.defaultState = true;

    this.mainLogo = this.imgs.filter('.u-header__logo-img--main');
    this.additionalLogo = this.imgs.not('.u-header__logo-img--main');

    if( !this.imgs.length ) return this;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.check = function() {

    var $w = $(window);

    if( !this.imgs.length ) return this;

    if( $w.scrollTop() > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.changeState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.removeClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.addClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.toDefaultState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.addClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.removeClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHideSectionObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderHideSectionObserver.prototype.init = function() {

    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.section = this.element.find('.u-header__section--hidden');
    this.defaultState = true;

    this.sectionHeight = this.section.length ? this.section.outerHeight() : 0;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.destroy = function() {

    if( this.section.length ) {

      this.element.css({
        'margin-top': 0
      });

    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.check = function() {

    if(!this.section.length) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.changeState = function() {

    var self = this;

    this.element.stop().animate({
      'margin-top': self.sectionHeight * -1 - 1 // last '-1' is a small fix
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.toDefaultState = function() {

    this.element.stop().animate({
      'margin-top': 0
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeAppearanceObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }

    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    }

    if( this.hasFixedClass ) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.sections = this.element.find('[data-header-fix-moment-classes]');

    this.defaultState = true;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.check = function() {

    if( !this.sections.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.changeState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.addClass( classes + ' js-header-change-moment');
      $this.removeClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.toDefaultState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.removeClass( classes + ' js-header-change-moment' );
      $this.addClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHasHiddenElement(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      animated: true
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.init = function() {
    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.elements = this.element.find('.u-header--hidden-element');
    this.defaultState = true;
    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.check = function() {

    if( !this.elements.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.changeState = function() {

    if(this.config.animated) {
      this.elements.stop().slideUp();
    }
    else {
      this.elements.hide();
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.toDefaultState = function() {

    if(this.config.animated) {
      this.elements.stop().slideDown();
    }
    else {
      this.elements.show();
    }

    this.defaultState = !this.defaultState;
    return this;

  }





  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderFloatingObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = config && $.isPlainObject(config) ? $.extend(true, {}, this.config, config) : {};
    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.init = function() {

    this.offset = this.element.offset().top;
    this.sections = this.element.find('.u-header__section');

    this.defaultState = true;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.changeState = function() {

    this.element
        .addClass('js-header-fix-moment')
        .addClass( this.element.data('header-fix-moment-classes') )
        .removeClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.addClass( $section.data('header-fix-moment-classes') )
                .removeClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.toDefaultState = function() {

    this.element
        .removeClass('js-header-fix-moment')
        .removeClass( this.element.data('header-fix-moment-classes') )
        .addClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.removeClass( $section.data('header-fix-moment-classes') )
                .addClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderWithoutBehaviorObserver( element ) { if( !HSAbstractObserver.call(this, element) ) return; }

  HSHeaderWithoutBehaviorObserver.prototype.check = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.init = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.destroy = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.changeState = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.toDefaultState = function() {
    return this;
  }


})(jQuery);
/**
 * Dropdown component.
 *
 * @author Htmlstream
 * @version 1.0
 */
;
(function($) {
  'use strict';

  $.HSCore.components.HSDropdown = {

    /**
     * Base configuration of the component.
     *
     * @private
     */
    _baseConfig: {

      dropdownEvent: 'click',
      dropdownType: 'simple',
      dropdownDuration: 300,
      dropdownEasing: 'linear',
      dropdownAnimationIn: 'fadeIn',
      dropdownAnimationOut: 'fadeOut',
      dropdownHideOnScroll: true,
      dropdownHideOnBlur: false,
      dropdownDelay: 350,

      afterOpen: function(invoker){},
      afterClose: function(invoker){}
    },

    /**
     * Collection of all initialized items on the page.
     *
     * @private
     */
    _pageCollection: $(),

    /**
     * Initialization.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function(collection, config) {

      var self;

      if( !collection || !collection.length ) return;

      self = this;

      collection.each(function(i, el){

        var $this = $(el), itemConfig;

        if( $this.data('HSDropDown') ) return;

        itemConfig = config && $.isPlainObject(config) ? 
                     $.extend(true, {}, self._baseConfig, config, $this.data()) :
                     $.extend(true, {}, self._baseConfig, $this.data());

        switch( itemConfig.dropdownType ) {

          case 'css-animation' :

            $this.data('HSDropDown', new DropdownCSSAnimation($this, itemConfig));

          break;

          case 'jquery-slide' : 

            $this.data('HSDropDown', new DropdownJSlide($this, itemConfig));

          break;

          default : 

            $this.data('HSDropDown', new DropdownSimple($this, itemConfig));

        }

        self._pageCollection = self._pageCollection.add( $this );
        self._bindEvents( $this, itemConfig.dropdownEvent, itemConfig.dropdownDelay );

      });

      $(document).on('keyup.HSDropDown', function(e){

        if(e.keyCode && e.keyCode == 27) {

          self._pageCollection.each( function(i, el){

            $(el).data('HSDropDown').hide();

          } );

        }

      });

      $(window).on('scroll.HSDropDown', function(e){

        self._pageCollection.each(function(i, el){

          var DropDown = $(el).data('HSDropDown');

          if(DropDown.getOption('dropdownHideOnScroll')) {

            DropDown.hide();

          }

        });

      });

      $(window).on('resize.HSDropDown', function(e){

        if(self._resizeTimeOutId) clearTimeout(self._resizeTimeOutId);

        self._resizeTimeOutId = setTimeout(function(){

          self._pageCollection.each(function(i, el){

            var DropDown = $(el).data('HSDropDown');

            DropDown.smartPosition(DropDown.target);

          });

        }, 50);

      });

      return collection;

    },

    /**
     * Binds necessary events.
     * 
     * @param {jQuery} $invoker
     * @param {String} eventType
     * @param {Number} delay
     * @private 
     */
    _bindEvents: function( $invoker, eventType, delay ) {

      var $dropdown = $($invoker.data('dropdown-target'));

      if( eventType == 'hover' && !_isTouch() ) {

        $invoker.on('mouseenter.HSDropDown', function(e) {

          var $invoker = $(this),
              HSDropDown = $invoker.data('HSDropDown');

          if( !HSDropDown ) return;

          if( HSDropDown.dropdownTimeOut ) clearTimeout( HSDropDown.dropdownTimeOut );
          HSDropDown.show();

        })
        .on('mouseleave.HSDropDown', function(e) {

          var $invoker = $(this),
              HSDropDown = $invoker.data('HSDropDown');

          if( !HSDropDown ) return;

          HSDropDown.dropdownTimeOut = setTimeout(function(){

            HSDropDown.hide();

          }, delay);

        });

        if( $dropdown.length ) {
          $dropdown.on('mouseenter.HSDropDown', function(e){

            var HSDropDown = $invoker.data('HSDropDown');

            if( HSDropDown.dropdownTimeOut ) clearTimeout( HSDropDown.dropdownTimeOut );
            HSDropDown.show();

          })
          .on('mouseleave.HSDropDown', function(e) {

            var HSDropDown = $invoker.data('HSDropDown');

            HSDropDown.dropdownTimeOut = setTimeout(function() {
              HSDropDown.hide();
            }, delay);

          });
        }

      }
      else {

        $invoker.on('click.HSDropDown', function(e){

          var $invoker = $(this);

          if( !$invoker.data('HSDropDown') ) return;

          $invoker.data('HSDropDown').toggle();

          e.stopPropagation();
          e.preventDefault();

        });

      }

    }
  };

  function _isTouch() {
    return 'ontouchstart' in window;
  }

  /**
   * Abstract Dropdown class.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @abstract 
   */
  function AbstractDropdown(element, config) {

    if( !element.length ) return false;

    this.element = element;
    this.config = config;

    this.target = $(this.element.data('dropdown-target'));

    this.allInvokers = $('[data-dropdown-target="'+this.element.data('dropdown-target')+'"]');

    this.toggle = function() {
      if( !this.target.length ) return this;

      if( this.defaultState ) {
        this.show();
      }
      else {
        this.hide();
      }

      return this;
    };

    this.smartPosition = function( target ) {

      if(target.data('baseDirection')) {
        target.css(
          target.data('baseDirection').direction,
          target.data('baseDirection').value
        );
      }

      target.removeClass('u-dropdown--reverse-y');

      var $w = $(window),
          styles = getComputedStyle(target.get(0)),
          direction = Math.abs( parseInt( styles.left, 10) ) < 40 ? 'left' : 'right',
          targetOuterGeometry = target.offset();

      // horizontal axis
      if(direction == 'right') {

        if( !target.data('baseDirection') ) target.data('baseDirection', {
          direction: 'right',
          value: parseInt( styles.right, 10)
        } );

        if( targetOuterGeometry.left < 0 ) {

          target.css(
            'right',
            (parseInt( target.css('right'), 10 ) - (targetOuterGeometry.left - 10 )) * -1
          );

        }

      }
      else {

        if( !target.data('baseDirection') ) target.data('baseDirection', {
          direction: 'left',
          value: parseInt( styles.left, 10)
        } );

        if( targetOuterGeometry.left + target.outerWidth() > $w.width() ) {

          target.css(
            'left',
            (parseInt( target.css('left'), 10 ) - (targetOuterGeometry.left + target.outerWidth() + 10 - $w.width()))
          );

        }

      }

      // vertical axis
      if( targetOuterGeometry.top + target.outerHeight() - $w.scrollTop() > $w.height() ) {
        target.addClass('u-dropdown--reverse-y');
      }

    };

    this.getOption = function(option){
      return this.config[option] ? this.config[option] : null;
    };

    return true;
  }


  /**
   * DropdownSimple constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor 
   */
  function DropdownSimple(element, config) {
    if( !AbstractDropdown.call(this, element, config) ) return;

    Object.defineProperty(this, 'defaultState', {
      get: function() {
        return this.target.hasClass('u-dropdown--hidden');
      }
    });

    this.target.addClass('u-dropdown--simple');

    this.hide();
  }

  /**
   * Shows dropdown.
   *
   * @public 
   * @return {DropdownSimple}
   */
  DropdownSimple.prototype.show = function() {

    this.smartPosition(this.target);

    this.target.removeClass('u-dropdown--hidden');
    if( this.allInvokers.length ) this.allInvokers.attr('aria-expanded', 'true');
    this.config.afterOpen.call(this.target, this.element);

    return this;
  }

  /**
   * Hides dropdown.
   *
   * @public 
   * @return {DropdownSimple}
   */
  DropdownSimple.prototype.hide = function() {

    this.target.addClass('u-dropdown--hidden');
    if( this.allInvokers.length ) this.allInvokers.attr('aria-expanded', 'false');
    this.config.afterClose.call(this.target, this.element);

    return this;
  }

  /**
   * DropdownCSSAnimation constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor 
   */
  function DropdownCSSAnimation(element, config) {
    if( !AbstractDropdown.call(this, element, config) ) return;

    var self = this;

    this.target
        .addClass('u-dropdown--css-animation u-dropdown--hidden')
        .css('animation-duration', self.config.dropdownDuration + 'ms');

    Object.defineProperty(this, 'defaultState', {
      get: function() {
        return this.target.hasClass('u-dropdown--hidden');
      }
    });

    if(this.target.length) {

      this.target.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

        if( self.target.hasClass( self.config.dropdownAnimationOut ) ) {
          self.target.removeClass( self.config.dropdownAnimationOut )
                     .addClass('u-dropdown--hidden');


          if( self.allInvokers.length ) self.allInvokers.attr('aria-expanded', 'false');

          self.config.afterClose.call(self.target, self.element);
        }

        if( self.target.hasClass( self.config.dropdownAnimationIn ) ) {
          
          if( self.allInvokers.length ) self.allInvokers.attr('aria-expanded', 'true');

          self.config.afterOpen.call(self.target, self.element);
        }

        e.preventDefault();
        e.stopPropagation();
      });

    }
  }

  /**
   * Shows dropdown.
   *
   * @public 
   * @return {DropdownCSSAnimation}
   */
  DropdownCSSAnimation.prototype.show = function() {

    this.smartPosition(this.target);

    this.target.removeClass( 'u-dropdown--hidden' )
               .removeClass( this.config.dropdownAnimationOut )
               .addClass( this.config.dropdownAnimationIn );

  }

  /**
   * Hides dropdown.
   *
   * @public 
   * @return {DropdownCSSAnimation}
   */
  DropdownCSSAnimation.prototype.hide = function() {

    this.target.removeClass( this.config.dropdownAnimationIn )
               .addClass( this.config.dropdownAnimationOut );

  }

  /**
   * DropdownSlide constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor 
   */
  function DropdownJSlide(element, config) {
    if( !AbstractDropdown.call(this, element, config) ) return;

    this.target.addClass('u-dropdown--jquery-slide u-dropdown--hidden').hide();

    Object.defineProperty(this, 'defaultState', {
      get: function() {
        return this.target.hasClass('u-dropdown--hidden');
      }
    });
  }

  /**
   * Shows dropdown.
   *
   * @public 
   * @return {DropdownJSlide}
   */
  DropdownJSlide.prototype.show = function() {

    var self = this;

    this.smartPosition(this.target);

    this.target.removeClass('u-dropdown--hidden').stop().slideDown({
      duration: self.config.dropdownDuration,
      easing: self.config.dropdownEasing,
      complete: function(){
        self.config.afterOpen.call(self.target, self.element);
      }
    });

  }

  /**
   * Hides dropdown.
   *
   * @public 
   * @return {DropdownJSlide}
   */
  DropdownJSlide.prototype.hide = function() {

    var self = this;

    this.target.stop().slideUp({
      duration: self.config.dropdownDuration,
      easing: self.config.dropdownEasing,
      complete: function(){
        self.config.afterClose.call(self.target, self.element);
        self.target.addClass('u-dropdown--hidden');
      }
    });

  }

})(jQuery);

/**
 * Hamburgers plugin helper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires hamburgers.min.css
 *
 */
;(function($){
	'use strict';

	$.HSCore.helpers.HSHamburgers = {

		/**
		 * Initialize 'hamburgers' plugin.
		 * 
		 * @param String selector
		 *
		 * @return undefined;
		 */
		init: function(selector) {

			if( !selector || !$(selector).length ) return;

		  var hamburgers = $(selector),
		  		timeoutid;

		  hamburgers.each(function(i, el){

		  	var $this = $(this);

		  	if($this.closest('button').length) {
		  		$this.closest('button').get(0).addEventListener('click', function(e){

		  			var $self = $(this),
		  					$hamburger = $self.find(selector);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$hamburger.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}
		  	else {
		  		$this.get(0).addEventListener('click', function(e){

		  			var $self = $(this);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$self.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}

		  });

		}
		

	};

})(jQuery);
/**
 * Carousel wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSCarousel = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      autoplay: false,
      infinite: true
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Carousel wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCarousel();

      return this.pageCollection;

    },

    initCarousel: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          id = $this.attr('id'),

          //Markup elements
          target = $this.data('nav-for'),
          isThumb = $this.data('is-thumbs'),
          arrowsClasses = $this.data('arrows-classes'),
          arrowLeftClasses = $this.data('arrow-left-classes'),
          arrowRightClasses = $this.data('arrow-right-classes'),
          pagiClasses = $this.data('pagi-classes'),
          pagiHelper = $this.data('pagi-helper'),
          $pagiIcons = $this.data('pagi-icons'),
          $prevMarkup = '<div class="js-prev ' + arrowsClasses + ' ' + arrowLeftClasses + '"></div>',
          $nextMarkup = '<div class="js-next ' + arrowsClasses + ' ' + arrowRightClasses + '"></div>',

          //Setters
          setSlidesToShow = $this.data('slides-show'),
          setSlidesToScroll = $this.data('slides-scroll'),
          setAutoplay = $this.data('autoplay'),
          setAnimation = $this.data('animation'),
          setEasing = $this.data('easing'),
          setFade = $this.data('fade'),
          setSpeed = $this.data('speed'),
          setSlidesRows = $this.data('rows'),
          setCenterMode = $this.data('center-mode'),
          setCenterPadding = $this.data('center-padding'),
          setPauseOnHover = $this.data('pause-hover'),
          setVariableWidth = $this.data('variable-width'),
          setInitialSlide = $this.data('initial-slide'),
          setVertical = $this.data('vertical'),
          setRtl = $this.data('rtl'),
          setInEffect = $this.data('in-effect'),
          setOutEffect = $this.data('out-effect'),
          setInfinite = $this.data('infinite'),
          setDataTitlePosition = $this.data('title-pos-inside'),
          setFocusOnSelect = $this.data('focus-on-select');

        $this.on('init', function (event, slick) {
          $(slick.$slides).css('height', 'auto');
        });

        if (setInEffect && setOutEffect) {
          $this.on('init', function (event, slick) {
            $(slick.$slides).addClass('single-slide');
          });
        }

        if (pagiHelper) {
          $this.on('init', function (event, slick) {
            var $pagination = $this.find('.js-pagination');

            if (!$pagination.length) return;

            $pagination.append('<span class="u-dots-helper"></span>');
          });
        }

        if (isThumb) {
          $('#' + id).on('click', '.js-slide', function (e) {
            e.stopPropagation();
            //Variables
            var i;

            //Variables values
            i = $(this).data('slick-index');

            if ($('#' + id).slick('slickCurrentSlide') !== i) {
              $('#' + id).slick('slickGoTo', i);
            }
          });
        }

        $this.on('init', function (event, slider) {
          var $pagination = $this.find('.js-pagination');

          if (!$pagination.length) return;

          $($pagination[0].children[0]).addClass('slick-current');
        });

        $this.slick({
          autoplay: setAutoplay ? true : false,
          autoplaySpeed: setSpeed ? setSpeed : 3000,

          cssEase: setAnimation ? setAnimation : 'ease',
          easing: setEasing ? setEasing : 'linear',
          fade: setFade ? true : false,

          infinite: setInfinite ? true : false,
          initialSlide: setInitialSlide ? setInitialSlide - 1 : 0,
          slidesToShow: setSlidesToShow ? setSlidesToShow : 1,
          slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 1,
          centerMode: setCenterMode ? true : false,
          variableWidth: setVariableWidth ? true : false,
          pauseOnHover: setPauseOnHover ? true : false,
          rows: setSlidesRows ? setSlidesRows : 1,
          vertical: setVertical ? true : false,
          verticalSwiping: setVertical ? true : false,
          rtl: setRtl ? true : false,
          centerPadding: setCenterPadding ? setCenterPadding : 0,
          focusOnSelect: setFocusOnSelect ? true : false,

          asNavFor: target ? target : false,
          prevArrow: arrowsClasses ? $prevMarkup : false,
          nextArrow: arrowsClasses ? $nextMarkup : false,
          dots: pagiClasses ? true : false,
          dotsClass: 'js-pagination ' + pagiClasses,
          customPaging: function (slider, i) {
            var title = $(slider.$slides[i]).data('title');

            if (title && $pagiIcons) {
              return '<span>' + title + '</span>' + $pagiIcons;
            } else if ($pagiIcons) {
              return '<span></span>' + $pagiIcons;
            } else if (title && setDataTitlePosition) {
              return '<span>' + title + '</span>';
            } else if (title && !setDataTitlePosition) {
              return '<span></span>' + '<strong class="u-dot-title">' + title + '</strong>';
            } else {
              return '<span></span>';
            }
          }
        });

        $this.on('beforeChange', function (event, slider, currentSlide, nextSlide) {
          var $pagination = $this.find('.js-pagination');

          if (!$pagination.length) return;

          if (currentSlide > nextSlide) {
            $($pagination[0].children).removeClass('slick-active-right');
            $($pagination[0].children[nextSlide]).addClass('slick-active-right');
          } else {
            $($pagination[0].children).removeClass('slick-active-right');
          }

          $($pagination[0].children).removeClass('slick-current');
          setTimeout(function () {
            $($pagination[0].children[nextSlide]).addClass('slick-current');
          }, .25);
        });

        if (setInEffect && setOutEffect) {
          $this.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('animated set-position ' + setInEffect + ' ' + setOutEffect);
          });

          $this.on('beforeChange', function (event, slick, currentSlide) {
            $(slick.$slides[currentSlide]).addClass('animated ' + setOutEffect);
          });

          $this.on('setPosition', function (event, slick) {
            $(slick.$slides[slick.currentSlide]).addClass('animated set-position ' + setInEffect);
          });
        }

        //Actions
        collection = collection.add($this);
      });
    },

    /**
     * Implementation of text animation.
     *
     * @param jQuery carousel
     * @param String textAnimationSelector
     *
     * @requires charming.js, anime.js, textfx.js
     *
     * @return undefined
     */
    initTextAnimation(carousel, textAnimationSelector) {

      if (!window.TextFx || !window.anime || !carousel.length) return;

      var $text = carousel.find(textAnimationSelector);

      if (!$text.length) return;

      $text.each(function (i, el) {

        var $this = $(el);

        if (!$this.data('TextFx')) {

          $this.data('TextFx', new TextFx($this.get(0)));

        }

      });


      carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        var targets = slick.$slider
          .find('.slick-track')
          .children();

        var currentTarget = targets.eq(currentSlide),
          nextTarget = targets.eq(nextSlide);

        currentTarget = currentTarget.find(textAnimationSelector);
        nextTarget = nextTarget.find(textAnimationSelector);

        if (currentTarget.length) {
          currentTarget.data('TextFx').hide(currentTarget.data('effect') ? currentTarget.data('effect') : 'fx1');
        }

        if (nextTarget.length) {
          nextTarget.data('TextFx').show(nextTarget.data('effect') ? nextTarget.data('effect') : 'fx1');
        }

      });

    }
  }

})(jQuery);

/**
 * Navigation component.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires HSScrollBar component (hs.scrollbar.js v1.0.0)
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSNavigation = {

    /**
     * Base configuration of the component.
     *
     * @private
     */
    _baseConfig: {
      navigationOverlayClasses: '',
      navigationInitClasses: '',
      navigationInitBodyClasses: '',
      navigationPosition: 'right',
      activeClass: 'u-main-nav--overlay-opened',
      navigationBreakpoint: 768,
      breakpointsMap: {
        'sm': 576,
        'md': 768,
        'lg': 992,
        'xl': 1200
      },
      afterOpen: function(){},
      afterClose: function(){}
    },

    /**
     * Collection of all initialized items on the page.
     *
     * @private
     */
    _pageCollection: $(),

    /**
     * Initializtion of the navigation.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function( collection, config ) {

      var _self = this,
          $w = $(window);

      if(!collection || !collection.length) return $();

      config = config && $.isPlainObject(config) ? config : {};

      $w.on('resize.HSNavigation', function(e){

        if(_self.resizeTimeoutId) clearTimeout(_self.resizeTimeoutId);

        _self.resizeTimeoutId = setTimeout(function(){

          _self._pageCollection.each(function(i, el){

            var $this = $(el),
                HSNavigation = $this.data('HSNavigation');

            if($w.width() > HSNavigation.config.breakpointsMap[HSNavigation.config.navigationBreakpoint] && HSNavigation.isInitialized() ) {

              HSNavigation.destroy();

            }
            else if($w.width() <= HSNavigation.config.breakpointsMap[HSNavigation.config.navigationBreakpoint] && !HSNavigation.isInitialized()) {
              HSNavigation.init();
            }

          });

        }, 50);

      });


      collection.each(function(i, el){

        var $this = $(el),
            itemConfig = $.extend(true, {}, _self._baseConfig, config, $this.data());

        if( $this.data('HSNavigation') ) return;

        $this.data('HSNavigation', _self._factoryMethod( $this, itemConfig ));

        _self._pageCollection = _self._pageCollection.add( $this );

      });


      _self._pageCollection.each(function(i, el){

          var $this = $(el),
              HSNavigation = $this.data('HSNavigation');

          if($w.width() > HSNavigation.config.breakpointsMap[HSNavigation.config.navigationBreakpoint] ) {

            HSNavigation.destroy();

          }
          else if($w.width() <= HSNavigation.config.breakpointsMap[HSNavigation.config.navigationBreakpoint] ) {
            HSNavigation.init();
          }
      });

      return collection;

    },

    /**
     * Returns certain object relative to class name.
     *
     * @param {jQuery} element
     * @param {Object} config
     *
     * @private
     * @return {HSNavigationOverlay|HSNavigationPush}
     */
    _factoryMethod: function(element, config) {

      if( element.filter('[class*="u-main-nav--overlay"]').length ) {
        return new HSNavigationOverlay(element, config);
      }
      else if ( element.filter('[class*="u-main-nav--push"]').length ) {
       return new HSNavigationPush(element, config);
      }

    }

  };

  /**
   * Abstract class for all HSNavigation* objects.
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @return {Boolean}
   */
  function HSNavigationAbstract(element, config) {

    /**
     * Contains current jQuery object.
     *
     * @public
     */
    this.element = element;

    /**
     * Contains body jQuery object.
     *
     * @public
     */
    this.body = $('body');

    /**
     * Contains configuration.
     *
     * @public
     */
    this.config = config;

    /**
     * Reinitialization of the HSNavigation* object.
     *
     * @public
     */
    this.reinit = function() {

      this.destroy().init();

    }
  };

  /**
   * HSNavigationOverlay.
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSNavigationOverlay(element, config) {

    var _self = this;

    // extends some functionality from abstract class
    HSNavigationAbstract.call(this, element, config);

    Object.defineProperties(this, {

      overlayClasses: {
        get: function() {
          return 'u-main-nav__overlay ' + _self.config.navigationOverlayClasses
        }
      },

      bodyClasses: {
        get: function() {
          return 'u-main-nav--overlay-' + _self.config.navigationPosition
        }
      },

      isOpened: {
        get: function() {
          return _self.body.hasClass( _self.config.activeClass );
        }
      }

    });

  };


  /**
   * Initialization of the instance.
   *
   * @public
   */
  HSNavigationOverlay.prototype.init = function() {

    var _self = this;

    /**
     * Contains overlay object.
     *
     * @public
     */
    this.overlay = $('<div></div>', {
      class: _self.overlayClasses
    });

    if( $.HSCore.components.HSScrollBar ) {

      setTimeout(function(){
        $.HSCore.components.HSScrollBar.init( _self.element.find( '.u-main-nav__list-wrapper' ) );
      }, 10);

    }

    this.toggler = $('[data-target="#'+ this.element.attr('id') +'"]');

    if(this.toggler && this.toggler.length) this.toggler.css('display', 'block');

    this.body.addClass( this.bodyClasses );
    this.element
        .addClass('u-main-nav--overlay')
        .append(this.overlay);

    setTimeout(function(){
      _self.element.addClass( _self.config.navigationInitClasses );
      _self.body.addClass( _self.config.navigationInitBodyClasses );

      _self.transitionDuration = parseFloat( getComputedStyle(_self.element.get(0)).transitionDuration, 10 );


      if(_self.transitionDuration > 0) {

        _self.element.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e){

          if(_self.isOpened && (e.originalEvent.propertyName == 'right' || e.originalEvent.propertyName == 'left')) {
            _self.config.afterOpen.call(_self.element, _self.overlay);
          }
          else if(!_self.isOpened && (e.originalEvent.propertyName == 'right' || e.originalEvent.propertyName == 'left')) {
            _self.config.afterClose.call(_self.element, _self.overlay);
          }

          e.stopPropagation();
          e.preventDefault();

        });

      }

    },50);

    this._bindEvents();


    this.isInit = true;

  };


  /**
   * Destroys the instance.
   *
   * @public
   */
  HSNavigationOverlay.prototype.destroy = function() {

    var _self = this;

    if(this.overlay) this.overlay.remove();

    if(this.toggler && this.toggler.length) this.toggler.hide();

    if( $.HSCore.components.HSScrollBar ) {

      setTimeout(function(){
        $.HSCore.components.HSScrollBar.destroy( _self.element.find( '.u-main-nav__list-wrapper' ) );
      }, 10);

    }

    setTimeout(function(){
      if(_self.transitionDuration && _self.transitionDuration > 0) {
        _self.element.off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend");
      }
    },50);

    this.body.removeClass( this.bodyClasses );
    this.element
        .removeClass('u-main-nav--overlay')
        .removeClass(this.config.navigationInitClasses);

    this.body.removeClass( this.bodyClasses ).removeClass(this.config.navigationInitBodyClasses);

    this._unbindEvents();

    this.isInit = false;

  };

  /**
   * Binds necessary events.
   *
   * @private
   */
  HSNavigationOverlay.prototype._bindEvents = function() {

    var _self = this;

    if(this.toggler && this.toggler.length) {
      this.toggler.on('click.HSNavigation', function(e){

        if(_self.isOpened) {
          _self.close();
        }
        else {
          _self.open();
        }

        e.preventDefault();

      });
    }

    this.overlay.on('click.HSNavigation', function(e){
      _self.close();
    });

    $(document).on('keyup.HSNavigation', function(e){
      if(e.keyCode == 27) {
        _self.close();
      }
    });

  };

  /**
   * Unbinds necessary events.
   *
   * @private
   */
  HSNavigationOverlay.prototype._unbindEvents = function() {

    if(this.toggler && this.toggler.length) {
      this.toggler.off('click.HSNavigation');
    }

    if(this.overlay && this.overlay.length) {
      this.overlay.off('click.HSNavigation');
    }

    $(document).off('keyup.HSNavigation');

  };


  /**
   * Shows the navigation.
   *
   * @public
   */
  HSNavigationOverlay.prototype.open = function() {

    this.body.addClass( this.config.activeClass );

    if(this.transitionDuration !== undefined && this.transitionDuration == 0) {
      this.config.afterOpen.call(this.element, this.overlay);
    }

  };

  /**
   * Hides the navigation.
   *
   * @public
   */
  HSNavigationOverlay.prototype.close = function() {

    var hamburgers = this.toggler && this.toggler.length ? this.toggler.find('.is-active') : $();

    if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass( this.config.activeClass );

    if(this.transitionDuration !== undefined && this.transitionDuration == 0) {
      this.config.afterClose.call(this.element, this.overlay);
    }

  };

  /**
   * Returns true if the navigation has been initialized.
   *
   * @public
   * @return {Boolean}
   */
  HSNavigationOverlay.prototype.isInitialized = function() {

    return this.isInit;

  };

  /**
   * HSNavigationPush.
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSNavigationPush(element, config) {

    var _self = this;

    // extends some functionality from abstract class
    HSNavigationAbstract.call(this, element, config);

    Object.defineProperties(this, {

      overlayClasses: {
        get: function() {
          return 'u-main-nav__overlay ' + _self.config.navigationOverlayClasses
        }
      },

      bodyClasses: {
        get: function() {
          return 'u-main-nav--push-' + _self.config.navigationPosition
        }
      },

      isOpened: {
        get: function() {
          return _self.body.hasClass( _self.config.activeClass );
        }
      }

    });

    // this.init();

  };


  /**
   * Initialization of the instance.
   *
   * @public
   */
  HSNavigationPush.prototype.init = function() {

    var _self = this;

    /**
     * Contains overlay object.
     *
     * @public
     */
    this.overlay = $('<div></div>', {
      class: _self.overlayClasses
    });

    if( $.HSCore.components.HSScrollBar ) {

      setTimeout(function(){
        $.HSCore.components.HSScrollBar.init( _self.element.find( '.u-main-nav__list-wrapper' ) );
      }, 10);

    }

    this.toggler = $('[data-target="#'+ this.element.attr('id') +'"]');

    if(this.toggler && this.toggler.length) this.toggler.css('display', 'block');

    this.body.addClass( this.bodyClasses );
    this.element
        .addClass('u-main-nav--push')
        .append(this.overlay);

    setTimeout(function(){
      _self.element.addClass( _self.config.navigationInitClasses );
      _self.body.addClass( _self.config.navigationInitBodyClasses );

      _self.transitionDuration = parseFloat( getComputedStyle(_self.element.get(0)).transitionDuration, 10 );


      if(_self.transitionDuration > 0) {

        _self.element.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e){

          if(_self.isOpened && (e.originalEvent.propertyName == 'right' || e.originalEvent.propertyName == 'left')) {
            _self.config.afterOpen.call(_self.element, _self.overlay);
          }
          else if(!_self.isOpened && (e.originalEvent.propertyName == 'right' || e.originalEvent.propertyName == 'left')) {
            _self.config.afterClose.call(_self.element, _self.overlay);
          }

          e.stopPropagation();
          e.preventDefault();

        });

      }

    },50);

    this._bindEvents();

    this.isInit = true;

  };


  /**
   * Destroys the instance.
   *
   * @public
   */
  HSNavigationPush.prototype.destroy = function() {

    var _self = this;

    if(this.overlay) this.overlay.remove();

    if(this.toggler && this.toggler.length) this.toggler.hide();

    if( $.HSCore.components.HSScrollBar ) {

      setTimeout(function(){
        $.HSCore.components.HSScrollBar.destroy( _self.element.find( '.u-main-nav__list-wrapper' ) );
      }, 10);

    }

    setTimeout(function(){
      if(_self.transitionDuration && _self.transitionDuration > 0) {
        _self.element.off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend");
      }
    },50);

    this.body.removeClass( this.bodyClasses ).removeClass(this.config.navigationInitBodyClasses);
    this.element
        .removeClass('u-main-nav--push')
        .removeClass(this.config.navigationInitClasses);

    this._unbindEvents();

    this.isInit = false;

  };

  /**
   * Binds necessary events.
   *
   * @private
   */
  HSNavigationPush.prototype._bindEvents = function() {

    var _self = this;

    if(this.toggler && this.toggler.length) {
      this.toggler.on('click.HSNavigation', function(e){

        if(_self.isOpened) {
          _self.close();
        }
        else {
          _self.open();
        }

        e.preventDefault();

      });
    }

    this.overlay.on('click.HSNavigation', function(e){
      _self.close();
    });

    $(document).on('keyup.HSNavigation', function(e){
      if(e.keyCode == 27) {
        _self.close();
      }
    });

  };

  /**
   * Unbinds necessary events.
   *
   * @private
   */
  HSNavigationPush.prototype._unbindEvents = function() {

    if(this.toggler && this.toggler.length) {
      this.toggler.off('click.HSNavigation');
    }

    if(this.overlay && this.overlay.length) {
      this.overlay.off('click.HSNavigation');
    }

    $(document).off('keyup.HSNavigation');

  };


  /**
   * Shows the navigation.
   *
   * @public
   */
  HSNavigationPush.prototype.open = function() {

    this.body.addClass( this.config.activeClass );

    if(this.transitionDuration !== undefined && this.transitionDuration == 0) {
      this.config.afterOpen.call(this.element, this.overlay);
    }

  };

  /**
   * Hides the navigation.
   *
   * @public
   */
  HSNavigationPush.prototype.close = function() {

    var hamburgers = this.toggler && this.toggler.length ? this.toggler.find('.is-active') : $();

    if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass( this.config.activeClass );

    if(this.transitionDuration !== undefined && this.transitionDuration == 0) {
      this.config.afterClose.call(this.element, this.overlay);
    }

  };

  /**
   * Returns true if the navigation has been initialized.
   *
   * @public
   * @return {Boolean}
   */
  HSNavigationPush.prototype.isInitialized = function() {

    return this.isInit;

  };


})(jQuery);
/**
 * HSScrollNav Component.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires jQuery
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSScrollNav = {

    /**
     * Base configuraion of the component.
     *
     * @private
     */
    _baseConfig: {
      duration: 400,
      easing: 'linear',
      over: $(),
      activeItemClass: 'active',
      afterShow: function(){},
      beforeShow: function(){}
    },

    /**
     * All initialized item on the page.
     *
     * @private
     */
    _pageCollection: $(),


    /**
     * Initialization of the component.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function(collection, config) {

      var self = this;

      if( !collection || !collection.length ) return $();

      collection.each(function(i, el) {

        var $this = $(el),
            itemConfig = config && $.isPlainObject(config) ?
                         $.extend(true, {}, self._baseConfig, config, $this.data()) :
                         $.extend(true, {}, self._baseConfig, $this.data());

        if( !$this.data('HSScrollNav') ) {

          $this.data('HSScrollNav', new HSScrollNav($this, itemConfig));

          self._pageCollection = self._pageCollection.add( $this );

        }

      });

      $(window).on('scroll.HSScrollNav', function(){

        self._pageCollection.each(function(i, el) {

          $(el).data('HSScrollNav').highlight();

        });

      }).trigger('scroll.HSScrollNav');

      return collection;

    }

  }


  /**
   * HSScrollNav.
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSScrollNav(element, config) {

    /**
     * Current element.
     *
     * @public
     */
    this.element = element;

    /**
     * Configuraion.
     *
     * @public
     */
    this.config = config;

    /**
     * Sections.
     *
     * @public
     */
    this._items = $();

    this._makeItems();
    this._bindEvents();
  }

  /**
   * Return collection of sections.
   *
   * @private
   * @return {jQuery}
   */
  HSScrollNav.prototype._makeItems = function() {

    var self = this;

    this.element.find('a[href^="#"]').each(function(i, el) {

      var $this = $(el);

      if( !$this.data('HSScrollNavSection') ) {

        $this.data('HSScrollNavSection', new HSScrollNavSection($this, self.config));

        self._items = self._items.add( $this );

      }

    });

  };

  /**
   * Binds necessary events.
   *
   * @private
   * @return {undefined}
   */
  HSScrollNav.prototype._bindEvents = function() {

    var self = this;

    this.element.on('click.HSScrollNav', 'a[href^="#"]', function(e) {

      var link = this;
      self._lockHightlight = true;
      if(self.current) self.current.unhighlight();
      link.blur();
      self.current = $(link).data('HSScrollNavSection');
      self.current.highlight();

      $(this).data('HSScrollNavSection').show( function(){
        self._lockHightlight = false;
      } );

      e.preventDefault();

    });

  };

  /**
   * Activates necessary menu item.
   *
   * @public
   */
  HSScrollNav.prototype.highlight = function() {

    var self = this, items, currentItem, current, scrollTop;

    if(!this._items.length || this._lockHightlight) return;

    scrollTop = $(window).scrollTop();

    if(scrollTop + $(window).height() === $(document).height()) {

      this.current = this._items.last().data('HSScrollNavSection');

      this.unhighlight();
      this.current.highlight();
      this.current.changeHash();

      return;
    }

    this._items.each(function(i, el){

      var Section = $(el).data('HSScrollNavSection'),
          $section = Section.section;

      if(scrollTop > Section.offset) {
        current = Section;
      }

    });

    if(current && this.current != current) {

      this.unhighlight();
      current.highlight();
      if(this.current) current.changeHash();

      this.current = current;

    }

  };

  /**
   * Deactivates all menu items.
   *
   * @public
   */
  HSScrollNav.prototype.unhighlight = function() {

    this._items.each(function(i, el){
      $(el).data('HSScrollNavSection').unhighlight();
    });

  };

  /**
   * HSScrollNavSection.
   *
   * @param {jQuery} element
   *
   * @constructor
   */
  function HSScrollNavSection(element, config) {

    var self = this;

    /**
     * Current section.
     *
     * @public
     */
    this.element = element;

    /**
     * Configuration.
     *
     * @public
     */
    this.config = config;

    /**
     * Getter for acces to the section element.
     *
     * @public
     */
    Object.defineProperty(this, 'section', {
      value: $(self.element.attr('href'))
    });

    /**
     * Getter for determinate position of the section relative to document.
     *
     * @public
     */

    Object.defineProperty(this, 'offset', {
      get: function() {

        var header = $('.u-header'),
            headerStyles = getComputedStyle(header.get(0)),
            headerPosition = headerStyles.position,
            offset = self.section.offset().top;



        if(header.length && headerPosition == 'fixed' && parseInt(headerStyles.top) == 0) {
          offset = offset - header.outerHeight() - parseInt(headerStyles.marginTop);
        }

        if(self.config.over.length) {
          offset = offset - self.config.over.outerHeight();
        }

        return offset;
      }
    });


  }

  /**
   * Moves to the section.
   *
   * @public
   */
  HSScrollNavSection.prototype.show = function(callback) {

    var self = this;

    if( !this.section.length ) return;

    self.config.beforeShow.call(self.section);

    this.changeHash();

    $('html, body').stop().animate({
      scrollTop: self.offset + 3
    }, {
      duration: self.config.duration,
      easing: self.config.easing,
      complete: function() {
        $('html, body').stop().animate({
          scrollTop: self.offset + 3
        }, {
          duration: self.config.duration,
          easing: self.config.easing,
          complete: function() {
            self.config.afterShow.call(self.section);
            if($.isFunction(callback)) callback();
          }
        });
      }
    });

  };

  /**
   * Changes location's hash.
   *
   * @public
   */
  HSScrollNavSection.prototype.changeHash = function() {
    this.section.attr('id', '');
    window.location.hash = this.element.attr('href');
    this.section.attr('id', this.element.attr('href').slice(1));
  };

  /**
   * Activates the menu item.
   *
   * @public
   */
  HSScrollNavSection.prototype.highlight = function() {

    var parent = this.element.parent('li');
    if(parent.length) parent.addClass(this.config.activeItemClass);

  };

  /**
   * Deactivates the menu item.
   *
   * @public
   */
  HSScrollNavSection.prototype.unhighlight = function() {

    var parent = this.element.parent('li');
    if(parent.length) parent.removeClass(this.config.activeItemClass);

  };



})(jQuery);

/**
 * Tabs wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSTabs = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Tabs wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initTabs();

      return this.pageCollection;

    },

    initTabs: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var windW = $(window).width(),
          //Tabs
          $tabs = $(el),
          $tabsItem = $tabs.find('.nav-item'),
          tabsType = $tabs.data('tabs-mobile-type'), //[slide-up-down], [accordion], [hide-extra-items]
          controlClasses = $tabs.data('btn-classes'),
          context = $tabs.parent(),

          //Tabs Content
          $tabsContent = $('#' + $tabs.data('target')),
          $tabsContentItem = $tabsContent.find('.tab-pane');

        if (windW < 767) {
          $('body').on('click', function () {
            if (tabsType) {
              $tabs.slideUp(200);
            } else {
              $tabs.find('.nav-inner').slideUp(200);
            }
          });
        } else {
          $('body').off('click');
        }

        if (windW > 767 && tabsType) {
          $tabs.removeAttr('style');
          $tabsContentItem.removeAttr('style');
          context.off('click', '.js-tabs-mobile-control');
          context.off('click', '[role="tab"]');
          context.find('.js-tabs-mobile-control').remove();
          return;
        }

        if (windW < 768 && tabsType == 'accordion') {
          $self.accordionEffect($tabsContent, $tabsItem, $tabsContentItem, controlClasses);
        } else if (windW < 768 && tabsType == 'slide-up-down') {
          $self.slideUpDownEffect(context, $tabs, controlClasses);
        }

        //Actions
        collection = collection.add($tabs);
      });
    },

    slideUpDownEffect: function (context, menu, btnClasses) {
      if (context.find('.js-tabs-mobile-control').length) return;

      //Create control
      var activeItemHTML = menu.find('.active').html();

      $(menu).before('<a class="js-tabs-mobile-control ' + btnClasses + '" href="#">' + activeItemHTML + '</a>');

      /*----- CLICK -----*/
      context.on('click', '.js-tabs-mobile-control', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $(menu).slideToggle(200);
      });

      context.on('click', '[role="tab"]', function (e) {
        e.preventDefault();

        var thisHTML = $(this).html(),
          $targetControl = $(this).closest('ul').prev('.js-tabs-mobile-control');

        $targetControl.html(thisHTML);
        $(menu).slideUp(200);
      });
    },

    accordionEffect: function (context, menuItem, menu, btnClasses) {
      if (context.find('.js-tabs-mobile-control').length) return;

      //Create control
      $(menu).before('<a class="js-tabs-mobile-control ' + btnClasses + '" href="#"></a>');

      menuItem.each(function () {
        var thisIndex = $(this).index(),
          thisHTML = $(this).find('[role="tab"]').html();

        if ($(this).find('[role="tab"]').hasClass('active')) {
          $(menu[thisIndex]).prev().addClass('active');
        }

        $(menu[thisIndex]).prev().html(thisHTML);
      });

      /*----- CLICK -----*/
      context.on('click', '.js-tabs-mobile-control', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) return;

        context.find('.js-tabs-mobile-control').removeClass('active');
        var $target = $(this).next();

        if ($target.hasClass('fade')) {
          $(this).addClass('active');
          $(menu)
            .slideUp(200, function () {
              $target.removeClass('show active');
            });
          $target
            .slideDown(200, function () {
              $target.addClass('show active');
            });
        } else {
          $(this).addClass('active');
          $(menu).slideUp(200);
          $target.slideDown(200);
        }
      });
    }
  }

})(jQuery);

/**
 * Progress Bar wrapper.
 * 
 * @author Htmlstream 
 * @version 1.0
 * @requires appear.js (v1.0.3)
 *
 */
;(function($){
	'use strict';

	$.HSCore.components.HSProgressBar = {

		/**
		 * 
		 * 
		 * @var Object _baseConfig
		 */
		_baseConfig : {
			bounds: -100,
			debounce: 10,
			time: 1000,
			fps: 60,
			rtl: false,
			direction: 'horizontal',
			useProgressElement: false,
			indicatorSelector: 'progress-bar-indicator',
			moveElementSelector: false,
			moveElementTo: 'currentPosition',
			onChange: function(value){},
			beforeUpdate: function(){},
			afterUpdate: function(){},
			onMoveElementChange: function(value){},
			beforeMoveElementUpdate: function(){},
			afterMoveElementUpdate: function(){}
		},

		/**
		 * 
		 * 
		 * @var jQuery _pageCollection
		 */
		_pageCollection : $(),

		/**
		 * Initialization of Progress Bar wrapper.
		 * 
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery currentCollection - collection of initialized items.
		 */
		init: function(selector, config){

			if(!(selector && $(selector).length)) return;

			this.extendHorizontalProgressBar();
			this.extendVerticalProgressBar();

			return this._initProgressBar(selector, config && $.isPlainObject(config) ? $.extend(true, {}, this._baseConfig, config) : this._baseConfig);

		},

		/**
		 * 
		 * Initialization of each Progress Bar of the page.
		 *
		 * @return undefined
		 */
		_initProgressBar: function(selector, config) {

			var self = this,
					currentCollection = $();

			appear({

				bounds: config['bounds'],
				debounce: config['debounce'],

				init: function() {

					$(selector).each(function(i, el) {

						var $this = $(el);

						if(config['direction'] === 'horizontal') {

							$this.data('ProgressBar', new self.HorizontalProgressBar($this, config));

						}
						else {

							$this.data('ProgressBar', new self.VerticalProgressBar($this, config));

						}

						currentCollection = currentCollection.add($this);
						self._pageCollection = self._pageCollection.add($this);

					});

				},

				elements: function() {

					return document.querySelectorAll(selector);

				},

				appear: function(el) {

					console.log( $(el).data('ProgressBar'), $(el).data('value') );

					$(el).data('ProgressBar').update($(el).data('value'));

				}

			});

			return currentCollection;

		},

		/**
		 * Constructor Function of Horizontal Progress Bar
		 * 
		 * @param jQuery element
		 * @param Object config
		 *
		 */
		HorizontalProgressBar: function(element, config) {

			this.element = element;
			this.indicator = this.element.find( config.indicatorSelector );

			this.config = config;
			this.moveElement = config['moveElementSelector'] ? element.parent().find(config['moveElementSelector']) : $();

			if(this.moveElement.length) {

				if(config['rtl']) {
					this.moveElement.css({
						'left': 'auto',
					 	'right': 0,
					 	'margin-right': this.moveElement.outerWidth() / -2
					});
				}
				else {
					this.moveElement.css({
					 	'left': 0,
					 	'margin-left': this.moveElement.outerWidth() / -2
					});
				}

			}

			if(this.config.useProgressElement) {
				this.element.data( 'value', this.element.attr( 'value' ) );
				this.element.attr('value', 0);
			}
			else {
				this.element.data(
					'value', 
					this.indicator.length ? Math.round( this.indicator.outerWidth() / this.element.outerWidth() * 100 ) : 0
				);
				this.indicator.css('width', '0%');
			}

		},

		/**
		 * Constructor Function of Vertical Progress Bar
		 * 
		 * @param jQuery element
		 * @param Object config
		 *
		 */
		VerticalProgressBar: function(element, config) {

			this.element = element;
			this.config = config;
			this.indicator = element.find(config['indicatorSelector']);

			if(!this.indicator.length) return;

			element.data('value', parseInt(this.indicator.css('height'), 10) / this.indicator.parent().outerHeight() * 100);
			this.indicator.css('height', 0);

		},

		/**
		 * Extends HorizontalProgressBar.
		 *
		 * @return undefined
		 */
		extendHorizontalProgressBar: function() {

			/**
			 * Sets new value of the Progress Bar.
			 * 
			 * @param Number value
			 *
			 * @return undefined
			 */
			this.HorizontalProgressBar.prototype.update = function(value) {

				var self = this;

				if( this.config.useProgressElement ) {

					var fps = (this.config['time'] / this.config['fps']),
							iterationValue = parseInt(value / fps, 10),
							counter = 0,
							self = this;

					if(iterationValue == 0) iterationValue = 1;

					this.config.beforeUpdate.call(this.element);
					if(this.moveElement.length) this.config.beforeMoveElementUpdate.call(this.moveElement);

					if(self.config.moveElementSelector && self.config['moveElementTo'] == 'end') {

						var mCounter = 0,
								mIterationValue = parseInt(100 / fps, 10);

						if(mIterationValue == 0) mIterationValue = 1;

						var mCounterId = setInterval(function() {

							self.moveSubElement(mCounter+=mIterationValue);
							if(self.moveElement.length) self.config.onMoveElementChange.call(self.moveElement, mCounter+=mIterationValue);

							if(mCounter > 100) {
								clearInterval(mCounterId);
								self.moveSubElement(100);
								if(self.moveElement.length) self.config.afterMoveElementUpdate.call(self.moveElement);
							}

						}, fps);

					}

					this.element.data('intervalId', setInterval(function(){

						var currentValue = counter += iterationValue;

						self.element.attr('value', currentValue);
						self.config.onChange.call(self.element, currentValue);

						if(self.config.moveElementSelector && self.config['moveElementTo'] == 'currentPosition') self.moveSubElement(currentValue);

						if(counter > value) {

							self.element.attr('value', value);
							if(self.config.moveElementSelector && self.config['moveElementTo'] == 'currentPosition') self.moveSubElement(value);
							clearInterval(self.element.data('intervalId'));
							self.config.afterUpdate.call(self.element);

						}

					}, fps));
				}
				else {
					if( this.indicator.length ) {
						this.indicator.stop().animate({
							'width': value + '%'
						}, {
							duration: self.config.time,
							complete: function() {
								self.config.afterUpdate.call(self.element);
							}
						});
					}
				}

			};

			/**
			 * 
			 * 
			 * @param 
			 *
			 * @return 
			 */
			this.HorizontalProgressBar.prototype.moveSubElement = function(value, duration) {

				if(!this.moveElement.length) return;

				var self = this;

				this.moveElement.css(this.config['rtl'] ? 'right' : 'left', value + '%');

			};

		},

		/**
		 * Extends VerticalProgressBars.
		 * 
		 *
		 * @return undefined
		 */
		extendVerticalProgressBar: function() {

			/**
			 * Sets new value of the Progress Bar.
			 * 
			 * @param Number value
			 *
			 * @return undefined
			 */
			this.VerticalProgressBar.prototype.update = function(value) {

				this.indicator.stop().animate({
					height: value + '%'
				});
				
			}

		},


		/**
		 * Returns full collection of all initialized progress bars.
		 * 
		 *
		 * @return jQuery _pageCollection
		 */
		get: function() {

			return this._pageCollection;

		},

		/**
		 * Returns API of the progress bar by index in collection.
		 * 
		 * @param Number index
		 *
		 * @return HorizontalProgressBar | VerticalProgressBar
		 */
		getAPI: function(index) {

			if(this._pageCollection.eq(index).length) return this._pageCollection.eq(index).data('ProgressBar');

			return null;

		}

		
	};

})(jQuery);