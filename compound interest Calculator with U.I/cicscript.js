//function to calculate
function calculate(){
    const amountinput = document.getElementById("amount");
    const rateinput = document.getElementById("rate");
    const timeinput = document.getElementById("time");
    const total = document.getElementById("total");



    let principal = Number(amountinput.value);
    let interest = Number(rateinput.value / 100);
    let years = Number(timeinput.value);

    if(principal < 0 || isNaN(principal))
    {
        principal = 0;
        amountinput.value = 0;
    }


    if(interest < 0 || isNaN(interest))
    {
        interest = 0;
        rateinput.value = 0;
    }


    if(years < 0 || isNaN(years))
    {
        years = 0;
        timeinput.value = 0;
    }
    const totalamount = principal * Math.pow((1 + interest/ 1), 1 * years);
    
    total.textContent = totalamount.toLocaleString(undefined, {style:"currency", currency: "USD"});
}