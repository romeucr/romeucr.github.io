'use strict'

const sections = document.querySelectorAll('.container')
const sectBtns = document.querySelectorAll('.buttons')
const sectBtn = document.querySelectorAll('.btn')
const allSections = document.querySelector('.main-content')

function pageTransitions() {
   // active button
   sectBtn.forEach((btn) => {
      btn.addEventListener('click', function(){
         const [currentBtn] = document.querySelectorAll('.active-btn')
         
         // remove the class from the current active btn and adds it to the clicked one 
         currentBtn.classList.remove('active-btn')
         this.classList.add('active-btn') 
      })
   })

   // active section
   allSections.addEventListener('click', (e) => {
      const id = e.target.dataset.id
      console.log(id)
      console.log(e.target)
      if (id) {
         sectBtns.forEach((btn) => {
            btn.classList.remove('active')
         })


         // hide other sections
         sections.forEach((section) => {
            section.classList.remove('active')
         })

         const element = document.getElementById(id)
         element.classList.add('active')
      }
   })
}

pageTransitions()