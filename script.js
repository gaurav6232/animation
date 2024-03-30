gsap.from("#left",{
    width: 0,
    ease: Expo.easeInOut,
    duration: 2.5, 
})
gsap.from("#right",{
   width: 0,
   ease: Expo.easeInOut,
   duration: 2.5, 
   delay: 2, 
})
gsap.to("#ring",{
   top:"90%",
   x:200,
   left:"90%",
   delay:2.5,
   duration: 5,
   ease:Circ.easeInOut,
   
})