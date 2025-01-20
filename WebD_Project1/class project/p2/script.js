
document.addEventListener("DOMContentLoaded",(event)=>{
    console.log("loaded")
    const input_val=document.getElementById("inputId")
    const button_val=document.getElementById("buttonId")
    const ul_val=document.getElementById("ulId")

    console.log(input_val)
    console.log(button_val)
    console.log(ul_val)

    button_val.addEventListener("click",()=>{
        const tasktext=input_val.value.trim()
        console.log(tasktext)
        
        const meme=document.createElement("img")
        meme.src="https://media1.tenor.com/m/j1YKodSvKwAAAAAd/puneet-superstar-lord-puneet.gif";
        meme.title="nhi mila "
        meme.width="200"
        meme.height="350"

        const meme2=document.createElement("img")
        meme2.src="https://media.tenor.com/jc6rLoN3gWEAAAAi/g%C3%B6zl%C3%BCkl%C3%BC-kedi.gif";
        meme2.title="nhi mila "
        meme2.width="180"
        meme2.height="180"

        

        if(tasktext===""){
            alert("Enter your task")
            return;
        }
        const listAppend=document.createElement("li")
        listAppend.textContent=tasktext+" "
        const delButtonAppend=document.createElement("button")
        delButtonAppend.classList.add("btn", "btn-danger", "ml-3")
        delButtonAppend.textContent="Delete"
        // delButtonAppend.style.color="#7b2b4f"
        // delButtonAppend.style.color="#453F78"
        delButtonAppend.addEventListener("click",()=>{
            
            ul_val.removeChild(listAppend)  
            ul_val.removeChild(meme)       
            ul_val.appendChild(meme2);
            
            removeElementAfterTime(meme2, 3000);
        })


        


        function removeElementAfterTime(meme, timeInMilliseconds) {
            setTimeout(() => {
                if (meme) {
                    meme.remove();
                    // console.log(`Element with ID '${elementId}' has been removed.`);
                } else {
                    console.log(`Element with ID  not found.`);
                }
            }, timeInMilliseconds);
        }
        
        removeElementAfterTime(meme, 3000);

        listAppend.appendChild(delButtonAppend)
        ul_val.appendChild(listAppend)
        ul_val.appendChild(meme);
        // ul_val.appendChild(memevid)
        input_val.value="";

        
    })


})