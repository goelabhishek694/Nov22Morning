// click on reply -> input box should appear 
// when  submit -> reply should be converted as my comment 

// every comment -> reply to its children 
// every reply -> sub -reply 

const container = document.querySelector(".container");
container.addEventListener("click", function(e){
    const targetEle = e.target;
    console.log(targetEle);
    const isReply = targetEle.classList.contains("reply");
    const isSubmit = targetEle.classList.contains("submit");
    if(isReply){
        // ->create an input box and submit button
        // <div class="comment-reply-container">
        //         <input type="text" placeholder="write your comment">
        //         <button class="submit">submit</button>
        //     </div>
        createReplyInput(e);
    }else if (isSubmit){
        createComment(e);
    }
})

function createReplyInput(){
    //create a div 
    // create input 
    // create button 

    //add attributes 

    //append the children
}
