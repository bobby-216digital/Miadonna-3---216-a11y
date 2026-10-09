  document.addEventListener("DOMContentLoaded", function () {
      // let variant_ids = '', ajaxAvailableRunning = 'No', myAvailableCustomController = null;
    
       setTimeout(() => loadCheckoutButton(), 500);
        setTimeout(() => {
          const videos = document.querySelectorAll('video[data-video-src]');
          const videoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              //console.log('entry.isIntersecting');
              //console.log(entry.isIntersecting);
              if (!entry.isIntersecting) return;
              
              const video = entry.target;
              const videoSrc = video.dataset.videoSrc;

              if (videoSrc && !video.querySelector('source')) {
                const source = document.createElement('source');
                source.src = videoSrc;
                source.type = 'video/mp4';

                video.appendChild(source);
                video.load();
                
                // Start playback when autoplay is required
                video.play().catch(function () {});
              }
              observer.unobserve(video);
            });
          }, {
          rootMargin: '300px 0px'
        });
          videos.forEach(function (video) {
          videoObserver.observe(video);
        });
      }, 2000);


       
        var $collectionTab = $('.collection-tab-slider');
        var $whyslider = $('.why-slider');
        var $shapeslider = $('.shape-slider');
        var $styleslider = $('.style-slider');
        var $shapemobslider = $('.shape-mob-slider');
        var $categoryslider = $('.category-slider');
        //var $collectionfilter = $('.collectionfilter-sl');
        var $prdshapeslider = $('.prdshape-slider');
        var $customslider = $('.custom-slider');
        var $testimonialinrslider = $('.testimonial-inrslider');
        var $progressBarWhy = $('.progress-bar-why'); // Progress bar for "why-slider"
        var $progressBarShape = $('.progress-bar-shape'); // Progress bar for "shape-slider"
        var $progressBarStyle = $('.progress-bar-style'); // Progress bar for "style-slider"
        var $progressBarCategory = $('.progress-bar-category'); // Progress bar for "category-slider"
        var $progressBarcollectionTab = $('.progress-bar-tabslider'); // Progress bar for "tabslider-slider"
        var $progressBarcustomlider = $('.progress-bar-customlider'); // Progress bar for custom slider
        var $progressBartestimonial = $('.progress-bar-testimonial'); // Progress bar for custom slider

        function updateProgress(currentSlide, slick, $progressBar) {
          var totalSlides = slick.slideCount;
          var slidesToShow = slick.options.slidesToShow;
          var maxIndex = totalSlides - slidesToShow;

          if (maxIndex <= 0) maxIndex = 1;

          var progress = 10 + (currentSlide / maxIndex) * 90;
          if (currentSlide >= maxIndex) progress = 100;

          $progressBar.css('width', progress + '%');
          $progressBar.closest('.progress-container').attr('aria-valuenow', progress.toFixed(0));
        }

        $whyslider.slick({
          slidesToShow: 3,
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
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2.4,
              },
            },
            {
              breakpoint: 574,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
              },
            },
          ],
        });

        $whyslider.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = currentSlide || 0;

          if (event.type === 'init') {
            $progressBarWhy.css('width', '10%');
          } else {
            updateProgress(i, slick, $progressBarWhy);
          }
        });

        $shapeslider.slick({
          slidesToShow: 5.5,
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
            {
              breakpoint: 1599,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 799,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });

        $shapeslider.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = currentSlide || 0;

          // On init, default 10%
          if (event.type === 'init') {
            $progressBarShape.css('width', '10%');
          }
          updateProgress(i, slick, $progressBarShape);
        });

        // Style Slider
        $styleslider.slick({
          slidesToShow: 5.5,
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
            {
              breakpoint: 1599,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1299,
              settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });

        $styleslider.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = currentSlide || 0;

          // On init, default 10%
          if (event.type === 'init') {
            $progressBarStyle.css('width', '10%');
          }
          updateProgress(i, slick, $progressBarStyle);
        });

        // Category Slider
        $categoryslider.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
          touchThreshold: 50,
          adaptiveHeight: false,
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
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });

        $categoryslider.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = currentSlide || 0;

          if (event.type === 'init') {
            $progressBarCategory.css('width', '10%');
          } else {
            updateProgress(i, slick, $progressBarCategory);
          }
        });

        $collectionTab.slick({
          slidesToShow: 3.5,
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
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 574,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });

        $collectionTab.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = currentSlide || 0;

          if (event.type === 'init') {
            $progressBarcollectionTab.css('width', '10%');
          } else {
            updateProgress(i, slick, $progressBarcollectionTab);
          }
        });

        $customslider.slick({
          slidesToShow: 5.5,
          slidesToScroll: 1,
          swipeToSlide: true,
          touchThreshold: 50,
          adaptiveHeight: false,
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
            {
              breakpoint: 1599,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 799,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });

        $customslider.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = currentSlide || 0;

          // On init, default 10%
          if (event.type === 'init') {
            $progressBarcustomlider.css('width', '10%');
          }
          updateProgress(i, slick, $progressBarcustomlider);
        });

        $testimonialinrslider.slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          touchThreshold: 50,
          adaptiveHeight: false,
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
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });

        $testimonialinrslider.on('init reInit afterChange', function (event, slick, currentSlide) {
          var i = currentSlide || 0;

          if (event.type === 'init') {
            $progressBartestimonial.css('width', '10%');
          } else {
            updateProgress(i, slick, $progressBartestimonial);
          }
        });

        $testimonialinrslider.on('init reInit setPosition', function (event, slick, currentSlide) {
          var totalSlides = slick.slideCount;
          var slidesToShow = slick.options.slidesToShow;

          if (totalSlides > slidesToShow) {
            $progressBartestimonial.closest('.progress-container').show();
          } else {
            $progressBartestimonial.closest('.progress-container').hide();
          }
        });

         handleAccordionView();
        let accordionItems = document.querySelectorAll('.accordion-item');
        let maxVisible = 5; 
        // On resize
        window.addEventListener('resize', handleAccordionView);

        // Accordion open/close logic
        accordionItems.forEach((item) => {
          const title = item.querySelector('.accordion-title');
          const content = item.querySelector('.accordion-content');

          const toggleButton = title && title.querySelector('button');
          if (
            title &&
            content &&
            content.querySelector('.accordion-content-inner') &&
            !item.classList.contains('active')
          ) {
            content.style.visibility = 'hidden';
          }

          if (title) {
            title.addEventListener('click', () => {
              const isOpen = item.classList.contains('active');

              if (isOpen) {
                item.classList.remove('active');
                content.style.height = 0;
                toggleButton && toggleButton.setAttribute('aria-expanded', 'false');
                setTimeout(() => {
                  if (!item.classList.contains('active')) {
                    content.style.visibility = 'hidden';
                    content.hidden = true;
                  }
                }, 300);
              } else {
                item.classList.add('active');
                const inner = content.querySelector('.accordion-content-inner');
                content.hidden = false;
                content.style.visibility = 'visible';
                content.style.height = inner.scrollHeight + 'px';
                toggleButton && toggleButton.setAttribute('aria-expanded', 'true');
              }
            });
          }
        });
    var btnLarge = document.getElementById("btnLarge");
    var btnMedium = document.getElementById("btnMedium");
        // Load saved layout from localStorage
    const savedLayout = localStorage.getItem("collectionLayout") || "medium";
    if (savedLayout === "large") {
        setLayout("large", btnLarge);
    } else {
        setLayout("medium", btnMedium);
    }

    // Click events
    if (btnLarge) {
    btnLarge.addEventListener("click", function () {
      document.querySelectorAll('.product-wrap').forEach(function(productCard){
        let activeSwatch = productCard.querySelector('.swatch.active');
        if (!activeSwatch) return;

        let label = activeSwatch.getAttribute('data-disclaimer');

        let labelEl = productCard.querySelector('.list-dtllable');
        if (!labelEl) return;
        if(label){
          labelEl.innerHTML = '<span>'+label+'</span>';
          labelEl.style.display = 'block';
        }
        else{
          labelEl.innerHTML = '';
          labelEl.style.display = 'none';
        }
      });
      setLayout("large", btnLarge);
      requestAnimationFrame(() => {
        resetPlpSlider();
      });
    });
  }
   if (btnLarge) {
    btnMedium.addEventListener("click", function () {
      document.querySelectorAll('.product-wrap').forEach(function(productCard){
        let activeSwatch = productCard.querySelector('.swatch.active');
        if (!activeSwatch) return;

        let label = activeSwatch.getAttribute('data-disclaimer');

        let labelEl = productCard.querySelector('.list-dtllable');
        if (!labelEl) return;

        labelEl.innerHTML = '';
        labelEl.style.display = 'none';

      });
      setLayout("medium", btnMedium);
      requestAnimationFrame(() => {
        resetPlpSlider();
      });
    });
  }

  updateDropdownMode();

        let resizeTimer;
        $(window).on('resize', function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(updateDropdownMode, 150);
        });
        $(document).on('click', '.mega-menu-open', function () {
          setTimeout(updateDropdownMode, 50);
        });

        $(document).on('click', '.mm-close', function () {
          $(this).closest('.mega-menu__section').removeClass('is-active');
        });

        let touchMoved = false;

        $(document).on('touchstart', '.left-panel-item', function () {
          touchMoved = false;
        });

        $(document).on('touchmove', '.left-panel-item', function () {
          touchMoved = true;
        });

        $(document).on('touchend click', '.left-panel-item', function (e) {
          if (touchMoved) return;
          e.stopPropagation();

          var targetId = $(this).data('target');
          var $megaMenu = $(this).closest('.mega-menu__section');

          $megaMenu.find('.mmright-panel').removeClass('active').attr('aria-hidden', 'true');

          $megaMenu.find('.left-panel-item').removeClass('active').attr('aria-selected', 'false');

          $megaMenu
            .find('#' + targetId)
            .addClass('active')
            .attr('aria-hidden', 'false');

          $(this).addClass('active').attr('aria-selected', 'true');
        });

        $(document).on('click', '.mm-inputbackbutton', function (e) {
          e.preventDefault();
          var $submenuList = $(this).closest('.mobile-submenu__list');
          var submenuInput = $submenuList.prevAll('.submenu__input').first().prop('checked', false)[0];
          submenuInput && submenuInput.focus({ preventScroll: true });
        });

        $(document).on('change', '.mobile-menu .submenu__input', function () {
          $('.mobile-menu .mm-mobilefirstslide, .mobile-menu .mobile-menu__content').scrollLeft(0);
          if (this.checked) {
            var backButton = $(this)
              .siblings('.mobile-menu__submenu.has-mega-menu')
              .find('.mm-inputbackbutton:visible')[0];
            backButton && backButton.focus({ preventScroll: true });
          }
        });

         $(document).on('click', function (e) {
        if ($('body').hasClass('dropdown-click--false')) {
          if (!$(e.target).closest('.mmdesk-content').length) {
            $('.mega-menu__section').each(function () {
              $(this).find('.mmright-panel').removeClass('active').attr('aria-hidden', 'true');

              $(this).find('.left-panel-item').removeClass('active').attr('aria-selected', 'false');

              $(this).find('.mmright-panel').first().addClass('active').attr('aria-hidden', 'false');
              $(this).find('.left-panel-item').first().addClass('active').attr('aria-selected', 'true');
            });
          }
        }
      });

       var navbarItems = document.querySelectorAll('.navbar-item');

        navbarItems.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            if (item.classList.contains('has-mega-menu')) {
              document.documentElement.classList.add('mm-openmenu');
              item.classList.add('active'); // add active class
              console.log('HTML class + active added');
            }
          });

          item.addEventListener('mouseleave', () => {
            if (item.classList.contains('has-mega-menu')) {
              document.documentElement.classList.remove('mm-openmenu');
              item.classList.remove('active'); // remove active class
              console.log('HTML class + active removed');
            }
          });
        });


        (function ($) {
        if (typeof $ === 'undefined') {
          console.warn('jQuery not found — banner card height script skipped.');
          return;
        }

       

     

        var debouncedAdjust = debounce(adjustBannerCards, 80);

        $(window).on('load resize orientationchange', debouncedAdjust);

        $(document).on(
          'shopify:section:load shopify:section:reorder shopify:section:select shopify:section:deselect shopify:section:unload',
          function () {
            debouncedAdjust();
          }
        );

        $(document).ajaxComplete(function () {
          debouncedAdjust();
        });

       
        $(function () {
          adjustBannerCards();
          observeBanner();
        });

        window.adjustBannerCards = adjustBannerCards;
      })(window.jQuery);
      var stickyMenu = document.querySelector('.sticky-menu-wrapper');
      stickyMenu.addEventListener('mouseleave', function () {
        document.querySelectorAll('.mega-menu__section.is-active').forEach((section) => {
          section.classList.remove('is-active');
        });
      });
     
        function syncTabindex(slide) {
          var hidden = slide.getAttribute('aria-hidden') === 'true';
          if (hidden) {
            slide.setAttribute('tabindex', '-1');
          } else {
            slide.removeAttribute('tabindex');
          }
          slide.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach(function (el) {
            if (hidden) {
              if (el.hasAttribute('data-sync-hidden')) return;
              if (el.hasAttribute('tabindex')) {
                el.setAttribute('data-orig-tabindex', el.getAttribute('tabindex'));
              }
              el.setAttribute('data-sync-hidden', '');
              el.setAttribute('tabindex', '-1');
            } else if (el.hasAttribute('data-sync-hidden')) {
              if (el.hasAttribute('data-orig-tabindex')) {
                el.setAttribute('tabindex', el.getAttribute('data-orig-tabindex'));
                el.removeAttribute('data-orig-tabindex');
              } else {
                el.removeAttribute('tabindex');
              }
              el.removeAttribute('data-sync-hidden');
            }
          });
        }

        function init(root) {
          root.querySelectorAll('.slick-slide').forEach(syncTabindex);

          var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (m) {
              if (m.attributeName === 'aria-hidden' && m.target.classList.contains('slick-slide')) {
                syncTabindex(m.target);
              }
            });
          });

          root.querySelectorAll('.slick-slide').forEach(function (slide) {
            observer.observe(slide, { attributes: true, attributeFilter: ['aria-hidden'] });
          });
        }

        document.querySelectorAll('.slick-slider, .slider').forEach(init);

        // Catch sliders added/rebuilt later
        new MutationObserver(function () {
          document.querySelectorAll('.slick-slider, .slider').forEach(init);
        }).observe(document.body, { childList: true, subtree: true });
      
    
  })
//  function syncTabindex(slide) {
//           var hidden = slide.getAttribute('aria-hidden') === 'true';
//           if (hidden) {
//             slide.setAttribute('tabindex', '-1');
//           } else {
//             slide.removeAttribute('tabindex');
//           }
//           slide.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach(function (el) {
//             if (hidden) {
//               if (el.hasAttribute('data-sync-hidden')) return;
//               if (el.hasAttribute('tabindex')) {
//                 el.setAttribute('data-orig-tabindex', el.getAttribute('tabindex'));
//               }
//               el.setAttribute('data-sync-hidden', '');
//               el.setAttribute('tabindex', '-1');
//             } else if (el.hasAttribute('data-sync-hidden')) {
//               if (el.hasAttribute('data-orig-tabindex')) {
//                 el.setAttribute('tabindex', el.getAttribute('data-orig-tabindex'));
//                 el.removeAttribute('data-orig-tabindex');
//               } else {
//                 el.removeAttribute('tabindex');
//               }
//               el.removeAttribute('data-sync-hidden');
//             }
//           });
//         }

//          function init(root) {
//           root.querySelectorAll('.slick-slide').forEach(syncTabindex);

//           var observer = new MutationObserver(function (mutations) {
//             mutations.forEach(function (m) {
//               if (m.attributeName === 'aria-hidden' && m.target.classList.contains('slick-slide')) {
//                 syncTabindex(m.target);
//               }
//             });
//           });

        //   root.querySelectorAll('.slick-slide').forEach(function (slide) {
        //     observer.observe(slide, { attributes: true, attributeFilter: ['aria-hidden'] });
        //   });
        // }
   // Debounce helper
        function debounce(fn, wait) {
          var t;
          return function () {
            var ctx = this,
              args = arguments;
            clearTimeout(t);
            t = setTimeout(function () {
              fn.apply(ctx, args);
            }, wait);
          };
        }
   function adjustBannerCards() {
          var $banner = $('.mmdesk .banner-section').first();
          if (!$banner.length) return;

          var bannerHeight = $banner.outerHeight();
          var $cards = $banner.find('.banner-card');

          if (!$cards.length) return;

          if (bannerHeight === 0) {
            setTimeout(adjustBannerCards, 200);
            return;
          }

          var eachHeight = Math.floor(bannerHeight / $cards.length);

          $cards.each(function () {
            $(this).css({
              height: eachHeight + 'px',
              'min-height': '',
              'max-height': '',
            });
          });
        }
   function observeBanner() {
          var bannerEl = document.querySelector('.banner-section');
          if (!bannerEl) return;
          var mo = new MutationObserver(debouncedAdjust);
          mo.observe(bannerEl, { childList: true, subtree: true, attributes: true, characterData: true });
          bannerEl.__bannerObserver = mo;
        }

    function loadCheckoutButton(){
      let variant_ids = '', ajaxAvailableRunning = 'No', myAvailableCustomController = null;
        if (document.querySelectorAll('[name="checkout"]')?.length > 0) {
          let checkoutElements = document.querySelectorAll('[name="checkout"]');
          checkoutElements = Array.prototype.slice.call(checkoutElements);
          for (let i = 0; i < checkoutElements?.length; i++) {
            checkoutElements[i].addEventListener('click', async function(event) {
              if (myAvailableCustomController !== null) {
                myAvailableCustomController.abort();
              }

              if (ajaxAvailableRunning == 'No') {
                ajaxAvailableRunning = 'Yes';

                event.preventDefault();
                event.stopPropagation();

                let cartRawResponse = await fetch('/cart.js', { });
                let cart_json = await cartRawResponse.text();
                let cart_arr = JSON.parse(cart_json);
                let cartGroupedItems = groupingCartItems(cart_arr);
                if (cartGroupedItems?.length > 0) {
                  variant_ids = cartGroupedItems.map(e => e.variant_id);
                }

                myAvailableCustomController = new AbortController();
                const myAvailableCustomSignal = myAvailableCustomController.signal;

                var formData = new FormData();
                formData.append("action", "check_vdb_product_stock");
                formData.append("shop", Shopify.shop);
                formData.append("variant_ids", variant_ids.join(','));
                fetch("/apps/vdb-maidonna-inventory-app/frontend.php", { signal: myAvailableCustomSignal, method: 'POST', body: formData })
                .then(response => response.text())
                .then(result => {
                  var obj = JSON.parse(result);
                    if(obj.SUCCESS=='TRUE'){
                      var all_available = 'Yes';
                      var err_msg = '';
                      for(var i=0; i<obj.DATA.length; i++){
                        if(obj.DATA[i].available=='No'){
                          all_available = 'No';
                          err_msg += 'Product '+obj.DATA[i].title+' is out of stock. ';
                        }
                      }

                      if(all_available=='Yes'){
                        location.href = '/checkout';
                      }else{
                        alert(err_msg);
                      }
                    }else{
                      location.href = '/checkout';
                    }
                    ajaxAvailableRunning = 'No';
                });
              }
            });
          }
        }
      }

       function handleAccordionView() {
         var accordionItems = document.querySelectorAll('.accordion-item');
        var maxVisible = 5;
          const existingBtn = document.querySelector('.view-more-btn');
          if (window.innerWidth <= 767) {
            if (accordionItems.length > maxVisible && !existingBtn) {
              // Hide extra items
              accordionItems.forEach((item, index) => {
                if (index >= maxVisible) {
                  item.style.display = 'none';
                }
              });

              // Create View More button
              const viewMoreBtn = document.createElement('button');
              viewMoreBtn.textContent = 'View More';
              viewMoreBtn.className = 'view-more-btn button button--secondary';

              // Add type and initial aria-label
              viewMoreBtn.setAttribute('type', 'button');
              viewMoreBtn.setAttribute('aria-label', 'View more items');

              // Insert button after accordion list
              accordionItems[accordionItems.length - 1].parentNode.appendChild(viewMoreBtn);

              // Toggle functionality
              viewMoreBtn.addEventListener('click', function () {
                const isExpanded = viewMoreBtn.classList.toggle('expanded');
                if (isExpanded) {
                  accordionItems.forEach((item) => (item.style.display = 'block'));
                  viewMoreBtn.textContent = 'View Less';
                  viewMoreBtn.setAttribute('aria-label', 'View less items');
                } else {
                  accordionItems.forEach((item, index) => {
                    item.style.display = index < maxVisible ? 'block' : 'none';
                  });
                  viewMoreBtn.textContent = 'View More';
                  viewMoreBtn.setAttribute('aria-label', 'View more items');
                }
              });
            }
          } else {
            // Desktop: show all items + remove button if exists
            accordionItems.forEach((item) => (item.style.display = 'block'));
            if (existingBtn) existingBtn.remove();
          }
        }

         function resetPlpSlider() {
      const $gallerySlider = $('.plp_prd-sl');

      if (window.innerWidth < 1025) {
        $($gallerySlider).each(function() {
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
              infinite: false
            });
            plpSliderA11y($slider);
          }
        });
      }
    }


    function setLayout(layout, activeBtn) {
      var collectionEl = document.getElementById("gridchange");
    var btnLarge = document.getElementById("btnLarge");
    var btnMedium = document.getElementById("btnMedium");
      if (collectionEl) {
          
      collectionEl.setAttribute("collection-mobile-layout", layout);
      }
       if (btnLarge) {
      btnLarge.classList.remove("active");
       }
       if (btnMedium) {
      btnMedium.classList.remove("active");
       }
        if (activeBtn) {
      activeBtn.classList.add("active");
        }
      // Save selection
      localStorage.setItem("collectionLayout", layout);

      if (layout === "large") {
        //$('.shape-filter-list-wrapper').css('width', '300px');
        if (window.innerWidth < 1025) {
          document.querySelectorAll('.product-wrap').forEach(function(productCard){
            let activeSwatch = productCard.querySelector('.swatch.active');
            if (!activeSwatch) return;

            let label = activeSwatch.getAttribute('data-disclaimer');
            let labelEl = productCard.querySelector('.list-dtllable');
            if (!labelEl) return;

            if(!label){
              labelEl.innerHTML = '';
              labelEl.style.display = 'none';
            }
            else{
              labelEl.innerHTML = '<span>' + label + '</span>';
              labelEl.style.display = 'block';
            }
          });
        }
        reloadShapeSlider(10,true);
        setRowWiseEqualHeights(1);
      } else {
        //$('.shape-filter-list-wrapper').css('width', '');
        if (window.innerWidth < 798) {
          document.querySelectorAll('.product-wrap').forEach(function(productCard){
            let activeSwatch = productCard.querySelector('.swatch.active');
            if (!activeSwatch) return;

            let label = activeSwatch.getAttribute('data-disclaimer');
            let labelEl = productCard.querySelector('.list-dtllable');
            if (!labelEl) return;

            labelEl.innerHTML = '';
            labelEl.style.display = 'none';
          });
        }
        reloadShapeSlider(5,false);
        setRowWiseEqualHeights(2);
      }
    }

    // Function to set layout & active button
    function setLayout(layout, activeBtn) {
       var collectionEl = document.getElementById("gridchange");
    var btnLarge = document.getElementById("btnLarge");
    var btnMedium = document.getElementById("btnMedium");
      if (collectionEl) {
          
      collectionEl.setAttribute("collection-mobile-layout", layout);
      }
       if (btnLarge) {
      btnLarge.classList.remove("active");
       }
       if (btnMedium) {
      btnMedium.classList.remove("active");
       }
        if (activeBtn) {
      activeBtn.classList.add("active");
        }
      // Save selection
      localStorage.setItem("collectionLayout", layout);

      if (layout === "large") {
        //$('.shape-filter-list-wrapper').css('width', '300px');
        if (window.innerWidth < 1025) {
          document.querySelectorAll('.product-wrap').forEach(function(productCard){
            let activeSwatch = productCard.querySelector('.swatch.active');
            if (!activeSwatch) return;

            let label = activeSwatch.getAttribute('data-disclaimer');
            let labelEl = productCard.querySelector('.list-dtllable');
            if (!labelEl) return;

            if(!label){
              labelEl.innerHTML = '';
              labelEl.style.display = 'none';
            }
            else{
              labelEl.innerHTML = '<span>' + label + '</span>';
              labelEl.style.display = 'block';
            }
          });
        }
        reloadShapeSlider(10,true);
        setRowWiseEqualHeights(1);
      } else {
        //$('.shape-filter-list-wrapper').css('width', '');
        if (window.innerWidth < 798) {
          document.querySelectorAll('.product-wrap').forEach(function(productCard){
            let activeSwatch = productCard.querySelector('.swatch.active');
            if (!activeSwatch) return;

            let label = activeSwatch.getAttribute('data-disclaimer');
            let labelEl = productCard.querySelector('.list-dtllable');
            if (!labelEl) return;

            labelEl.innerHTML = '';
            labelEl.style.display = 'none';
          });
        }
        reloadShapeSlider(5,false);
        setRowWiseEqualHeights(2);
      }
    }

     function updateDropdownMode() {
          var isDesktop = $(window).width() > 1024;

          $('.mega-menu__section').each(function () {
            let $section = $(this);
            let $currentActiveLeft = $section.find('.left-panel-item.active');
            let $currentActiveRight = $section.find('.mmright-panel.active');
            $section.find('.mmright-panel').removeClass('active').attr('aria-hidden', 'true');

            $section.find('.left-panel-item').removeClass('active').attr('aria-selected', 'false');

            if (isDesktop) {
              $('body').addClass('dropdown-click--false');
            } else {
              $('body').removeClass('dropdown-click--false');
            }

            if ($currentActiveLeft.length && $currentActiveRight.length) {
              $currentActiveLeft.addClass('active').attr('aria-selected', 'true');
              $currentActiveRight.addClass('active').attr('aria-hidden', 'false');
            } else {
              $section.find('.mmright-panel').first().addClass('active').attr('aria-hidden', 'false');

              $section.find('.left-panel-item').first().addClass('active').attr('aria-selected', 'true');
            }
          });
        }