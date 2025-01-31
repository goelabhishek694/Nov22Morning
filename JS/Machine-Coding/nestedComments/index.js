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

function createComment(e){
    const fragment = document.createDocumentFragment();
    const comment = e.target.parentNode.children[0].value;
    //create a div 
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class","comment-card");
    commentContainer.innerHTML = `<h3>${comment}</h3>
                <div class="reply">Reply</div>`

    //add this comment box inside the comment-container on which we clicked on reply btn
    let commentReplyBox = e.target.parentNode;
    let parentComment = commentReplyBox.parentNode;
                                //addd          //remove
    parentComment.replaceChild(commentContainer,commentReplyBox);

    // this method is going to scan for .comment-card closest to it , starting from e.target it moves upward if.e. toward root .
    // parentComment = e.target.closest(".comment-card")

}

function createReplyInput(e){
    const fragment = document.createDocumentFragment();
    //create a div 
    const replyContainer = document.createElement("div");
    // create input 
    const input = document.createElement("input");
    // create button 
    const button = document.createElement("button");

    //add attributes 
    replyContainer.setAttribute("class","comment-reply-container");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","write your comment");
    button.setAttribute("class","submit");
    button.innerText = "Submit";

    //append the children
    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);

    e.target.parentNode.appendChild(fragment);
    
}
