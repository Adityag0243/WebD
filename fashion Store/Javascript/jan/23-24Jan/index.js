const taskDesciption = document.querySelector('#task');
const ol = document.querySelector("#olist");
const btn = document.querySelector('#addBtn');
const priority = document.querySelector('#priority');

btn.addEventListener(
    'click',
    ()=>{

        taskValue = taskDesciption.value.trim();
        priValue  = priority.value;

        if (!taskValue || !priValue) {
            alert("Please enter a task.");
            return;
        }

        const delbtn = document.createElement('button');
        delbtn.textContent = 'Delete';

        const prbtn = document.createElement('button');
        prbtn.textContent = priority.value;

        const li = document.createElement('li');
        
        li.textContent = taskValue;
        li.appendChild(prbtn);
        li.appendChild(delbtn);
        
        ol.appendChild(li);
        taskDesciption.value = '';
        

        // delbtn.addEventListener('click',
        //     ()=>{
        //         ol.removeChild(li);
        //     }
        // );

        // this will work......
        delbtn.onclick = function(){
            li.remove();
        }
});