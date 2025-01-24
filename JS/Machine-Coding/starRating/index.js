const starContainer = document.querySelector(".star_container");

starContainer.addEventListener("click", function(e){
    let starNumber = e.target.getAttribute("idx");
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
    console.log("hi", e.target);
    
    let starNumber = e.target.getAttribute("idx");
    let currentClass = e.target.classList[0];
    if(currentClass == "star"){
        console.log("mouseleave");
        // console.log(starNumber);
        fillStars(0)
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