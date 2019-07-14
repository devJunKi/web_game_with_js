var body = document.body;
var word = document.createElement('div');
word.textContent = '산기슭';
document.body.append(word);

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
 if( word.textContent[word.textContent.length - 1] === inputText.value[0]){
   // '안녕하세요'[4]
   resultText.textContent = '딩동댕';
   word.textContent = inputText.value;
 }
 else {
   resultText.textContent = '땡';
 }
 inputText.value = '';
 inputText.focus();
});