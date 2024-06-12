function ulang(){
  location.reload();
}

const indo = () => {
  $.getJSON("js/indonesia.json", (indonesia) => {
    const home = document.querySelector("a.home");
    const about = document.querySelector("a.about");
    const skill = document.querySelector("a.skill");
    const project = document.querySelector("a.project");
    const contact = document.querySelector("a.contact");
    home.innerHTML = indonesia[0]["menu"]["home"];
    about.innerHTML = indonesia[0]["menu"]["about"];
    skill.innerHTML = indonesia[0]["menu"]["skill"];
    project.innerHTML = indonesia[0]["menu"]["project"];
    contact.innerHTML = indonesia[0]["menu"]["contact"];
    
    document.querySelector("h2.aboutMe").innerHTML = indonesia[1]["about"]["aboutMe"];
    document.querySelector("h6.openDialog").innerHTML = indonesia[1]["about"]["dialog"];;
    document.querySelector("button.clickMe").innerHTML = indonesia[1]["about"]["clickMe"];
      function clickMe() { 
        document.querySelector('.intro').innerHTML = indonesia[1]["about"]["intro"]; 
      }
      clickMe();

    document.querySelector("h2.skillMe").innerHTML = indonesia[2]["skill"]["skillMe"];
    document.querySelector("h5.skill-title").innerHTML = indonesia[2]["skill"]["skillTitle"][0];
    document.querySelector("h5.skill-title1").innerHTML = indonesia[2]["skill"]["skillTitle"][1];
    document.querySelector("h5.skill-title2").innerHTML = indonesia[2]["skill"]["skillTitle"][2];
    document.querySelector("h5.skill-title3").innerHTML = indonesia[2]["skill"]["skillTitle"][3];
    document.getElementById("caption").innerHTML = indonesia[2]["skill"]["addCaption"][0];
    document.getElementById("caption1").innerHTML = indonesia[2]["skill"]["addCaption"][1];
    document.querySelector("p.skill-text").innerHTML = indonesia[2]["skill"]["skillText"][0];
    document.querySelector("p.skill-text1").innerHTML = indonesia[2]["skill"]["skillText"][1];
    document.querySelector("p.skill-text2").innerHTML = indonesia[2]["skill"]["skillText"][2];
    document.querySelector("p.skill-text3").innerHTML = indonesia[2]["skill"]["skillText"][3];
   
    // skill a view
    document.querySelector("td.skill-a-CSS").innerHTML = indonesia[2]["skill"]["skillAView"][0];
    document.querySelector("td.skill-a-Bootstrap").innerHTML = indonesia[2]["skill"]["skillAView"][1];
    document.querySelector("td.skill-a-Tailwind").innerHTML = indonesia[2]["skill"]["skillAView"][2];

    // skill server
    document.querySelector("td.skill-a-nodejs").innerHTML = indonesia[2]["skill"]["skillServer"][0];

    // document.querySelector("p.skill-time").innerHTML = indonesia[2]["skill"]["skillTime"];
    // document.querySelector("p.skill-time1").innerHTML = indonesia[2]["skill"]["skillTime"];

    // Project me
    document.querySelector('.listProject').innerHTML = indonesia[3].project.listProject;
    // modal Aplikasi Pengaduan
    document.querySelector('.judulPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.judul;
      // Keluhan
      document.querySelector('.penjelasanPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.penjelasan;
      document.querySelector('.listPermasalahanPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.listPermasalahan;
      document.querySelector('.item1PermasalahanPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item1Permasalahan;
      document.querySelector('.item2PermasalahanPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item2Permasalahan
      // end Keluhan
      // Solusi
      document.querySelector('.listSolusiPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.listSolusi;
      document.querySelector('.item1SolusiPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item1Solusi;
      document.querySelector('.item2SolusiPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item2Solusi;
      // end
      // dev Aplikasi
      document.querySelector('.listAplikasiPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.listAplikasi;
      document.querySelector('.item1Pengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item1Pengaduan;
      document.querySelector('.item2Pengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item2Pengaduan;
      document.querySelector('.item3Pengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item3Pengaduan;
      document.querySelector('.item4Pengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.item4Pengaduan;
      // end
      // Dokumentasi
      document.querySelector('.dokumentasiPengaduan').innerHTML = indonesia[3].project.modalAplikasiPengaduan.dokumentasi;


    // fitur Komentar
    document.querySelector('h2.contactMe').innerHTML = indonesia[4]["contact"]["contactMe"];
    document.querySelector('label.LName').innerHTML = indonesia[4]["contact"]["LName"];
    document.querySelector('label.LEmail').innerHTML = indonesia[4]["contact"]["LEmail"];
    document.querySelector('label.LMessage').innerHTML = indonesia[4]["contact"]["LMessage"];
    document.querySelector('div.my-alert').innerHTML = indonesia[4]["contact"]["my-alert"];

  });
}

const eng = () => {
  $.getJSON("js/english.json", (english) => {
    const home = document.querySelector("a.home");
    const about = document.querySelector("a.about");
    const skill = document.querySelector("a.skill");
    const project = document.querySelector("a.project");
    const contact = document.querySelector("a.contact");
    home.innerHTML = english[0]["menu"]["home"];
    about.innerHTML = english[0]["menu"]["about"];
    skill.innerHTML = english[0]["menu"]["skill"];
    project.innerHTML = english[0]["menu"]["project"];
    contact.innerHTML = english[0]["menu"]["contact"];

    const aboutMe = document.querySelector("h2.aboutMe");
    aboutMe.innerHTML = english[1]["about"]["aboutMe"];
    document.querySelector("h6.openDialog").innerHTML = english[1]["about"]["dialog"];
    document.querySelector("button.clickMe").innerHTML = english[1]["about"]["clickMe"];
    function clickMe() { 
      document.querySelector('.intro').innerHTML = english[1]["about"]["intro"]; 
    }
    clickMe();

    document.querySelector("h2.skillMe").innerHTML = english[2]["skill"]["skillMe"];
    document.querySelector("h5.skill-title").innerHTML = english[2]["skill"]["skillTitle"][0];
    document.querySelector("h5.skill-title1").innerHTML = english[2]["skill"]["skillTitle"][1];
    document.querySelector("h5.skill-title2").innerHTML = english[2]["skill"]["skillTitle"][2];
    document.querySelector("h5.skill-title3").innerHTML = english[2]["skill"]["skillTitle"][3];

    document.querySelector("p.skill-text").innerHTML = english[2]["skill"]["skillText"][0];
    document.querySelector("p.skill-text1").innerHTML = english[2]["skill"]["skillText"][1];
    document.querySelector("p.skill-text2").innerHTML = english[2]["skill"]["skillText"][2];
    // skill a view
    document.querySelector("td.skill-a-CSS").innerHTML = english[2]["skill"]["skillAView"][0];
    document.querySelector("td.skill-a-Bootstrap").innerHTML = english[2]["skill"]["skillAView"][1];
    document.querySelector("td.skill-a-Tailwind").innerHTML = english[2]["skill"]["skillAView"][2];
    document.querySelector("p.skill-text3").innerHTML = english[2]["skill"]["skillText"][3];

    //skill a server
    document.querySelector("td.skill-a-nodejs").innerHTML = english[2]["skill"]["skillServer"][0];

    document.getElementById("caption").innerHTML = english[2]["skill"]["addCaption"][0];
    document.getElementById("caption1").innerHTML = english[2]["skill"]["addCaption"][1];

    // document.querySelector("p.skill-time").innerHTML = english[2]["skill"]["skillTime"];
    // document.querySelector("p.skill-time1").innerHTML = english[2]["skill"]["skillTime"];


    // Project me
    document.querySelector('.listProject').innerHTML = english[3].project.listProject;
    // modal Aplikasi Pengaduan
    document.querySelector('.judulPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.judul;
      // Keluhan
      document.querySelector('.penjelasanPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.penjelasan;
      document.querySelector('.listPermasalahanPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.listPermasalahan;
      document.querySelector('.item1PermasalahanPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item1Permasalahan;
      document.querySelector('.item2PermasalahanPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item2Permasalahan
      // end Keluhan
      // Solusi
      document.querySelector('.listSolusiPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.listSolusi;
      document.querySelector('.item1SolusiPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item1Solusi;
      document.querySelector('.item2SolusiPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item2Solusi;
      // end
      // dev Aplikasi
      document.querySelector('.listAplikasiPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.listAplikasi;
      document.querySelector('.item1Pengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item1Pengaduan;
      document.querySelector('.item2Pengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item2Pengaduan;
      document.querySelector('.item3Pengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item3Pengaduan;
      document.querySelector('.item4Pengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.item4Pengaduan;
      // end
      // Dokumentasi
      document.querySelector('.dokumentasiPengaduan').innerHTML = english[3].project.modalAplikasiPengaduan.dokumentasi;

    document.querySelector('h2.contactMe').innerHTML = english[4]["contact"]["contactMe"];
    document.querySelector('label.LName').innerHTML = english[4]["contact"]["LName"];
    document.querySelector('label.LEmail').innerHTML = english[4]["contact"]["LEmail"];
    document.querySelector('label.LMessage').innerHTML = english[4]["contact"]["LMessage"];
    document.querySelector('div.my-alert').innerHTML = english[4]["contact"]["my-alert"];
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