(function() {
    "use strict";

    /**
     * Custom selector function
     */
    const customSelect = (selector, selectAll = false) => {
      selector = selector.trim();
      if (selectAll) {
        return [...document.querySelectorAll(selector)];
      } else {
        return document.querySelector(selector);
      }
    }

    /**
     * Custom event listener function
     */
    const customEventListener = (eventType, element, eventListener, selectAll = false) => {
      let selectedElement = customSelect(element, selectAll);
      if (selectedElement) {
        if (selectAll) {
          selectedElement.forEach(item => item.addEventListener(eventType, eventListener));
        } else {
          selectedElement.addEventListener(eventType, eventListener);
        }
      }
    }

    /**
     * Custom scroll event listener
     */
    const customScrollListener = (element, scrollListener) => {
      element.addEventListener('scroll', scrollListener);
    }

    /**
     * Scroll to top button functionality
     */
    let scrollToTopButton = customSelect('.scroll-to-top');
    if (scrollToTopButton) {
      const toggleScrollToTopButton = () => {
        if (window.scrollY > 100) {
          scrollToTopButton.classList.add('active');
        } else {
          scrollToTopButton.classList.remove('active');
        }
      }
      window.addEventListener('load', toggleScrollToTopButton);
      customScrollListener(document, toggleScrollToTopButton);
   }

    /**
     * Mobile navigation toggle functionality
     */
    customEventListener('click', '.responsive-nav-toggle', function(e) {
      customSelect('body').classList.toggle('responsive-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x-square');
    });

})();