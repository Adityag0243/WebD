import fetch from "node-fetch";



// async await a wrapper around promises.....(syntax sugar to look things easier/ readility)....

async function fetchdata() {
    try{
        const fetchRespo = await fetch("https://jsonplaceholder.typicode.com/users/");
        const user = await fetchRespo.json();
        user.forEach(data => {
            console.log(data);
        });
    }
    catch(err){
        console.log(err);
    }
}

fetchdata();
