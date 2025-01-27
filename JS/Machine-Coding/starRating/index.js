const starContainer = document.querySelector(".star_container");
let starNumber;
starContainer.addEventListener("click", function(e){
    starNumber = e.target.getAttribute("idx");
    let currentClass = e.target.classList[0];
    if(currentClass == "star"){
        console.log(starNumber);
        fillStars(starNumber)
        updateRating(starNumber)
    }
})

starContainer.addEventListener("mouseover", function(e){
    console.log("helo", e.target);
    let starNumber = e.target.getAttribute("idx");
    let currentClass = e.target.classList[0];
    if(currentClass == "star"){
        console.log(starNumber);
        fillStars(starNumber)
    }
})

starContainer.addEventListener("mouseout", function(e){
    let currentClass = e.target.classList[0];
    if(currentClass == "star"){
        console.log("mouseleave");
        fillStars(0)
        fillStars(starNumber)
    }
})

function fillStars(num){
    let allStars = starContainer.children;
    //turn all to grey
    for(let i=0;i<5;i++){
        let star = allStars[i];
        star.style.color = "gray";
    }
    //colour stars upto this number 
    for(let i=0;i<num;i++){
        let star = allStars[i];
        star.style.color = "yellow";
    }
}

function updateRating(num){
    let ratingEle = document.getElementById("rating");
    ratingEle.innerText = num;
}