 document.addEventListener("DOMContentLoaded", function () {
  

      if(window.innerWidth >= 1300){
        var video_element = document.querySelectorAll(".plp-banner-video-desktop");
      }
      else{
        var video_element = document.querySelectorAll(".plp-banner-video-mobile");
      }

      if(video_element){
        video_element.forEach((video) => {
          const sources = video.querySelectorAll("source");
          sources.forEach(source => {
            if (source.dataset.src) {
              source.src = source.dataset.src;
            }
          });
          video.load();
          video.play();
        });
      }

      const titleSelector = '.product-thumbnail__title';
      const caratSelector = '.prd-caret-text';
      const shapeSelector = '.shape-filter-wrapper';
      var itemsPerRow = 4;
      if(screen.width <= 1024){
        itemsPerRow = 2;
      }
      function setRowWiseEqualHeights() {
        const items = document.querySelectorAll('.product-grid-list-element');
        const titles = document.querySelectorAll('.product-thumbnail__title');
        const shapes = document.querySelectorAll('.shape-filter-wrapper');
        const carats = document.querySelectorAll('.prd-caret-text');
        let titleRows = {};
        let caratRows = {};
        let shapeRows = {};

        items.forEach(item => {
          const top = Math.round(item.getBoundingClientRect().top);

          if (!titleRows[top]) {
            titleRows[top] = [];
          }
          if (!caratRows[top]) {
            caratRows[top] = [];
          }
          if (!shapeRows[top]) {
            shapeRows[top] = [];
          }

          const title = item.querySelector('.product-thumbnail__title');
          const carat = item.querySelector('.prd-caret-text');
          const shape = item.querySelector('.shape-filter-wrapper');
          if (title) {
            titleRows[top].push(title);
          }
          if (carat) {
            caratRows[top].push(carat);
          }
          if (shape) {
            shapeRows[top].push(shape);
          }
        });

        Object.values(titleRows).forEach(rowTitles => {
          let maxTitleHeight = 0;

          rowTitles.forEach(title => {
            maxTitleHeight = Math.max(maxTitleHeight, title.offsetHeight);
          });

          rowTitles.forEach(title => {
            title.style.height = maxTitleHeight + 'px';
          });
        });

        Object.values(caratRows).forEach(rowCarat => {
          let maxCaratHeight = 0;

          rowCarat.forEach(carat => {
            maxCaratHeight = Math.max(maxCaratHeight, carat.offsetHeight);
          });

          rowCarat.forEach(carat => {
            carat.style.height = maxCaratHeight + 'px';
          });
        });

        Object.values(shapeRows).forEach(rowShapes => {
          let maxShapeHeight = 0;

          rowShapes.forEach(shape => {
            maxShapeHeight = Math.max(maxShapeHeight, shape.offsetHeight);
          });

          rowShapes.forEach(shape => {
            shape.style.height = maxShapeHeight + 'px';
          });
        });
      }
      setRowWiseEqualHeights();

      window.addEventListener('resize', () => {
        setRowWiseEqualHeights();
      });


      var $collectionfilter = $('.collectionfilter-sl');
  $collectionfilter.slick({
    slidesToShow: 7.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 50,
    arrows: true,
    autoplay: false,
    dots: false,
    accessibility: true,
    infinite: false, 
    prevArrow: `<button type="button" class="slick-prev custom-arrow" aria-label="Previous Slide">
                  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1.09149 11.0341L9.85809 19.8008C10.157 20.0996 10.7049 20.0996 11.0038 19.8008C11.3027 19.5019 11.3027 18.954 11.0038 18.6551L3.582 11.2333H22.3606C22.8089 11.2333 23.1576 10.8846 23.1576 10.4363C23.1576 10.0379 22.8089 9.63936 22.3606 9.63936H3.582L11.0038 2.26738C11.3027 1.96851 11.3027 1.42059 11.0038 1.12173C10.7049 0.822867 10.157 0.822867 9.85809 1.12173L1.09149 9.88842C0.792594 10.1873 0.792594 10.7352 1.09149 11.0341Z"/>
</svg>
                </button>`,
    nextArrow: `<button type="button" class="slick-next custom-arrow" aria-label="Next Slide">
                  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.9085 11.0341L14.1419 19.8008C13.843 20.0996 13.2951 20.0996 12.9962 19.8008C12.6973 19.5019 12.6973 18.954 12.9962 18.6551L20.418 11.2333H1.63937C1.19108 11.2333 0.842401 10.8846 0.842401 10.4363C0.842401 10.0379 1.19108 9.63937 1.63937 9.63937H20.418L12.9962 2.26739C12.6973 1.96852 12.6973 1.4206 12.9962 1.12174C13.2951 0.822876 13.843 0.822876 14.1419 1.12174L22.9085 9.88843C23.2074 10.1873 23.2074 10.7352 22.9085 11.0341Z"/>
</svg>

                </button>`,
    
    responsive: [
      { breakpoint: 1599, settings: { slidesToShow: 6.5, slidesToScroll: 1 } },
      { breakpoint: 1299, settings: { slidesToShow: 5.5, slidesToScroll: 1 } },
      { breakpoint: 1199, settings: { slidesToShow: 4.5, slidesToScroll: 1 } },
      { breakpoint: 574,  settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 374,  settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]
  });

  $('.collectionfilter-sl').on('setPosition', function(event, slick) {
    if (slick.slideCount <= slick.options.slidesToShow) {
      slick.$slideTrack.css('transform', 'none');
    }
  });

  initPlpSlider();
          let lastWidth = window.innerWidth;

          $(window).on('resize', function () {
            if (window.innerWidth !== lastWidth) {
              lastWidth = window.innerWidth;
              initPlpSlider();
            }
          });
       

        $('.plp_prd-sl').on('click', '.slick-dots button', function (e) {
          e.preventDefault();
          e.stopPropagation();
        });

 });

 function initPlpSlider() {
            if ($(window).width() < 1025) {
              const $gallerySlider = $('.plp_prd-sl');

              $($gallerySlider).each(function () {
                const $slider = $(this);
                if ($slider.hasClass('slick-initialized')) {
                  $slider.slick('unslick');
                }
                // Check if already initialized
                if (!$slider.hasClass('slick-initialized')) {
                  $slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    touchThreshold: 50,
                    arrows: false,
                    autoplay: false,
                    dots: true,
                    accessibility: false,
                    infinite: false,
                  });
                  plpSliderA11y($slider);
                }
              });
            } else {
              if ($('.plp_prd-sl').hasClass('slick-initialized')) {
                $('.plp_prd-sl').slick('unslick');
              }
            }
          }