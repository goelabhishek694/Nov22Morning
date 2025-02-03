const url = "https://restcountries.com/v3.1/name/";

async function getCountries(keyword) {
  try {
    let resp = await fetch(url+keyword);
    if(resp.status == 404){
        return []
    }
    let data = await resp.json();
    return data;
  } catch (err) {
    console.log("in catch");
    console.log("hello", err);
  }
}

// let d = await getCountries("aus");
// console.log(d);



export default getCountries