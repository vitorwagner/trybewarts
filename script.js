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
function exibirFormularioCadastro(e) {
  e.preventDefault();

  const diivFormData = document.querySelector('#form-data');
  const formEvaluationForm = document.querySelector('#evaluation-form');
  diivFormData.style.display = 'block';
  formEvaluationForm.style.display = 'none';

  console.log('Ola 21!');
};

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

// Exibe o submit do formulario
function showSubmitFormularioEvaluation() {
  
}

window.onload = () => { 
  formHeader.addEventListener('submit', validarFormularioLogin);
  btnSubmmitEvaluationForm.addEventListener('submit', exibirFormularioCadastro);
  agreementCheck.addEventListener('change', agreementCheckFunction);
  textarea.addEventListener('keyup', textareaFunction);

  exibirFormularioCadastro;
};

