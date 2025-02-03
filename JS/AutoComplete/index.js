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

inputBox.addEventListener("input", handleSuggestion);


