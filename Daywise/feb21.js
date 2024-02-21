//********** each method function***********/////////////////////////
//***1.UPI */

function upi(amount,total_balance){
    let UPI_limit=100000;
    console.log("Scan QR code or enter upi id.");
                    let UPI_ID="XYZ@falane";
                    console.log(UPI_ID);
                    if(UPI_ID){        //we will check whether entered id is valid or not from data base or slicing of array
                        if(amount<=total_balance){
                            if(amount<=UPI_limit){
                                total_balance-=amount;
                                console.log("Money transfer successful , current balance is: " + total_balance);
                            }else{
                                console.log("Entered amount is more than transfer limit");
                            }
                        }else{
                            console.log("Low Balance of "+total_balance+" , Aur kamaao..");
                        }
                    }
}

//*********2.TAPTOPAY */


function tap2pay(amount,total_balance){
    let tap2pay_limit=100000;
    console.log("Scanning card detail");
                    let Card_ID="4579 3214 8765"; //storing as string
                    console.log(Card_ID);
                    if(Card_ID){        //verification
                        if(amount<=total_balance){
                            if(amount<=tap2pay_limit){
                                total_balance-=amount;
                                console.log("Money transfer successful , current balance is: " + total_balance);
                            }else{
                                console.log("Entered amount is more than transfer limit");
                            }
                        }else{
                            console.log("Low Balance of "+total_balance+"  , Aur kamaao..");
                        }
                    }
}

//**********3.BANK TRANSFER */


function bank_transfer(amount,total_balance){
    let BankTransfer_limit=1000000;
    console.log("Enter payee's bank detail");
                    let Acount_num="4579 3214 8765"; //storing as string
                    let ifsc="SBIN0000813"
                    console.log("Ac no: ",Acount_num," ifsc: ",ifsc);
                    if(Acount_num && ifsc){        //verification of detail by further knowledge (may be from backend data)
                        if(amount<=total_balance){
                            if(amount<=BankTransfer_limit){
                                total_balance-=amount;
                                console.log("Money transfer successful , current balance is: " + total_balance);
                            }else{
                                console.log("Entered amount is more than transfer limit");
                            }
                        }else{
                            console.log("Low Balance of "+total_balance+" , Aur kamaao..");
                        }
                    }
}

/////////////////////////////*********** REAL WALA FUNCTION**************////////////////////////

function bank(total_balance,check_balance,withdraw){
    
    if(check_balance=="Y"){
        console.log("Current Balance: "+total_balance);
    }
    if(withdraw=='Y'){
        let foreign_transfer="N";
        let within_India_transfer="Y";

        if(within_India_transfer=="Y"){

            let UPI="Y";                                                       //*****METHOD OF PAYMENT */
            let TapToPay="N";              //Overwrite any one as Y and others as N
            let BankTransfer="N";


            console.log("Type of Transaction you have chosen : ");
            if(UPI=="Y"){
                console.log("UPI");
                console.log("Enter transfer amount");
                let amount=1500;
                console.log(amount);
                upi(amount,total_balance);
            }

            else if(TapToPay=="Y"){
                console.log("TapToPay");
                console.log("Enter transfer amount");
                let amount=2500;
                console.log(amount);
                tap2pay(amount,total_balance);
            }
            
            else if(BankTransfer=="Y"){
                console.log("BankTransfer");
                console.log("Enter transfer amount");
                let amount=5500;
                console.log(amount);
                bank_transfer(amount,total_balance);
            }else{
                console.log("Please select method of transaction");
            }
        }else{
            let UPI="Y";
            if(UPI=="Y"){
                console.log("Is respective foreign country allow UPI transfer? Enter Y or N: ");
                let check = "Y";     //Y if allowed otherwise N
                if(check =="Y"){
                    console.log("Enter transfer amount");
                    let amount=11500;
                    console.log(amount);
                    upi(amount,total_balance);
                }else{
                    console.log("UPI not allowed in this country Please select other method.");
                }
            }else{
                console.log("Sorry,Baki mode active nhi hai");
            }
        }
        
    }
}





let total_balance=10000;
let check_balance="Y";        //BEFORE TRANSFER BALANCE 
let withdraw='Y';
//FUNCTION ARE NOT RETURNING ANYTHING AS IT IS PRINTING ON THE BASIS OF DIFFERENT DETAIL
// one mistake is that i have created all method in of payment in function itself it should be here

bank(total_balance,check_balance,withdraw);