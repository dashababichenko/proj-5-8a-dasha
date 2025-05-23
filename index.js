  const openBtn = document.querySelector('.header-modal-open');
  const closeBtn = document.getElementById('modalClose');
  const backdrop = document.getElementById('modalBackdrop');
  const body = document.body;

  openBtn.addEventListener('click', () => {
    body.classList.add('modal-open');
  });

  closeBtn.addEventListener('click', () => {
    body.classList.remove('modal-open');
  });

  backdrop.addEventListener('click', () => {
    body.classList.remove('modal-open');
  });
  
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('youtubeIframe');
  const closeBtn1 = document.getElementById('closeModal');
  document.querySelectorAll('.universal__btn[data-link]').forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-link');
      iframe.src = url.replace('watch?v=', 'embed/');
      modal.style.display = 'flex';
    });
  });

  
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.style.display = 'none';
    iframe.src = 'https://www.youtube.com/embed/tgbNymZ7vqY'; 
    document.body.classList.remove('modal-open');
  }


  const items = document.querySelectorAll('.products-list-item-container');
  const cart = document.getElementById('cart');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  let selectedItems = [];

  items.forEach(item => {
    item.addEventListener('click', () => {
      const price = parseFloat(item.dataset.price);

      if (item.classList.contains('selected')) {
        item.classList.remove('selected');
        selectedItems = selectedItems.filter(p => p !== price);
      } else {
        item.classList.add('selected');
        selectedItems.push(price);
      }

      
      cartCount.textContent = selectedItems.length;
      cartTotal.textContent = selectedItems.reduce((a, b) => a + b, 0).toFixed(2);

      
      if (selectedItems.length > 0) {
        cart.classList.add('cart--visible');
      } else {
        cart.classList.remove('cart--visible');
      }
    });
  });
  const elcard1 = document.querySelector('.petknowledge-container-petslist-item:nth-child(1)')
   const elcard2 = document.querySelector('.petknowledge-container-petslist-item:nth-child(2)')
    const elcard3 = document.querySelector('.petknowledge-container-petslist-item:nth-child(3)')

console.log(elcard1);
console.log(elcard2);
console.log(elcard3);

let activecard = null;

elcard1.addEventListener('click',()=> {
  if (activecard) {
    console.log("activecard",activecard);
    activecard.classList.remove('active');
  }
  if (activecard !== elcard1) {
    elcard1.classList.add("active");
    activecard = elcard1;
  } else {
     activecard = null
  }
})
elcard2.addEventListener('click',()=> {
if (activecard) {
    console.log("activecard",activecard);
    activecard.classList.remove('active');
  }
  if (activecard !== elcard2) {
    elcard2.classList.add("active");
    activecard = elcard2;
  } else {
     activecard = null
  }})
elcard3.addEventListener('click',()=> {
if (activecard) {
    console.log("activecard",activecard);
    activecard.classList.remove('active');
  }
  if (activecard !== elcard3) {
    elcard3.classList.add("active");
    activecard = elcard3;
  } else {
     activecard = null
  }})