gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const divs = section.querySelectorAll("div"):

    gsap.from(divs, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: section,
            start:"top center",
            end: "center center",
            scrub: true,
            markers: true,
        },
    });
});

// const divs = document.querySelectorAll("#tekst1 > div");

// gsap.from(divs, {
//   opacity: 0,
//   y: 100,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#tekst1",
//     start: "top center",
//     end: "center center",
//     markers: true,
//   },
// });
