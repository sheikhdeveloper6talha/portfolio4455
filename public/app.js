  function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
  }

gsap.registerPlugin(ScrollTrigger);



gsap.from(".hero > *", {
  y: 100,         
  opacity: 0,      
  duration: 1,
  stagger: 0.3,    
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",  
    toggleActions: "play none none none"
  }
});


gsap.from('.card > * ' , {
 opacity: 0,      
  duration: 1,
  stagger: 0.3,    
  ease: "power3.out",

 scrollTrigger: {
  trigger: ".card",
  start: "top 80%",
}
})
gsap.from('.exp-card > * ' , {
  y : 300,
 opacity: 0,      
  duration: 1,
  stagger: 0.3,    
  ease: "power3.out",

 scrollTrigger: {
  trigger: ".expertise-grid",
  start: "top 80%",
}
})


// satrt gotoGitHub() function

function gotoGitHub(){
  window.open('https://sheikhdeveloper6talha.github.io/GitHubApi/' , '_blank')
}
// satrt gotoYouTube() function

function gotoYouTube(){
  window.open('https://sheikhdeveloper6talha.github.io/youtubeApi/' , '_blank')
}

// satrt gotoCRUD()() function

function gotoCRUD(){
  window.open('https://sheikhdeveloper6talha.github.io/CRUDApp/' , '_blank')
}
// satrt gotoEcommerce() function

function gotoEcommerce(){
  window.open('https://sheikhdeveloper6talha.github.io/E-Commerce/' , '_blank')
}
// satrt gotoCalculator() function

function gotoCalculator(){
  window.open('https://sheikhdeveloper6talha.github.io/Simple-ScientificCalculatorApp/' , '_blank')
}
function gotoTicTacToe(){
  window.open('https://sheikhdeveloper6talha.github.io/TicTackToe/' , '_blank')
}
function gotoLandingPage(){
  window.open('https://sheikhdeveloper6talha.github.io/E-CommerceLandingPage/' , '_blank')
}


function gotoWhatsApp(){
  window.open('https://wa.me/923162573865' , '_blank')

}