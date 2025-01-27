function change_col(){
    // ele = document.getElementById("box").innerHTML = "Something else";
    // document.getElementById("inp").value = "Something else";
    const ele = document.querySelector("#inp");
    ele.value = "Something else";
}

function qsByClassFirst(){
    document.querySelector(".movie").style.color  = 'green';
}
function qsByClassAll(){
    const elements = document.querySelectorAll(".movie");
    // as elements is not one element we can't use directly .style.color as qsByClassFirst() fn
    elements.forEach(ele => {
        ele.style.color = 'red';
        ele.style.fontSize = '45px';
    });       
}


const div_ele = document.getElementById("div_id");

div_ele.setAttribute('tabindex','0');

div_ele
    .addEventListener('mouseenter',
        ()=>{
            document.getElementById("div_id").innerHTML = "Mouse enter in the div box";
            document.getElementById("div_id").style.color = "red";
        }
    );


div_ele
    .addEventListener('mouseleave',
        ()=>{
            document.getElementById("div_id").innerHTML = "Mouse leave the div box";
            document.getElementById("div_id").style.color = "green";
        }
    );


