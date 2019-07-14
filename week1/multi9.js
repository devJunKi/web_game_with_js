var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

var body = document.body;
var quiz = document.createElement('div');
quiz.textContent = String(num1) + ' 곱하기 ' + String(num2) + ' 는?';
document.body.append(quiz);

var form = document.createElement('form');
document.body.append(form);

var inputText = document.createElement('Input');
form.append(inputText);

var regButton = document.createElement('button');
regButton.textContent = '등록';
form.append(regButton);

var resultText = document.createElement('div');
document.body.append(resultText);

form.addEventListener('submit', function (e) { // 콜백함수
 e.preventDefault();
 console.log()
 if( result === Number(inputText.value) ){
   resultText.textContent = '딩동댕';
   num1 = Math.ceil(Math.random() * 9);
   num2 = Math.ceil(Math.random() * 9);
   result = num1 * num2;
   quiz.textContent = String(num1) + ' 곱하기 ' + String(num2) + ' 는?';
 }
 else {
   resultText.textContent = '땡';
 }
 inputText.value = '';
 inputText.focus();
});