var audioElement=new Audio();
   
var st=1;
var sk=100;

var o=0;
var opcija=["balkan","domaca"];

var pll=["Gas Party","Domaca muzika"];
var byy=["Vita_vinter","luka_finzgar"];

var imenaDatotek = [
    "Airplane Mode",    "Anika",    "Belo obleko si že nosila",    "Bodi Moja Mala",    "Borovničke",    "Breskvice",    "Brizgalna brizga",    "Cakal Sn Te Ko Kreten",    "Cela Ulica Nori",    "Cik Cak (Tribute To The Legends) - Slovenian Version",    "Cista jeba",    "Daj daj daj",    "Dimnikar",    "Dva policaja",    "Ena bolha za pomoč",    "Gostilna je moj dom",    "Hci vaskega ucitelja",    "Hop marinka",    "Huda Ura Rock Nažiga - Donnawedda",    "Iz Pekla Do Raja",    "Jasmina",    "Joške do Koroške",    "K bo padal dež",    "Kam so šli vsi cigani",    "Keš pičke",    "Kinderšpil",    "Kiss Me",    "Kje si našla tega kretena",    "Ko Bil Sn Se Mali Pizdun",    "Ko mislim nate",    "Ko so lipe cvetele",    "Kot smreke so padale",    "Krokodilcki",    "Lahko Bi Zletela",    "Le tebe bi ....",    "Ledena",    "Levo Desno",    "LUNCA",    "Malo, malo še",    "Marjanca",    "Mi ga spet žingamo",    "Moj Prijatelj Anu Ljubi",    "Moj Prijatelj Cviček (Remix)",    "MOJA MAMA JE STRELA",    "Moja mukica",    "Moja",    "Mrcina",    "Na nebo",    "Na Robleku",    "Na Soncu",    "Naj vino tvoj poljub sladi",    "Najlepše so kelnerce",    "Natakar’ca",    "Ne gane me - Radio Edit",    "Ne grem domov",    "Ne grem na kolena",    "Nisem ti verjel",    "Nocoj je druga rekla mi",    "Oj, kozarček moj",    "On ne more",    "Ona sanja o ljubljani",    "Ostal bom muzikant",    "Pa mi je enega dala - Remix",    "Platina",    "Po dekle",    "Pojdi Z Menoj V Toplice - 1",    "Povej mi Marina",    "Pr'jatlca",    "Rdeče Oči",    "REŠEVALEC",    "Rock Me",    "Rženova Tinka",    "S Teboj",    "Sam Da Ti Maš Mene Rada",    "Schatzi",    "Skok čez plot",    "Sladka Ko Med",    "Sladoled",    "Stara Dobra",    "Ta Sosedov Francelj",    "Ta tamala",    "Ti Moja Rožica",    "Tih deževen dan",    "Tota naša vinska klet",    "Treba ga je...",    "Ubila si del mene",    "Ustavil bi čas",    "V dolini Tihi",    "Verjamem",    "Veseli Ribncan",    "Večja od neba",    "Zate bi rože kradel",    "Zdravnik",    "Zetor",    "Zvočnik Na Pločnik",    "Čedna Mala Trmasta",    "Čevapčiči",    "Šok",    "Štajerka frajerka",    "Številka 3"
  ];

var ostanek;

var dolg;

   
function predvajajZvok() {

    document.getElementById("pl").innerHTML="Playing: "+pll[0];

   start();
    var pot=opcija[o]+"/komad ("+st+").mp3";
    audioElement.src=pot;

    document.getElementById("izvajalci").innerHTML=imenaDatotek[st-1];
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
        ch=!ch;
        ostanek=0;
    }else{
        o=0;
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
