window.onload = function() {
    showMe_js();
  }

function showMe_js(){
    document.querySelector(".abtme").style.display="block";
    document.querySelector(".edu").style.display="none";
    document.querySelector(".skills").style.display="none";
    document.querySelector(".achiv").style.display="none";
    document.querySelector(".expe").style.display="none";

    document.querySelector(".btn1").classList.add("btnact");
    document.querySelector(".btn2").classList.remove("btnact");
    document.querySelector(".btn3").classList.remove("btnact");
    document.querySelector(".btn4").classList.remove("btnact");
    document.querySelector(".btn5").classList.remove("btnact");
}

function edu_js(){
    document.querySelector(".abtme").style.display="none";
    document.querySelector(".edu").style.display="block";
    document.querySelector(".skills").style.display="none";
    document.querySelector(".achiv").style.display="none";
    document.querySelector(".expe").style.display="none";

    document.querySelector(".btn1").classList.remove("btnact");
    document.querySelector(".btn2").classList.add("btnact");
    document.querySelector(".btn3").classList.remove("btnact");
    document.querySelector(".btn4").classList.remove("btnact");
    document.querySelector(".btn5").classList.remove("btnact");
}

function skills_js(){
    document.querySelector(".abtme").style.display="none";
    document.querySelector(".edu").style.display="none";
    document.querySelector(".skills").style.display="block";
    document.querySelector(".achiv").style.display="none";
    document.querySelector(".expe").style.display="none";

    document.querySelector(".btn1").classList.remove("btnact");
    document.querySelector(".btn2").classList.remove("btnact");
    document.querySelector(".btn3").classList.add("btnact");
    document.querySelector(".btn4").classList.remove("btnact");
    document.querySelector(".btn5").classList.remove("btnact");
}

function achiv_js(){
    document.querySelector(".abtme").style.display="none";
    document.querySelector(".edu").style.display="none";
    document.querySelector(".skills").style.display="none";
    document.querySelector(".achiv").style.display="block";
    document.querySelector(".expe").style.display="none";

    document.querySelector(".btn1").classList.remove("btnact");
    document.querySelector(".btn2").classList.remove("btnact");
    document.querySelector(".btn3").classList.remove("btnact");
    document.querySelector(".btn4").classList.add("btnact");
    document.querySelector(".btn5").classList.remove("btnact");
}

function expe_js(){
    document.querySelector(".abtme").style.display="none";
    document.querySelector(".edu").style.display="none";
    document.querySelector(".skills").style.display="none";
    document.querySelector(".achiv").style.display="none";
    document.querySelector(".expe").style.display="block";

    document.querySelector(".btn1").classList.remove("btnact");
    document.querySelector(".btn2").classList.remove("btnact");
    document.querySelector(".btn3").classList.remove("btnact");
    document.querySelector(".btn4").classList.remove("btnact");
    document.querySelector(".btn5").classList.add("btnact");
}
