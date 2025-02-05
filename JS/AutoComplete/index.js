import getCountries from "./fetchData.js"

const inputBox = document.querySelector(".search_input");
const suggestionBox = document.querySelector(".suggestion_box");

const handleSearch = async keyword => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map(countryObj => countryObj.name.common);
    return countryNameArr
}
const handleSuggestion = async (e) => {
    console.log(e.target.value);
    let keyword = e.target.value;
    const countryNameArr = await handleSearch(keyword);
    console.log(countryNameArr);
    
    populateSuggestionBox(countryNameArr);
    
}

// inputBox.addEventListener("input", handleSuggestion);

function populateSuggestionBox(countryNameArr){
    if(countryNameArr.length > 0){
        //suggestionBox to be visible 
        suggestionBox.classList.add("visible");
    }else {
        //hide the suggestion box
        suggestionBox.classList.remove("visible");
    }

    //to remove the prev results
    suggestionBox.innerHTML="";

    const fragment = document.createDocumentFragment();

    countryNameArr.forEach((country) => {
        const li = document.createElement("li");
        li.innerText = country;
        fragment.appendChild(li);
    })

    suggestionBox.appendChild(fragment);

}


function debounce(fn, delay = 300){
    let timerId;
    return function(...args){
        if(timerId){
            //clear the prev timerId
            console.log("i am reseting");
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            //api call
            fn(...args)
        }, delay)
    }
}

inputBox.addEventListener("input", debounce(handleSuggestion));

