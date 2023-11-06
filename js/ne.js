let dark = document.querySelector(".dark");
let hany = document.querySelector(".hany");
let body = document.querySelector('body')
let sun = document.getElementById('sun');
dark.addEventListener('click',function(){
 body.classList.toggle("active");
      if(body.classList.contains('active')){
        document.querySelector(".hany").style.border="7px solid #7970b6"; 
        dark.style.background="#1b233d"; 
        sun.classList.remove('fa-sun');
        sun.classList.add('fa-moon');
        rocket.style.background="#1b233d";
    }else{
        document.querySelector(".hany").style.border="7px solid white"
        dark.style.background="white";
        sun.classList.add('fa-sun');
        sun.classList.remove('fa-moon')
        rocket.style.background="white";
    }

})
let rocket = document.querySelector(".rocket");  


window.onscroll =function(){
    console.log(this.scrollY)
    if(this.scrollY  <= 1500){
        rocket.classList.add("show");
    }else{
        rocket.classList.remove("show");
    }
}

rocket.onclick= function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}

function rocketAll(){
    rocket.style.animation="rocket 2s infinite";
}
rocketAll();

  let btn = document.querySelector(".dark");
function click(){
    document.body.classList.add="";
}

btn.addEventListener('click',click);
// 
let text = "Front-end Developer";

let index = 1; 

function textType(){
    document.getElementById("textValue").textContent= text.slice(0,index);
    
    if(index>text.length){
        index=1;
    
    }else{
        index++;
    }
}
setInterval(function(){
    textType();
},200)
// 
// 

let cover1 = document.querySelector(".cover1");


window.onload=function(){
    cover1.style.animation='cover 2s infinite';
}
// 

let section4 = document.querySelector(".section4");
let allSpan= document.querySelectorAll(".progress span");

window.onscroll =function(){
    if(window.scrollY>=section4.offsetTop ){
       allSpan.forEach((e)=>{
        e.style.width=e.dataset.width;

       })
    }
}

// 