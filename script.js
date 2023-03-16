





var tl = gsap.timeline();





tl.from("#l,#l2",{
    opacity:0,
    width:0,
    duration:1,
})



tl.from("h4,h1,h2,p",{
    opacity:0,
    duration:1,
})
gsap.to("#image",{
    scrollTrigger:{
       
        trigger:"#pg2",
        // markers:true,
        start:"top top",
        scrub:0.5

    },   
    
    rotate:"-15deg",
    // height:"25vh",
    top:"10%",
    // left:"50%"

})
gsap.to("#image",{
    scrollTrigger:{
       
        trigger:"#pg4",
        // markers:true,
        start:"top top",
        scrub:1,
        pin:"true"

    },   
    
    rotate:"deg",
    height:"40vh",
    top:"40%",
    left:"49%",
    position:"fixed"

})

gsap.to("#image",{
    scrollTrigger:{
       
        trigger:"#pg5",
        // markers:true,
        start:"top top",
        scrub:1,
        pin:"true"

    },   
    
opacity:"0"

})



// function loco(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // --- RED PANEL ---



// // --- ORANGE PANEL ---



// // --- PURPLE/GREEN PANEL ---





// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }


//  loco()