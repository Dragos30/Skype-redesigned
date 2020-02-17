
function myFunction() {
    var x = document.getElementById("main");
    if (x.className === "toggle") {
      x.className += "responsive";
      x.style.width="7%";
    } else {
      x.className = "toggle";
      x.style.width="30%";
    }
   
    var y = document.getElementById("chat");
    if (y.className === "toggleChat") {
        y.className += "responsive";
        y.style.width="100%";
        } else {
        y.className = "toggleChat";
        y.style.width="70%";
      }

    var m =document.getElementById("menu");
    var n = window.getComputedStyle(m).position;
    if (n ==="relative"){
       document.getElementById("menu").style.position="fixed";
      }else {
       document.getElementById("menu").style.position="relative";
      }
    var x = document.getElementById("back");
    var z = window.getComputedStyle(x).display;
    if (z==="block"){
      document.getElementById("back").style.display="none";
    }else {
      document.getElementById("back").style.display="block";
    }
    var q = document.getElementById("logo");
    var w = window.getComputedStyle(q).display;
    if (w==="block"){
      document.getElementById("logo").style.display="none";
    }else {
      document.getElementById("logo").style.display="block";
    }
    }
    
    
    
function showEmoticons() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function showMessage() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}
function changePerson() {
    var e = document.getElementById("pers");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(242, 64, 121)") {
    document.getElementById("pers").style.background = "#3a3e98";
} else{
    document.getElementById("pers").style.background = "#F24079";
}
}
function changePerson2() {
  var a = document.getElementById("persx");
  var b = window.getComputedStyle(a).backgroundColor;
  if (b === "rgb(242, 64, 121)") {
  document.getElementById("persx").style.background = "#3a3e98";
} else{
  document.getElementById("persx").style.background = "#F24079";
}
  var x =document.getElementById("chat2");
  var y = window.getComputedStyle(x).display;
  if (y==="none"){
    document.getElementById("chat2").style.display = "flex";}
  //  } else{
  //     document.getElementById("chat2").style.display = "none";
  //   }
    var q =document.getElementById("chat");
    var w = window.getComputedStyle(q).display;
    if (w==="flex"){
      document.getElementById("chat").style.display = "none";}
    //  } else{
    //     document.getElementById("chat").style.display = "flex";
    //   }
    }
  
function changePerson3() {
  var a = document.getElementById("pers3");
  var b = window.getComputedStyle(a).backgroundColor;
  if (b === "rgb(242, 64, 121)") {
  document.getElementById("pers3").style.background = "#3a3e98";
} else{
  document.getElementById("pers3").style.background = "#F24079";
}
var x =document.getElementById("chat");
var y = window.getComputedStyle(x).display;
if (y==="none"){
  document.getElementById("chat").style.display = "flex";}

var x =document.getElementById("chat2");
  var y = window.getComputedStyle(x).display;
  if (y==="flex"){
    document.getElementById("chat2").style.display = "none";
  }
}
function changePerson4() {
  var a = document.getElementById("pers4");
  var b = window.getComputedStyle(a).backgroundColor;
  if (b === "rgb(242, 64, 121)") {
  document.getElementById("pers4").style.background = "#3a3e98";
} else{
  document.getElementById("pers4").style.background = "#F24079";
}
  var x =document.getElementById("chat2");
  var y = window.getComputedStyle(x).display;
  if (y==="none"){
  document.getElementById("chat2").style.display = "flex";}
  var q =document.getElementById("chat");
  var w = window.getComputedStyle(q).display;
  if (w==="flex"){
    document.getElementById("chat").style.display = "none";}
}
function changePerson5() {
  var a = document.getElementById("pers5");
  var b = window.getComputedStyle(a).backgroundColor;
  if (b === "rgb(242, 64, 121)") {
  document.getElementById("pers5").style.background = "#3a3e98";
} else{
  document.getElementById("pers5").style.background = "#F24079";
}
var x =document.getElementById("chat");
var y = window.getComputedStyle(x).display;
if (y==="none"){
  document.getElementById("chat").style.display = "flex";}

var x =document.getElementById("chat2");
  var y = window.getComputedStyle(x).display;
  if (y==="flex"){
    document.getElementById("chat2").style.display = "none";
  }
}
function changePerson6() {
  var a = document.getElementById("pers6");
  var b = window.getComputedStyle(a).backgroundColor;
  if (b === "rgb(242, 64, 121)") {
  document.getElementById("pers6").style.background = "#3a3e98";
} else{
  document.getElementById("pers6").style.background = "#F24079";
}
var x =document.getElementById("chat2");
  var y = window.getComputedStyle(x).display;
  if (y==="none"){
  document.getElementById("chat2").style.display = "flex";}
  var q =document.getElementById("chat");
  var w = window.getComputedStyle(q).display;
  if (w==="flex"){
    document.getElementById("chat").style.display = "none";}
}
function changePerson7() {
  var a = document.getElementById("pers7");
  var b = window.getComputedStyle(a).backgroundColor;
  if (b === "rgb(242, 64, 121)") {
  document.getElementById("pers7").style.background = "#3a3e98";
} else{
  document.getElementById("pers7").style.background = "#F24079";
}
var x =document.getElementById("chat");
var y = window.getComputedStyle(x).display;
if (y==="none"){
  document.getElementById("chat").style.display = "flex";}

var x =document.getElementById("chat2");
  var y = window.getComputedStyle(x).display;
  if (y==="flex"){
    document.getElementById("chat2").style.display = "none";
  }
}

  
 

function personName() {
  var name = [
    'Joanna Hentges', 
    'Jeanelle Kober',
    'Anisha Consolini',
    'Leoma Chadwick',
    'Dori Greaver',
    'Winnifred Hickel',
    'Jovan Hu',
    'Tyra Reed',
    'Deon Courville',
    'Sue Zavala',
    'Dawna Tefft'
   ];

   var text = [
    "The Way Get Started Is To Quit Talking And Begin Doing." ,
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    "Don’t Let Yesterday Take Up Too Much Of Today.",
    "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
    "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
    "We May Encounter Many Defeats But We Must Not Be Defeated.",
    "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do."
  ];
   console.log(text.length) ;

 var randomName =Math.floor(Math.random()* (name.length));
 document.getElementById("personName").innerHTML = name [randomName];
 var randomName =Math.floor(Math.random()* (name.length));
 document.getElementById("personName2").innerHTML = name [randomName];
 var randomName =Math.floor(Math.random()* (name.length));
 document.getElementById("personName3").innerHTML = name [randomName];
 var randomName =Math.floor(Math.random()* (name.length));
 document.getElementById("personName4").innerHTML = name [randomName];
 var randomName =Math.floor(Math.random()* (name.length));
 document.getElementById("personName5").innerHTML = name [randomName];
 var randomName =Math.floor(Math.random()* (name.length));
 document.getElementById("personName6").innerHTML = name [randomName];
 var randomName =Math.floor(Math.random()* (name.length));
 document.getElementById("personName7").innerHTML = name [randomName];
 

 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("personText").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("personText2").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("personText3").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("personText4").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("personText5").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("personText6").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("personText7").innerHTML = text [randomText];

 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble2").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble3").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble4").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble5").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble6").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble7").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble8").innerHTML = text [randomText];
 var randomText = Math.floor(Math.random()* (text.length));
 document.getElementById("bubble9").innerHTML = text [randomText];
 
 var x = Math.floor((Math.random() * 60) + 1);
 document.getElementById("time-elapsed3").innerHTML = x + "m";
 var x = Math.floor((Math.random() * 60) + 1);
 document.getElementById("time-elapsed4").innerHTML = x + "m";
 var x = Math.floor((Math.random() * 60) + 1);
 document.getElementById("time-elapsed5").innerHTML = x + "m";
 var x = Math.floor((Math.random() * 60) + 1);
 document.getElementById("time-elapsed6").innerHTML = x + "m";
 var x = Math.floor((Math.random() * 60) + 1);
 document.getElementById("time-elapsed7").innerHTML = x + "m";
 var x = Math.floor((Math.random() * 60) + 1);
 document.getElementById("time-elapsed8").innerHTML = x + "m";
 var x = Math.floor((Math.random() * 60) + 1);
 document.getElementById("time-elapsed9").innerHTML = x + "m";
 var x = Math.floor((Math.random() * 60) + 1);

}


