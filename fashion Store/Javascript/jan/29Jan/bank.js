

class InsufficientBalanceError extends Error{
    constructor(message){
        super(message);
        this.name = "Low Balance";
    }
}


const currentBalance = document.querySelector("#balanceId");
const withrawalBalance =  document.querySelector("#withdrawId");

const messageBox = document.querySelector("#messageBox");
const btn = document.querySelector("#btnSubmit");

btn.addEventListener("click",()=>{
    try{
        if(currentBalance.value < withrawalBalance.value){
            throw new InsufficientBalanceError("Your balance is low, add balance");
        }
        currentBalance.value -= withrawalBalance.value;
        messageBox.textContent = `${withdrawalBalance.value} Rs debited from main account, current balance is ${currentBalance.value}`;        // console.log(withrawalBalance+ " Rs  debited from main account, current balance is "  + currentBalance);
    
    }
    catch(err){
        console.log(err.name);
        console.log(err.message);
        messageBox.textContent = err.message;
    }
})


