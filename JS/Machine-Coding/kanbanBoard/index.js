const addTaskBtn = document.querySelector(".add_btn");
const modalCont = document.querySelector(".modal_cont");
const modalPriorityColorCont = document.querySelector(".priority_color_cont");

addTaskBtn.addEventListener("click",function(){
    modalCont.style.display = "flex";
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

