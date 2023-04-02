const inputName = document.getElementById("name-input-field");
const nameCard = document.getElementById("name-card");
const inputNum = document.getElementById("input-num");
const alertaN = document.getElementById("card-num-val");
const numCard = document.getElementById("num-card");
const monthInput = document.getElementById("month-input");
const monthCard = document.getElementById("month");
const alertaM = document.getElementById("card-exp-val");
const yearInput = document.getElementById("year-input");
const yearCard = document.getElementById("year");
const cvcInput = document.getElementById("cvc-input");
const cvcCard = document.getElementById("cvc-card");
const alertaC = document.getElementById("card-cvc-val");
const formContainer = document.getElementById("form-cont");
const alertaSixTeen = document.getElementById("card-num-sixteen-val");

//cardholder
inputName.addEventListener("input", () => {
  if (inputName.value > 0) {
    nameCard.innerHTML = "";
  }
  nombreFunc();
});

nombreFunc = () => {
  const numbers = /^[0-9]+$/;
  if (inputName.value.match(numbers)) {
    inputName.style.border = "1px solid hsl(0, 100%, 66%)";
    document.getElementById("card-name-val").style.display = "block";
  } else {
    inputName.style.border = "1px solid hsl(279, 6%, 55%)";
    document.getElementById("card-name-val").style.display = "none";
  }
  nombre = inputName.value;
  nameCard.innerHTML = nombre.toUpperCase();
};
//cardnumber
inputNum.addEventListener("input", () => {
  if (inputNum.value > 0) {
    numCard.innerHTML = "";
  }
  numFunc();
});

numFunc = () => {
  const numbersNum = /^[0-9]+$/;
  if (!inputNum.value.match(numbersNum)) {
    alertaN.style.display = "block";
    inputNum.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    alertaN.style.display = "none";
    inputNum.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  numero = inputNum.value;
  numCard.innerHTML = numero.replace(/.{4}/g, "$& ");
};

monthInput.addEventListener("input", () => {
  if (monthInput.value > 0) {
    monthCard.innerHTML = "";
  }
  monthFunc();
});

monthFunc = () => {
  const numbersMonth = /^[0-9]+$/;
  if (!monthInput.value.match(numbersMonth) || monthInput.value == "") {
    alertaM.style.display = "block";
    monthInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    alertaM.style.display = "none";
    monthInput.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  mes = monthInput.value;
  monthCard.innerHTML = mes;
};

yearInput.addEventListener("input", () => {
  if (yearInput.value > 0) {
    yearCard.innerHTML = "";
  }
  yearFunc();
});

yearFunc = () => {
  const numbersYear = /^[0-9]+$/;
  if (!yearInput.value.match(numbersYear) || yearInput.value == "") {
    alertaM.style.display = "block";
    yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    alertaM.style.display = "none";
    yearInput.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  ano = yearInput.value;
  yearCard.innerHTML = ano;
};

cvcInput.addEventListener("input", () => {
  if (cvcInput.value > 0) {
    cvcCard.innerHTML = "";
  }
  cvcFunc();
});

cvcFunc = () => {
  const numbersCvc = /^[0-9]+$/;
  if (!cvcInput.value.match(numbersCvc) || cvcInput.value == "") {
    alertaC.style.display = "block";
    cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    alertaC.style.display = "none";
    cvcInput.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  cvc = cvcInput.value;
  cvcCard.innerHTML = cvc;
};

btnFunc = document.querySelector("#btn");
btnFunc.addEventListener("click", () => {
  nameMatch(inputName);
  formValidation(inputName, inputNum, monthInput, yearInput, cvcInput);
});

completedFun = () => {
  formContainer.innerHTML = "";
  formContainer.innerHTML += `
      <div class="completed-container">
        <img class="check-icon-completed" src="images/icon-complete.svg" alt="" />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button type="button" class="continue-btn">Continue</button>
      </div>
      `;
};

nameMatch = (nameCheck) => {
  const numbers = /^[0-9]+$/;
  if (nameCheck.value.match(numbers)) {
    inputName.style.border = "1px solid hsl(0, 100%, 66%)";
    document.getElementById("card-name-val").style.display = "block";
  } else {
    return false;
  }
};

formValidation = (namePara, numPara, monthPara, yearPara, cvcPara) => {
  if (namePara.value.length < 5) {
    inputName.style.border = "1px solid hsl(0, 100%, 66%)";
    console.log("Empty name field");
    return false;
  } else if (numPara.value.length < 16) {
    inputNum.addEventListener("click", () => {
      alertaSixTeen.style.display = "none";
    });
    if ((alertaN.style.display = "block" === true)) {
      alertaSixTeen.style.display = "none";
    }
    inputNum.style.border = "1px solid hsl(0, 100%, 66%)";
    alertaSixTeen.style.display = "block";
    console.log("Empty number field");
    return false;
  } else if (monthPara.value === "" || monthPara.value > 12) {
    monthInput.style.border = "1px solid hsl(0, 100%, 66%)";
    alertaM.style.display = "block";
    console.log("Empty month field");
  } else if (yearPara.value === "" || yearPara.value < 23) {
    yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
    alertaM.style.display = "block";
    console.log("Empty year field");
  } else if (cvcPara.value === "" || cvcPara.value.length < 3) {
    cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
    alertaC.style.display = "block";
    console.log("Empty cvc field");
    return false;
  } else {
    completedFun();
    console.log("Form submited");
    return true;
  }
};

