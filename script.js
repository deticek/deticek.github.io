var audioElement=new Audio();
   
var st=1;
var sk=100;

var o=0;
var opcija=["balkan","muu"];

var pll=["Gas Party","Domaca muzika"];
var byy=["Vita_vinter","luka_finzgar"];

var ostanek;

var dolg;

   
function predvajajZvok() {

    document.getElementById("pl").innerHTML="Playing: "+st;

   start();
    var pot=opcija[o]+"/komad ("+st+").mp3";
    audioElement.src=pot;

    document.getElementById("izvajalci").innerHTML=pll[o];
    document.getElementById("naslov").innerHTML="By "+byy[o];


    if (ostanek && parseFloat(ostanek) !== 0) {
        audioElement.currentTime = parseFloat(ostanek);
    }
    audioElement.onloadedmetadata = function() {
        var minutes = Math.floor(audioElement.duration / 60);
        var seconds = Math.floor(audioElement.duration % 60);
        var formattedDuration = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    
        dolg = formattedDuration;
        document.getElementById("right").innerHTML = dolg;

        

        
    };
   
    

    audioElement.play();
}

function zaustaviZvok() {
    audioElement.pause();
    stop();
    // Shranjevanje trenutnega časa predvajanja v localStorage
    ostanek = audioElement.currentTime.toString();
}


var zas=false;
   function zvok(){
    if(zas){
        predvajajZvok();
        zas=!zas;
    }else{
        zaustaviZvok();
        zas=!zas;
    }
   }

   function naslednji(){

    if(st==sk){
        st=1;
    }else{
        st++;
        
    }
    reset();
    predvajajZvok();

   }

   audioElement.addEventListener('ended', function () {
    naslednji(); 
});

   function prejsna(){

    if(st==1){
        st=sk;
    }else{
        st--;
        
    }
    reset();
    predvajajZvok();

   }
var ch=true;
   function zamenjaj(){
    st=1;
    if(ch){
        o=1;
        sk=96;
        ch=!ch;
        ostanek=0;
    }else{
        o=0;
        sk=100;
        ch=!ch;
        ostanek=0;
    }
    console.log("uspesno");
    document.getElementById("pl").innerHTML="Goveja";
reset();
    predvajajZvok();
    
   }
   //bar

   var bar;
  var animation;
  var progressBarPosition = 0;

  document.addEventListener("DOMContentLoaded", function() {
    bar = document.getElementById("progress-bar");
    var animation;
    var progressBarPosition = 0;
  });

  function start() {
    var duration = audioElement.duration;
    bar.style.animation = `progressBarAnimation ${duration}s linear forwards`;
    animation = setInterval(function () {
      progressBarPosition = parseFloat(bar.style.width);
    }, 100);
  }

  function stop() {
    clearInterval(animation);
    bar.style.animationPlayState = "paused";
  }

  function reset() {
  clearInterval(animation);
  bar.style.animation = "none"; // Ponastavi animacijo
  bar.style.width = "0%";
  progressBarPosition = 0; // Ponastavi tudi shranjeni položaj
  start();
}
