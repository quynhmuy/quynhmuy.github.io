import '../css/style.css'

console.log('Quynh My Portfolio loaded!')

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()
      
      const targetId = this.getAttribute('href')
      if (targetId === '#') return
      
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    })
  })
})