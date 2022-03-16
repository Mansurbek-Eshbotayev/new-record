var elSection = document.querySelector(".game");
var elTitle = document.querySelector(".title");
var elText = document.querySelector(".text");
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

  if(commands == "start"){
    elSection.style.display = "block";
    elTitle.style.display = "block";
    elText.style.display = "none"
  }

  if(commands == "birinchi sariq"){
    elResult1.textContent = "X";
    elResult1.classList.remove("bkgreen")
    elResult1.classList.add("bkred")
  }
   else if (commands == "birinchi yashil"){
    elResult1.textContent = "O"
    elResult1.classList.add("bkgreen")
  }
   else if (commands == "ikkinchi sariq"){
    elResult2.textContent = "X";
    elResult2.classList.remove("bkgreen")
    elResult2.classList.add("bkred")
  }
   else if (commands == "ikkinchi yashil"){
    elResult2.textContent = "O"
    elResult2.classList.add("bkgreen")
  }
  else if (commands == "uchinchi sariq"){
   elResult3.textContent = "X";
   elResult3.classList.remove("bkgreen")
   elResult3.classList.add("bkred")
 }
  else if (commands.includes("uchinchi sariq")){
   elResult3.textContent = "O"
   elResult3.classList.add("bkgreen")
  }
  else if (commands == "tortinchi sariq"){
   elResult4.textContent = "X";
   elResult4.classList.remove("bkgreen")
   elResult4.classList.add("bkred")
 }
  else if (commands == "tortinchi yashil"){
   elResult4.textContent = "O"
   elResult4.classList.add("bkgreen")
  }
  else if (commands == "beshinchi sariq"){
   elResult5.textContent = "X";
   elResult5.classList.remove("bkgreen")
   elResult5.classList.add("bkred")
 }
  else if (commands == "beshinchi yashil"){
   elResult5.textContent = "O"
   elResult5.classList.add("bkgreen")
  }
  else if (commands.includes("oltinchi sariq")){
   elResult6.textContent = "X";
   elResult6.classList.remove("bkgreen")
   elResult6.classList.add("bkred")
 }
  else if (commands.includes("oltinchi yashil")){
   elResult6.textContent = "O"
   elResult6.classList.add("bkgreen")
  }
  else if (commands.includes("ettinchi sariq")){
   elResult7.textContent = "X";
   elResult7.classList.remove("bkgreen")
   elResult7.classList.add("bkred")
 }
  else if (commands.includes("ettinchi yashil")){
   elResult7.textContent = "O"
   elResult7.classList.add("bkgreen")
  }
  else if (commands.includes("sakkizinchi sariq")){
   elResult8.textContent = "X";
   elResult8.classList.remove("bkgreen")
   elResult8.classList.add("bkred")
 }
  else if (commands.includes("sakkizinchi yashil")){
   elResult8.textContent = "O"
   elResult8.classList.add("bkgreen")
  }
  else if (commands.includes("oxirgi sariq")){
   elResult9.textContent = "X";
   elResult9.classList.remove("bkgreen")
   elResult9.classList.add("bkred")
 }
  else if (commands.includes("oxirgi yashil")){
   elResult9.textContent = "O"
   elResult9.classList.add("bkgreen")

  }else{
    console.log("error")
  }

  
  
 

  var elSpan = document.createElement("span");
  elResult1.appendChild(elSpan);
  
}


btnRec.addEventListener("click" , function(){
  btnRec.classList.add("ops")
  record.start();
})