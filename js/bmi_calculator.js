//bmi function
const bmi = (m,v) => {
  return m/(v*v); 
 }

//bmi conditions

const bmiF = [
  { 'age': 2, 
    bmiMin: 14.4,
    bmiNorm: 18,
    bmiMax: 19.1,
  },
  { 'age': 3, 
  bmiMin: 14,
  bmiNorm: 17.2,
  bmiMax: 18.3,
  },
  { 'age': 4, 
  bmiMin: 13.8,
  bmiNorm: 16.8,
  bmiMax: 18,
  },
  { 'age': 5, 
  bmiMin: 13.6,
  bmiNorm: 16.8,
  bmiMax: 18.2,
  },
  { 'age': 6, 
  bmiMin: 13.4,
  bmiNorm: 17.1,
  bmiMax: 18.8,
  },
  { 'age': 7, 
  bmiMin: 13.4,
  bmiNorm: 17.6,
  bmiMax: 19.6,
  },
  { 'age': 8, 
  bmiMin: 13.5,
  bmiNorm: 18.3,
  bmiMax: 20.6,
  },
  { 'age': 9, 
    bmiMin: 13.8,
    bmiNorm: 19,
    bmiMax: 21.8,
  },
  { 'age': 10, 
    bmiMin: 14,
    bmiNorm: 20,
    bmiMax: 23,
  },
  { 'age': 11, 
    bmiMin: 14.2,
    bmiNorm: 20.8,
    bmiMax: 24.1,
  },
  { 'age': 12, 
    bmiMin: 14.8,
    bmiNorm: 21.7,
    bmiMax: 25.2,
  },
  { 'age': 13, 
    bmiMin: 15.3,
    bmiNorm: 22.6,
    bmiMax: 26.2,
  },
  { 'age': 14,
    bmiMin: 15.8,
    bmiNorm: 23.4,
    bmiMax: 27.2,
  },
  { 'age': 15, 
    bmiMin: 16.3,
    bmiNorm: 24,
    bmiMax: 28.1,
  },
  { 'age': 16, 
    bmiMin: 16.8,
    bmiNorm: 24.6,
    bmiMax: 28.9,
  },
  { 'age': 17, 
    bmiMin: 17.2,
    bmiNorm: 25.2,
    bmiMax: 29.6,
  },
  { 'age': 18, 
    bmiMin: 17.6,
    bmiNorm: 25.6,
    bmiMax: 30.1,
  },
  { 'age': 19,
    bmiMin: 17.8,
    bmiNorm: 26.1,
    bmiMax: 31,
  },
  { 'age': 20, 
    bmiMin: 17.8,
    bmiNorm: 26.4,
    bmiMax: 31.8,
  }
];

const bmiM = [
  { 'age': 2, 
    bmiMin: 14.8,
    bmiNorm: 18.2,
    bmiMax: 19.4,
  },
  { 'age': 3, 
  bmiMin: 14.4,
  bmiNorm: 17.4,
  bmiMax: 18.2,
  },
  { 'age': 4, 
  bmiMin: 14,
  bmiNorm: 17,
  bmiMax: 17.8,
  },
  { 'age': 5, 
  bmiMin: 13.8,
  bmiNorm: 16.8,
  bmiMax: 17.9,
  },
  { 'age': 6, 
  bmiMin: 13.8,
  bmiNorm: 17,
  bmiMax: 18.4,
  },
  { 'age': 7, 
  bmiMin: 13.8,
  bmiNorm: 17.4,
  bmiMax: 19.2,
  },
  { 'age': 8, 
  bmiMin: 13.8,
  bmiNorm: 18,
  bmiMax: 20,
  },
  { 'age': 9, 
    bmiMin: 14,
    bmiNorm: 18.6,
    bmiMax: 21,
  },
  { 'age': 10, 
    bmiMin: 14.2,
    bmiNorm: 19.4,
    bmiMax: 22.1,
  },
  { 'age': 11, 
    bmiMin: 14.6,
    bmiNorm: 20.2,
    bmiMax: 23.2,
  },
  { 'age': 12, 
    bmiMin: 15,
    bmiNorm: 21,
    bmiMax: 24.2,
  },
  { 'age': 13, 
    bmiMin: 15.4,
    bmiNorm: 21.8,
    bmiMax: 25.2,
  },
  { 'age': 14,
    bmiMin: 16,
    bmiNorm: 22.6,
    bmiMax: 26,
  },
  { 'age': 15, 
    bmiMin: 16.6,
    bmiNorm: 234,
    bmiMax: 26.8,
  },
  { 'age': 16, 
    bmiMin: 17.2,
    bmiNorm: 24.2,
    bmiMax: 27.8,
  },
  { 'age': 17, 
    bmiMin: 17.7,
    bmiNorm: 24.9,
    bmiMax: 28.2,
  },
  { 'age': 18, 
    bmiMin: 18.2,
    bmiNorm: 25.6,
    bmiMax: 39,
  },
  { 'age': 19, 
    bmiMin: 18.7,
    bmiNorm: 26.4,
    bmiMax: 29.7,
  },
  { 'age': 20, 
    bmiMin: 19.2,
    bmiNorm: 27,
    bmiMax: 30.6,
  }
];
 
//bmi check function

function bmiCheck (x, age, sex) {

  //messages
  const under = 'You are underweight.';
  const normal = 'Your body weight is normal.';
  const over = 'Your body weight is higher than recommended.';
  const obese = 'Your body weight is too high.';

  if (age >= 65) {
    if (x < 25) {
      return under;
    } else if (x < 27) {
      return normal;
    } else if (x < 32) {
      return over;
    } else {
      return obese;
    }
  } else if (age > 20) {
    if (x < 18.5) {
      return under;
    } else if (x < 25) {
      return normal;
    } else if (x < 30) {
      return over;
    } else {
      return obese;
    }
  }
    else {
      if (sex === 'M') {
        for (let i = 0; i<19; i++) {
          if (age == bmiM[i].age) {
            if (x < bmiM[i].bmiMin) {
              return under;
            } else if (x < bmiM[i].bmiNorm) {
              return normal;
            } else if (x < bmiM[i].bmiMax) {
              return over;
            } else {
              return obese;
            }
          }
        }
      } else {
        for (let i = 0; i<19; i++) {
          if (age == bmiF[i].age) {
            if (x < bmiF[i].bmiMin) {
              return under;
            } else if (x < bmiF[i].bmiNorm) {
              return normal;
            } else if (x < bmiF[i].bmiMax) {
              return over;
            } else {
              return obese;
            }
          }
        }
      }
    }  
}

//callback function
function calculate() {

 const d = document.querySelector('body'); //remove old result
 const r = d.querySelector('.result');

if (r) {
       d.removeChild(r);
   };

 let massInput = document.querySelector('#mass_inp').value;
 let heightInput = document.querySelector('#height_inp').value/100;
 let ageInput = document.querySelector('#age_inp').value;
 let sexInput = document.querySelector('#sex_inp').value;

 if ((massInput < 5) || (heightInput < 0.3) || (massInput > 700) || (heightInput > 3) || (ageInput <= 0)) {
   const err = document.createElement('section');
   err.textContent = 'Please enter valid information.';
   err.className = 'result';
   err.id = 'error';
   document.body.appendChild(err);
 } else if (ageInput < 2) {
  const warning = document.createElement('section');
  warning.textContent = 'BMI is not used to assess the growth of children under 2 years old.';
  warning.className = 'result';
  warning.id = 'warning';
  document.body.appendChild(warning);
 } else {
   let c = bmi(massInput, heightInput);
   const res = document.createElement('section');
   res.textContent = 'Your BMI is ' + c.toFixed(1) + '. ' + bmiCheck(c, ageInput, sexInput);
   res.className = 'result';
   document.body.appendChild(res);
 }

};


//button - event listener
document.querySelector('#run').addEventListener('click', calculate, false); 