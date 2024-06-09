

const target=document.createElement("button");
document.body.appendChild(target);

const btn=document.querySelector("button");
btn.textContent="Click Here";
btn.style.fontSize="25px";
btn.style.color="white"
btn.style.border="2px solid #041733";
btn.style.borderRadius="5px";
btn.style.height="45px";
btn.style.width="150px";
btn.style.backgroundColor="#063469";
document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";


btn.addEventListener("click",function(){           // immediately envoke function
    let num="#"+ Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor=num;
})