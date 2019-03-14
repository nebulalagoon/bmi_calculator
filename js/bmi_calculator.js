//funkcija za racunanje bmi-ja
const bmi = (m,v) => {
  return m/(v*v); 
 }


//callback funkcija
function calculate() {

 const d = document.querySelector('body'); //micanje starog rezultata
 const r = d.querySelector('.result');

if (r) {
       d.removeChild(r);
   };

 let massInput = document.querySelector('#mass_inp').value;
 let heightInput = document.querySelector('#height_inp').value/100;
 let ageInput = document.querySelector('#age_inp').value;

 if ((massInput <= 0) || (heightInput <= 0)) {
   const err = document.createElement('section'); //dodavanje greške
   err.textContent = 'Please enter correct information.';
   err.className = 'result';
   err.id = 'error';
   document.body.appendChild(err);
 } else if (ageInput < 18) {
  const warning = document.createElement('section');
  warning.textContent = 'BMI is not used to assess the body weight of children and adolescents under 18.';
  warning.className = 'result';
  warning.id = 'warning';
  document.body.appendChild(warning);
 } else {
   let c = bmi(massInput, heightInput);
   const res = document.createElement('section'); //dodavanje novog elementa
   res.textContent = 'Your BMI is '+ c.toFixed(1) +'.';
   res.className = 'result';
   document.body.appendChild(res);
 }

};


//gumb - event listener
document.querySelector('#run').addEventListener('click', calculate, false); 