
            //Nav icon code starts

let manuIcon = document.getElementById("manu-icon");
let manuBar = document.getElementById("nav-id");

manuIcon.addEventListener("click", function(){
    console.log("click")
    if(manuBar.className === "hide-navbar"){
        manuBar.classList.remove("hide-navbar")
    }else{
        manuBar.classList.add("hide-navbar")
    }
})


          //Nav icon code starts



    // counter section starts

let displayCounter = document.querySelectorAll(".counter");


displayCounter.forEach(item=>{
    let start = 0;
    // here use parseInt as without parseInt value will be strint whereas start value is number;
    let endValue = parseInt(item.getAttribute('data'));

   let count = setInterval(() => {
      item.textContent = ++start;

      if(start === endValue){
        clearInterval(count)
      }
    }, 0);

    
})



// counter section Ends


// project section starts

let all = document.querySelector(".all");
let vector = document.querySelector(".vector");
let raster = document.querySelector(".raster");
let ui = document.querySelector(".ui");
let painting = document.querySelector(".painting");


let image1 = document.querySelector(".row-1");
let image2 = document.querySelector(".row-2");
let image3 = document.querySelector(".row-3");
let image4 = document.querySelector(".row-4");
let image5 = document.querySelector(".row-5");
let image6 = document.querySelector(".row-6");


all.addEventListener('click', function(key){
    key.preventDefault(key);
    image1.style.display = "block";
    image2.style.display = "block";
    image3.style.display = "block";
    image4.style.display = "block";
    image5.style.display = "block";
    image6.style.display = "block";
});

vector.addEventListener('click', function(key){
    
    key.preventDefault(key)

    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "block";
    image6.style.display = "none";
})

raster.addEventListener('click', function(key){
    
    key.preventDefault(key)

    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "block";
})

ui.addEventListener('click', function(key){
    
    key.preventDefault(key)

    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
})

painting.addEventListener('click', function(key){
    
    key.preventDefault(key)

    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
    image5.style.display = "none";
    image6.style.display = "none";
})


// project section Ends


// Footer section starts


let rightArrow = document.querySelector('.fa-arrow-right');
let display = document.getElementById('demo')

rightArrow.addEventListener('click', function(){
    display.style.display = "block"
})


// Footer section Ends
