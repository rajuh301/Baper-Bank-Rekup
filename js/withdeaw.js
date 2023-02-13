document.getElementById('btn-withdraw').addEventListener('click', function(){


    const withdeawShow = document.getElementById('withdraw-total');
    const withdeawShowString = withdeawShow.innerText;
    const withdeawShowConvert = parseFloat(withdeawShowString);

 
//------------------------------------

const balanceTotalElement = document.getElementById('balance-total');
const balanceConvert = balanceTotalElement.innerText;
const balanceConvertTotal = parseFloat(balanceConvert);




// -----------------------------------

    const withdeawField = document.getElementById('withdeaw-field');
    const withdeawBlanceString = withdeawField.value;
    const withdeawConvert = parseFloat(withdeawBlanceString);

    withdeawField.value = '';
// ------------------ Calculate area------------------

if(balanceConvertTotal < withdeawConvert){
    alert('your balance is unification')
    return;
}

const totalBalance = balanceConvertTotal - withdeawConvert;
console.log(totalBalance)
balanceTotalElement.innerText = totalBalance;





// ------------------------------------------

    const withdeawTotal = withdeawShowConvert + withdeawConvert;
    
    withdeawShow.innerText = withdeawTotal;



})