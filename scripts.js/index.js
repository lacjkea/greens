gsap.registerPlugin(ScrollTrigger);

/*****************intro tekst ************/

gsap.from(".introtekst", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".introtekst",
    start: "top center",
    end: "center center",
    scrub: true,
    markers: true,
  },
});

/***************** produkter farver  ************/
gsap.defaults({ duration: 0 });
ScrollTrigger.defaults({ markers: true });

//const sections = gsap.utils.toArray('section');
const sections = [...document.querySelectorAll("[data-hue]")];

sections.forEach((section, i) => {
  const hue = section.dataset.hue;

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => gsap.to("body", { "--hue": hue }),
    onEnterBack: () => gsap.to("body", { "--hue": hue }),
  });
});

// /***************** citat tekst ************/
/* Find alle h3'ere */
const h1s = document.querySelectorAll("h3");

/* Loop igennem h3'ere */
h1s.forEach((h3) => {
  /* Sæt .animate__animated på alle h3'ere */
  gsap.set(h3, { css: { className: "animate__animated" } });

  /* Tildel class ved hjælp af ScrollTrigger */
  ScrollTrigger.create({
    trigger: h3,
    start: "top center",
    end: "bottom center",
    toggleClass: "animate__swing",
    once: true,
    markers: true,
  });
});
/***************** video ************/
var autoPlayVideo = document.getElementById("havtornVideo");
autoPlayVideo.oncanplaythrough = function () {
  autoPlayVideo.muted = true;
  autoPlayVideo.play();
  autoPlayVideo.pause();
  autoPlayVideo.play();
};
