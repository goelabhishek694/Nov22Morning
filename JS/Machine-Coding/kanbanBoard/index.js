const addTaskBtn = document.querySelector(".add_btn");
const modalCont = document.querySelector(".modal_cont");
const modalPriorityColorCont = document.querySelector(".priority_color_cont");
const modalTextArea = modalCont.getElementsByClassName("textarea_cont")[0];
const mainCont =  document.querySelector(".main_cont");
const priorityColors = ["pink", "blue", "purple", "green"];
const toolBoxPriorityColorCont = document.querySelector(".toolbox_priority_cont");
const deleteBtn = document.querySelector(".remove_btn");
let allTickets = localStorage.getItem("tickets") || [] ;
let isFromLS = false;
if(typeof allTickets == "string" ) {
    allTickets =  JSON.parse(allTickets);
    populateUI(); //display all the tickets
}

function populateUI(){
    isFromLS = true;
    //dsiplay ticket on ui
    for(let i=0;i<allTickets.length;i++){
        let {id,color,content} = allTickets[i];
        createTicket(color, id, content);
    }
    isFromLS = false;
}
//sort tickets by priority
toolBoxPriorityColorCont.addEventListener("click", function(e){
    if(e.target == e.currentTarget) return;
    const priorityColorTicketsWanted = e.target.classList[1];
    console.log(priorityColorTicketsWanted);
    const allTickets = mainCont.querySelectorAll(".ticket_cont");
    allTickets.forEach(ticket => {
        if(ticket.children[0].classList[1] == priorityColorTicketsWanted){
            ticket.style.display = "block"
        }else ticket.style.display = "none"
    });
})

//get all tickets
toolBoxPriorityColorCont.addEventListener("dblclick", function(e){
    const allTickets = mainCont.querySelectorAll(".ticket_cont");
    allTickets.forEach(ticket => {
            ticket.style.display = "block"
    });
})

addTaskBtn.addEventListener("click",function(){
    modalCont.style.display = "flex";
})

deleteBtn.addEventListener("click", function(){
    if(deleteBtn.classList[1]){
        deleteBtn.classList.remove("red")
    }else{
        deleteBtn.classList.add("red")
    }
})


modalPriorityColorCont.addEventListener("click",function(e){
    if(e.target == e.currentTarget) return;
    
    let selectedPriority = e.target;
    let allPriorityColors = modalPriorityColorCont.children;
    
    for(let i=0;i<allPriorityColors.length;i++){
        allPriorityColors[i].classList.remove("active")
    }
    selectedPriority.classList.add("active");
    
})

modalCont.addEventListener("keypress",function(e){
    if(e.key != "Enter") return;
    const content = modalTextArea.value;
    const priorityColorEle = modalPriorityColorCont.getElementsByClassName("active")[0];
    const priorityColor = priorityColorEle.classList[1];
    modalCont.style.display = "none";
    var uid = new ShortUniqueId().rnd();
    createTicket(priorityColor, uid, content)  
    
    //reset modal
    modalTextArea.value =""  
    priorityColorEle.classList.remove("active");
    modalPriorityColorCont.getElementsByClassName("blue")[0].classList.add("active");
})

function createTicket(priorityColor, uid, content){
    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket_cont");
    ticketContainer.innerHTML = `<div class="ticket_color ${priorityColor}"></div>
            <div class="ticket_id">#${uid}</div>
            <div class="ticket_area">${content}</div>
            <div class="lock_unlock">
                <i class="fa-solid fa-lock"></i>
            </div>`
    
    mainCont.appendChild(ticketContainer);
    const ticketArea = ticketContainer.querySelector(".ticket_area");
    const lockBtn = ticketContainer.querySelector(".lock_unlock");
    const priorityColorEle = ticketContainer.querySelector(".ticket_color");
    addLockUnlock(ticketArea, lockBtn);
    addPriorityChangeListeners(priorityColorEle, priorityColor)
    deleteListeners(ticketContainer);

    if(isFromLS) return;
    let ticketObj = {
        id: uid,
        color: priorityColor,
        content: content,
    }
    allTickets.push(ticketObj);
    updateLocalStorage();
}

function addLockUnlock(ticketArea, lockBtn){
    let isLocked = true;
    lockBtn.addEventListener("click", function(){
        if(isLocked){
            lockBtn.children[0].classList.remove("fa-lock");
            lockBtn.children[0].classList.add("fa-unlock");
            ticketArea.setAttribute("contenteditable", true);
        }else{
            lockBtn.children[0].classList.add("fa-lock");
            lockBtn.children[0].classList.remove("fa-unlock");
            ticketArea.setAttribute("contenteditable", false);
        }
        isLocked = !isLocked;
    })
}

function addPriorityChangeListeners(priorityColorEle){
    priorityColorEle.addEventListener("click", function(){
        let currPriorityColor = priorityColorEle.classList[1];
        let idx = priorityColors.indexOf(currPriorityColor);
        const nextPriorityColor = priorityColors[(idx+1)%priorityColors.length];
        console.log(nextPriorityColor);
        priorityColorEle.classList.remove(currPriorityColor);
        priorityColorEle.classList.add(nextPriorityColor);
    })
}

function deleteListeners(ticketContainer){
    ticketContainer.addEventListener("click", function(){
        if(deleteBtn.classList[1]){ //delete  my ticket
            ticketContainer.remove();
        }
    })
}

function updateLocalStorage(){
    localStorage.setItem('tickets', JSON.stringify(allTickets));
}