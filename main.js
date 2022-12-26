const buyBtns = document.querySelectorAll('.js-buy-button')
const modalContainer = document.querySelector('.js-modal-container')
const modal = document.querySelector('.js-ticket-buy')
const hideModal = document.querySelector('.js-ticket-close')
const menuModal = document.querySelector('.more-btn')
const header = document.querySelector('#header')
const openModal =  document.querySelectorAll('.nav > .js-li')

function showBuyTicket() {
   modal.classList.add('open')
}

function removeBuyTicket() {
   modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
     buyBtn.addEventListener('click', showBuyTicket)
}

hideModal.addEventListener('click', removeBuyTicket)

modal.addEventListener('click', removeBuyTicket)

modalContainer.addEventListener('click', function() {
   event.stopPropagation()
})

// setTimeout(function(){
//    alert("wellcome to my first website")
// },1000)


// menu modal

function closeOpenModal(){
   header.classList.add('closeOpen')
}

for (const key of openModal) {
      key.addEventListener('click', closeOpenModal)
}

function modalBuy() {
   header.classList.toggle('closeOpen')
}

menuModal.addEventListener('click', modalBuy)