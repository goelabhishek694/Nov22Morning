//select teh target node to observe
const targetNode = document.getElementById("target");

// callback function to execute when mutations are observed
const mutationCallback = (mutationList) => {
    console.log(mutationList);
    mutationList.forEach(mutation => {
        if(mutation.type == "childList"){
            console.log("Text changed to ", targetNode.textContent);
            alert("mutation detected");

        }
    })
};

//create a mutation observer instance 
const observer = new MutationObserver(mutationCallback);

//configure what we want to observe
observer.observe(targetNode, {childList:true, attributes: true });

function changeText(){
    targetNode.textContent = "Text Updated"
}

function changeColor(){
    targetNode.style.color = targetNode.style.color == "red" ? "black" : "red";
}

//observe.disconnect




const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction("users", "readwrite");
    let store = transaction.objectStore("users");
    store.add({ id: 1, name: "JohnDoe", age: 30 });
};

let transaction = db.transaction("users", "readonly");
let store = transaction.objectStore("users");
let getRequest = store.get(1);

getRequest.onsuccess = function() {
    console.log(getRequest.result); // { id: 1, name: "JohnDoe", age: 30 }
};

