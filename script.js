document.querySelectorAll('.clickable-heading').forEach(heading => {
   heading.addEventListener('click', function() {
     // Remove active class from all headings
     document.querySelectorAll('.clickable-heading').forEach(h => {
       h.classList.remove('active');
     });
     
     // Add active class to clicked heading
     this.classList.add('active');
     
     // Hide all content sections
     document.querySelectorAll('.content-section').forEach(section => {
       section.style.display = 'none';
     });
     
     // Show the corresponding content section
     const targetId = this.id + 'text';
     document.getElementById(targetId).style.display = 'block';
   });
 });




 document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
  let slideInterval;
  const slideDuration = 5000; // 5 seconds
  
  // Initialize slideshow
  function showSlide(n) {
      // Wrap around if at ends
      if (n >= slides.length) {
          currentSlide = 0;
      } else if (n < 0) {
          currentSlide = slides.length - 1;
      } else {
          currentSlide = n;
      }
      
      // Hide all slides
      slides.forEach(slide => {
          slide.classList.remove('active');
      });
      
      // Deactivate all dots
      dots.forEach(dot => {
          dot.classList.remove('active');
      });
      
      // Show current slide
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
  }
  
  // Next slide
  function nextSlide() {
      showSlide(currentSlide + 1);
  }
  
  // Previous slide
  function prevSlide() {
      showSlide(currentSlide - 1);
  }
  
  // Start autoplay
  function startSlideShow() {
      slideInterval = setInterval(nextSlide, slideDuration);
  }
  
  // Stop autoplay
  function stopSlideShow() {
      clearInterval(slideInterval);
  }
  
  // Event listeners
  nextBtn.addEventListener('click', () => {
      nextSlide();
      stopSlideShow();
      startSlideShow();
  });
  
  prevBtn.addEventListener('click', () => {
      prevSlide();
      stopSlideShow();
      startSlideShow();
  });
  
  // Dot navigation
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          showSlide(index);
          stopSlideShow();
          startSlideShow();
      });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
          nextSlide();
          stopSlideShow();
          startSlideShow();
      } else if (e.key === 'ArrowLeft') {
          prevSlide();
          stopSlideShow();
          startSlideShow();
      }
  });
  
  // Pause on hover
  const slideshow = document.querySelector('.slideshow');
  slideshow.addEventListener('mouseenter', stopSlideShow);
  slideshow.addEventListener('mouseleave', startSlideShow);
  
  // Touch events for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  slideshow.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});
  
  slideshow.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
  }, {passive: true});
  
  function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
          nextSlide(); // Swipe left
      } else if (touchEndX > touchStartX + 50) {
          prevSlide(); // Swipe right
      }
  }
  
  // Start the slideshow
  startSlideShow();
});




document.getElementById("menuicon").onclick = function(){
    document.getElementById("menulinks").style.marginRight = "0px";
}

document.getElementById("closebar").onclick = function(){
    document.getElementById("menulinks").style.marginRight = "-260px";
}