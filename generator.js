var tab= new Array();
var tab1= new Array();

var lastOne;
var lastOne1;

var color1= document.getElementById('color1');
var color2=document.getElementById('color2');
var container= document.getElementById('container');
var text=document.getElementById('text');
console.log(text.value);

color1.addEventListener("input",function(){
    tab.push(color1.value);
      lastOne= tab[tab.length-1];
     console.log(lastOne);
    // container.style.background=tab[tab.length-1];
    container.style.backgroundImage=`linear-gradient(${lastOne}, ${lastOne1})`;
    text.value=`linear-gradient(${lastOne}, ${lastOne1})`;
    });

    color2.addEventListener("input",function siema(){
        tab1.push(color2.value);
          lastOne1= tab1[tab1.length-1];
         console.log(lastOne1);
         //container.style.background=tab1[tab1.length-1];
         container.style.backgroundImage=`linear-gradient(${lastOne}, ${lastOne1})`;
         text.value=`linear-gradient(${lastOne}, ${lastOne1})`;
        });



