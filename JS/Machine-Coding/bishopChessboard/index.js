window.addEventListener("load", function(){
    let table = document.querySelector("#table");
    for(let ri = 0; ri < 8 ; ri++){
        let tr = document.createElement("tr");
        let white = ri % 2 == 0 ? true : false;
        for(let ci = 0; ci < 8; ci++){
            let cell = document.createElement("td");
            cell.setAttribute("class", `box ${white == true ? "white" : "black"}`);
            cell.innerText = `${ri}-${ci}`;
            white = !white;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
})