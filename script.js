const givenInput = document.querySelector('.inputs');
const tipPerson = document.querySelector('.tip-per-person span.tip-amount');
const totalAmount = document.querySelector('.total span.total-amount');
const err = document.querySelector('.calculator-box .content .inputs .err');

const data = {
    bill: 0,
    tip: 0,
    person: 1
}

const isValid = function(input){
    return (/^\d+$/).test(input);
}

givenInput.addEventListener('change',function(e){
    if(isValid(e.target.value)){

        err.style.display = 'none';

        data[e.target.name] = parseFloat(e.target.value);

        const tip = (data.bill * data.tip)/100;

        let total = data.bill + tip;
        total = total/data.person;
        total = total.toFixed(2);
        
        totalAmount.textContent = total;

        let tip_per_person = tip/data.person;
        tip_per_person = tip_per_person.toFixed(2);

        tipPerson.textContent = tip_per_person;
    }
    else{
        err.style.display = 'block';
    }
});

/* givenInput.addEventListener('change',function(e){
    console.log(e.target.value);
}) */

