const billAmt = document.querySelector("#bill-amt");
const cashAmt = document.querySelector("#cash-amt");
const chkBtn = document.querySelector("#chk-btn");
const msgArea = document.querySelector("#msg-area");
const noOfNotes = document.querySelectorAll(".no-of-notes");//for selecting all elements of same class

const availableNotes = [2000, 500, 100, 50, 20, 10, 5];

chkBtn.addEventListener("click", () => {

    // console.log(cashAmt.value, billAmt.value);

    if(billAmt.value > 0){
        if(cashAmt.value >= billAmt.value)//>= operator works opposite for some reason
        {
            // console.log(cashAmt.value <= billAmt.value);
            // msgArea.innerText = "ok";
            const amountToBeReturned = cashAmt.value - billAmt.value;
            calculateChange(amountToBeReturned);
        }
        else
        {
            // console.log(cashAmt.value <= billAmt.value); 
            msgArea.innerText = "Do you want to wash dishes?";
        }
    }
    else{
        msgArea.innerText = "Please enter the correct bill amount";
    }
});

function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length ; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


