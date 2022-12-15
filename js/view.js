function ulang(){
  location.reload();
}

const indo = () => {

  $.getJSON("js/indonesia.json", (data) => {
    const home = document.querySelector("a.home");
    const about = document.querySelector("a.about");
    const skill = document.querySelector("a.skill");
    const contact = document.querySelector("a.contact");
    home.innerHTML = data[0]["menu"]["home"];
    about.innerHTML = data[0]["menu"]["about"];
    skill.innerHTML = data[0]["menu"]["skill"];
    contact.innerHTML = data[0]["menu"]["contact"];
    
    document.querySelector("h2.aboutMe").innerHTML = data[1]["about"]["aboutMe"];
    document.querySelector("h6.openDialog").innerHTML = data[1]["about"]["dialog"];;
    document.querySelector("button.clickMe").innerHTML = data[1]["about"]["clickMe"];
      function clickMe() { 
        document.querySelector('.intro').innerHTML = data[1]["about"]["intro"]; 
      }
      clickMe();

    document.querySelector("h2.skillMe").innerHTML = data[2]["skill"]["skillMe"];
    document.querySelector("h5.skill-title").innerHTML = data[2]["skill"]["skillTitle"][0];
    document.querySelector("h5.skill-title1").innerHTML = data[2]["skill"]["skillTitle"][1];
    document.querySelector("h5.skill-title2").innerHTML = data[2]["skill"]["skillTitle"][2];
    document.querySelector("p.skill-text").innerHTML = data[2]["skill"]["skillText"][0];
    document.querySelector("p.skill-text1").innerHTML = data[2]["skill"]["skillText"][1];
    document.querySelector("p.skill-text2").innerHTML = data[2]["skill"]["skillText"][2];
    // document.querySelector("p.skill-time").innerHTML = data[2]["skill"]["skillTime"];
    // document.querySelector("p.skill-time1").innerHTML = data[2]["skill"]["skillTime"];

    document.querySelector('h2.contactMe').innerHTML = data[3]["contact"]["contactMe"];
    document.querySelector('label.LName').innerHTML = data[3]["contact"]["LName"];
    document.querySelector('label.LEmail').innerHTML = data[3]["contact"]["LEmail"];
    document.querySelector('label.LMessage').innerHTML = data[3]["contact"]["LMessage"];
    document.querySelector('div.my-alert').innerHTML = data[3]["contact"]["my-alert"];
  });
}

const eng = () => {

  $.getJSON("js/english.json", (data) => {
    const home = document.querySelector("a.home");
    const about = document.querySelector("a.about");
    const skill = document.querySelector("a.skill");
    const contact = document.querySelector("a.contact");
    home.innerHTML = data[0]["menu"]["home"];
    about.innerHTML = data[0]["menu"]["about"];
    skill.innerHTML = data[0]["menu"]["skill"];
    contact.innerHTML = data[0]["menu"]["contact"];

    const aboutMe = document.querySelector("h2.aboutMe");
    aboutMe.innerHTML = data[1]["about"]["aboutMe"];
    document.querySelector("h6.openDialog").innerHTML = data[1]["about"]["dialog"];
    document.querySelector("button.clickMe").innerHTML = data[1]["about"]["clickMe"];
    function clickMe() { 
      document.querySelector('.intro').innerHTML = data[1]["about"]["intro"]; 
    }
    clickMe();

    document.querySelector("h2.skillMe").innerHTML = data[2]["skill"]["skillMe"];
    document.querySelector("h5.skill-title").innerHTML = data[2]["skill"]["skillTitle"][0];
    document.querySelector("h5.skill-title1").innerHTML = data[2]["skill"]["skillTitle"][1];
    document.querySelector("h5.skill-title2").innerHTML = data[2]["skill"]["skillTitle"][2];
    document.querySelector("p.skill-text").innerHTML = data[2]["skill"]["skillText"][0];
    document.querySelector("p.skill-text1").innerHTML = data[2]["skill"]["skillText"][1];
    document.querySelector("p.skill-text2").innerHTML = data[2]["skill"]["skillText"][2];
    // document.querySelector("p.skill-time").innerHTML = data[2]["skill"]["skillTime"];
    // document.querySelector("p.skill-time1").innerHTML = data[2]["skill"]["skillTime"];

    const test =  document.querySelector('h2.contactMe').innerHTML = data[3]["contact"]["contactMe"];
    console.log(test);
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

const clickMe = () => {
  document.querySelector('.intro').classList.toggle('d-none');
}