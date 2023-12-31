window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault()
        transition_el.classList.add('is-active');

        setInterval(() => {
          window.location.href = anchor.href
        }, 500);
      })
    }
  }