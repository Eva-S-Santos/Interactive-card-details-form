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

//cardholder
inputName.addEventListener("input", () => {
  if (inputName.value > 0) {
    nameCard.innerHTML = "";
  }
  nombreFunc();
});

nombreFunc = () => {
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
  if (inputNum.value / inputNum.value !== 1) {
    alertaN.style.display = "block";
    inputNum.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    alertaN.style.display = "none";
    inputNum.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  numero = inputNum.value;
  numCard.innerHTML = numero.replace(/.{4}/g, "$& ");
  infoCard.push({ numCard: numero });
};

monthInput.addEventListener("input", () => {
  if (monthInput.value > 0) {
    monthCard.innerHTML = "";
  }
  monthFunc();
});

monthFunc = () => {
  if (monthInput.value == "" || monthInput.value / monthInput.value !== 1) {
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
  if (yearInput.value == "" || yearInput.value / yearInput.value !== 1) {
    alertaM.style.display = "block";
    yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    alertaM.style.display = "none";
    yearInput.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  ano = yearInput.value;
  yearCard.innerHTML = ano;
  infoCard.push({ yearCard: ano });
};

cvcInput.addEventListener("input", () => {
  if (cvcInput.value > 0) {
    cvcCard.innerHTML = "";
  }
  cvcFunc();
});

cvcFunc = () => {
  if (cvcInput.value == "" || cvcInput.value / cvcInput.value !== 1) {
    alertaC.style.display = "block";
    cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
  } else {
    alertaC.style.display = "none";
    cvcInput.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  cvc = cvcInput.value;
  cvcCard.innerHTML = cvc;
  infoCard.push({ cvcCard: cvc });
};

btnFunc = () => {
  const nameCheck = document.forma.name.value;
  const numCheck = document.forma.number.value;
  const monthCheck = document.forma.month.value;
  const yearCheck = document.forma.year.value;
  const cvcCheck = document.forma.cvc.value;

  if (
    nameCheck === "" ||
    numCheck === "" ||
    monthCheck === "" ||
    yearCheck === "" ||
    cvcCheck === ""
  ) {
    inputNum.style.border = "1px solid hsl(0, 100%, 66%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 66%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
    cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
    alertaM.style.display = "block";
    alertaC.style.display = "block";
    return false;
  } else {
    formContainer.innerHTML = "";
    formContainer.innerHTML += `
      <div class="completed-container">
        <img class="check-icon-completed" src="images/icon-complete.svg" alt="" />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button type="button" class="continue-btn">Continue</button>
      </div>
      `;
  }
};
