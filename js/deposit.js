//1: add even listener to the deposit button
//2. get deposit amount from the deposit input filed 
//2.5 Convert string deposit amount to a number type
// 3. Clear the deposit input field after getting the value 
// 4. Get the previous deposit total
//5. Calculate new deposit total and set the value to the deposit total.

//step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const deposiField =document.getElementById('deposit-field');
    const newDepositAmountString = deposiField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //step -3 
    deposiField.value = '';

    //step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    //step -5 

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = newDepositTotal;

    // step -6

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    //step -7
    newBalanceTotal = previousBalance + newDepositAmount;

    balanceElement.innerText = newBalanceTotal;

     
})