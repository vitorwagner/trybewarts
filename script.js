// CONSTANTES
const formHeader = document.querySelector('.trybewarts-login');
const btnSubmmitEvaluationForm = document.querySelector('#evaluation-form');
const agreementCheck = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

// FUNÇÕES

// Valida o formulário do header de acordo como o requisito 3
function validarFormularioLogin(e) {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;
  const isTrybeEmailTest = email === 'tryber@teste.com' && password === '123456';

  if (isTrybeEmailTest) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Quando o formulário é preenchido.
// Referência para obter o value dos radio buttons: https://stackoverflow.com/questions/22938341/count-the-number-of-checked-checkboxes-in-html

const answerName = document.getElementById('answer-name');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const answerEmail = document.getElementById('answer-email');
const inputEmail = document.getElementById('input-email');
const answerHouse = document.getElementById('answer-house');
const selectHouse = document.getElementById('house');
const answerObs = document.getElementById('answer-obs');
const answerFamily = document.getElementById('answer-family');
const answerRate = document.getElementById('answer-rate');

function exibirFormularioCadastro(e) {
  e.preventDefault();

  const diivFormData = document.querySelector('#form-data');
  const formEvaluationForm = document.querySelector('#evaluation-form');
  diivFormData.style.display = 'block';
  formEvaluationForm.style.display = 'none';
  answerName.innerHTML += ` ${inputName.value} ${inputLastName.value}`;
  answerEmail.innerHTML += ` ${inputEmail.value}`;
  answerHouse.innerHTML += ` ${selectHouse.value}`;
  answerFamily.innerHTML += ` ${
    document.querySelectorAll('input[name="family"]:checked')[0].value
  }`;
  answerRate.innerHTML += ` ${document.querySelectorAll('input[name="rate"]:checked')[0].value}`;
  answerObs.innerHTML += ` ${textarea.value}`;

  console.log('Ola 21!');
}

// AgreementCheck change - Só movi a lógica para cá dos dois listeners. ;)
function agreementCheckFunction() {
  if (agreementCheck.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

// Textarea keyup
function textareaFunction() {
  counter.innerText = 500 - textarea.value.length;
}

window.onload = () => {
  formHeader.addEventListener('submit', validarFormularioLogin);
  btnSubmmitEvaluationForm.addEventListener('submit', exibirFormularioCadastro);
  agreementCheck.addEventListener('change', agreementCheckFunction);
  textarea.addEventListener('keyup', textareaFunction);
};
