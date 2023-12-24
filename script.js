var tl = gsap.timeline()

tl.from(".nav img", {

    x: -200
    , duration:0.8
    , delay: 0.5
  
})



tl.from(".link h6",{
    y: -200
    , duration: 0.7
    , opacity: 0
    , delay: 0.4
    ,stagger:0.3

})

tl.from(".btn .h6",{
    y: -200
    , duration: 0.7
    , opacity: 0
    , delay: 0.3
    ,stagger:0.3
})

tl.from(".btn .button",{
    scale:0.6,
    opacity:0
    ,stagger:0.3
})

tl.from(".centreee img", {
    scale:0,
    opacity:0
    , delay: 0.3
    ,stagger:0.3
  
})

// .abs h1 span

tl.from(".centreee .abs h1", {
    x: -200
    , duration: 0.7
    , opacity: 0
    , delay: 0.3
    ,stagger:0.3
    ,
  
})
tl.from(".centreee .abs h2", {
    y: -80
    , duration: 0.7
    , opacity: 0
    , delay: 0.3
    ,stagger:0.3
    ,
  
})
tl.from(".centreee .abs h3", {
    x: 200
    , duration: 0.7
    , opacity: 0
    , delay: 0.3
    ,stagger:0.3
    ,
  
})



tl.from(".left img", {

    x: -500
    , duration:0.8
    , delay: 0.5
    ,scale:1.3
    ,stagger:0.3
  
})

tl.from(".right img", {

    x: 500
    , duration:0.8
    , delay: 0.5
    ,scale:1.3
    ,stagger:0.3
  
})















// gsap.to("#box",{
//     backgroundColor:"blue",
//     duration:2,
//     x:1000,
//     y:100,
//     delay:1
// })
// tl.from("#box",{
//     backgroundColor:"blue",
//     duration:2,
//     x:1000,
//     y:100,
//     delay:1
// })

// var tl = gsap.timeline()
// tl.from("h2,h4",{
//     y:-30,
//     opacity:0,
//     delay:0.5,
//     stagger:0.3
// })
// tl.from("#left h1",{
//     x:-300,
//     opacity:0
// })

// tl.from("#left button",{
//     scale:0.5,
//     opacity:0
// })
// tl.from("#right img",{
//     scale:0.5,
//     opacity:0
// })
