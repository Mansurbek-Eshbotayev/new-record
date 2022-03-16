var elSection = document.querySelector(".game");
var elResult1 = document.querySelector(".result1");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");
var elResult5 = document.querySelector(".result5");
var elResult6 = document.querySelector(".result6");
var elResult7 = document.querySelector(".result7");
var elResult8 = document.querySelector(".result8");
var elResult9 = document.querySelector(".result9");
var btnRec = document.querySelector(".btn");

var record = new webkitSpeechRecognition();
record.lang = "uz-UZ";



record.onresult = function(evt){
  var commands = evt.results[0][0].transcript;

  if(commands == "birinchi qizil" ){
    elResult1.textContent = "red";
    elResult1.style.backgroundColor = ("red");
  }
   else if (commands == "birinchi yashil" ){
    elResult1.textContent = "green"
    elResult1.style.backgroundColor = ("green");
  }
   else if (commands == "ikkinchi qizil" ){
    elResult2.textContent = "red"
    elResult2.style.backgroundColor = ("red");
  }
   else if (commands == "ikkinchi yashil " ){
    elResult2.textContent = "green"
    elResult2.style.backgroundColor = ("green");
  }else{
    console.log("error")
  }

  
  
 

  var elSpan = document.createElement("span");
  elResult1.appendChild(elSpan);
  
}


btnRec.addEventListener("click" , function(){
  record.start();
})