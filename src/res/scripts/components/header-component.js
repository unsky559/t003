window.addEventListener('load', () => {
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', (e) => {
    if(window.scrollY > 5){
      if(!header.classList.contains('flow')){
        header.classList.add('flow');
      }
    }else{
      header.classList.remove('flow');
    }
  });
});