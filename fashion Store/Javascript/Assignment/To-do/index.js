

// const add_task = document.querySelector("#addTask");
// const task_list = document.querySelector("#show_task_list");


// add_task.addEventListener(
//     'click',
//     ()=>{
//         let task = document.getElementById("addTask").value.trim();
//         if(task === '') return;
//         const li = document.createElement('li');
//         const span = document.createElement('span');
//         span.textContent = task;
//         li.appendChild(span);
//         const delBtn = document.createElement('button');
//         delBtn.textContent = 'Delete';
//         delBtn.classList.add('btn btn-danger');
//         li.appendChild(delBtn);

//         delBtn.addEventListener('click',()=>{
//             task_list.removeChild(li);
//         });
//         task_list.appendChild(li);
//         document.getElementById("#addTask").value = "";

//     }
// );

const add_task = document.querySelector("#addTask");
const task_list = document.querySelector("#show_task_list");

add_task.addEventListener(
    'click',
    () => {
        let task = document.getElementById("addTask").value.trim(); // Remove the # from getElementById
        if (task === '') return;

        // Create the list item and span for the task
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task;
        li.appendChild(span);

        // Create the delete button and add styles
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.classList.add('btn', 'btn-danger');
        li.appendChild(delBtn);

        // Add event listener for delete button
        delBtn.addEventListener('click', () => {
            task_list.removeChild(li);
        });

        // Add the new task to the list
        task_list.appendChild(li);

        // Clear the input field after adding the task
        document.getElementById("addTask").value = "";
    }
);

