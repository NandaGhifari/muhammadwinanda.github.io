// $.getJSON('js/.json', function (data) {
//   console.log(data[0]["menu",{[1]}]);
// });


// const ganti = () => {
//  const kelas = $(".aboutMe") //dengan jquery
//  for (let i = 0; i < kelas.length; i++) {
//   kelas[i].innerHTML = "Proses Translate";
//  }
// }

// const indo = () => {
//   changeBahasa();
// }

// const changeBahasa = () => {
//   $.getJSON("js/indonesia.json", (data) => {
//     document.querySelector("a.home").innerHTML = data[0]["menu"]["home"];
//   });
// }

const indo = () => {
  const tombol = document.querySelector("a.indonesia");

  $.getJSON("js/indonesia.json", (data) => {
    const home = document.querySelector("a.home");
    const about = document.querySelector("a.about");
    const project = document.querySelector("a.project");
    const contact = document.querySelector("a.contact");
    home.innerHTML = data[0]["menu"]["home"];
    about.innerHTML = data[0]["menu"]["about"];
    project.innerHTML = data[0]["menu"]["project"];
    contact.innerHTML = data[0]["menu"]["contact"];

    const aboutMe = document.querySelector("h1.aboutMe");
    const paragraph = document.querySelector("p.paragraph");
    aboutMe.innerHTML = data[1]["about"]["aboutMe"];
    paragraph.innerHTML = data[1]["about"]["paragraph"];

    document.querySelector("h1.projectMe").innerHTML = data[2]["project"]["projectMe"];
    document.querySelector("h5.project-title").innerHTML = data[2]["project"]["projectTitle"][0];
    document.querySelector("h5.project-title1").innerHTML = data[2]["project"]["projectTitle"][1];
    document.querySelector("p.project-text").innerHTML = data[2]["project"]["projectText"][0];
    document.querySelector("p.project-text1").innerHTML = data[2]["project"]["projectText"][1];
    document.querySelector("p.project-time").innerHTML = data[2]["project"]["projectTime"];
    document.querySelector("p.project-time1").innerHTML = data[2]["project"]["projectTime"];

    document.querySelector('h1.contactMe').innerHTML = data[3]["contact"]["contactMe"];
    document.querySelector('label.LName').innerHTML = data[3]["contact"]["LName"];
    document.querySelector('label.LEmail').innerHTML = data[3]["contact"]["LEmail"];
    document.querySelector('label.LMessage').innerHTML = data[3]["contact"]["LMessage"];
    document.querySelector('div.my-alert').innerHTML = data[3]["contact"]["my-alert"];
  });
}

const eng = () => {
  const tombol = document.querySelector("a.england");
  // tombol.disabled = "true";

  $.getJSON("js/english.json", (data) => {
    const home = document.querySelector("a.home");
    const about = document.querySelector("a.about");
    const project = document.querySelector("a.project");
    const contact = document.querySelector("a.contact");
    home.innerHTML = data[0]["menu"]["home"];
    about.innerHTML = data[0]["menu"]["about"];
    project.innerHTML = data[0]["menu"]["project"];
    contact.innerHTML = data[0]["menu"]["contact"];

    const aboutMe = document.querySelector("h1.aboutMe");
    const paragraph = document.querySelector("p.paragraph");
    aboutMe.innerHTML = data[1]["about"]["aboutMe"];
    paragraph.innerHTML = data[1]["about"]["paragraph"];

    document.querySelector("h1.projectMe").innerHTML = data[2]["project"]["projectMe"];
    document.querySelector("h5.project-title").innerHTML = data[2]["project"]["projectTitle"][0];
    document.querySelector("h5.project-title1").innerHTML = data[2]["project"]["projectTitle"][1];
    document.querySelector("p.project-text").innerHTML = data[2]["project"]["projectText"][0];
    document.querySelector("p.project-text1").innerHTML = data[2]["project"]["projectText"][1];
    document.querySelector("p.project-time").innerHTML = data[2]["project"]["projectTime"];
    document.querySelector("p.project-time1").innerHTML = data[2]["project"]["projectTime"];

    document.querySelector('h1.contactMe').innerHTML = data[3]["contact"]["contactMe"];
    document.querySelector('label.LName').innerHTML = data[3]["contact"]["LName"];
    document.querySelector('label.LEmail').innerHTML = data[3]["contact"]["LEmail"];
    document.querySelector('label.LMessage').innerHTML = data[3]["contact"]["LMessage"];
    document.querySelector('div.my-alert').innerHTML = data[3]["contact"]["my-alert"];
  });
}

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("col-left")) {
    x = -100; 
    y = 0;
  } else if (elem.classList.contains("col-right")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 3, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
