
window.addEventListener('load', () => {
  const swiper = new Swiper('.swiper-container-interier', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#int-slider-right',
      prevEl: '#int-slider-left',
    },
  
  });


  const swiper_rewiews = new Swiper('.swiper-container-reviews', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#gal-slider-right',
      prevEl: '#gal-slider-left',
    },
  
  });


  document.querySelectorAll('.faq-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });

  document.querySelectorAll('.dropdown_container').forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
      dropdown.parentElement.classList.toggle('active');
    })
  })

})

