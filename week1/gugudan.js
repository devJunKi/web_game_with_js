var x1 = Math.floor(Math.random() * 9) + 1;
var x2 = Math.floor(Math.random() * 9) + 1;
var multiply = x1 * x2;

var quiz = document.createElement("div");
quiz.textContent = x1 + "*" + x2 + "=?";
document.body.append(quiz);

var form = document.createElement('form');
document.body.append(form)

var input = document.createElement('input')
input.type = 'number';
form.append(input); 

 var button = document.createElement('button');
button.textContent='입력';
form.append(button);

var result = document.createElement('div');
document.body.append(result);

document.addEventListener("submit", function(event) {
    event.preventDefault();
    if (multiply === Number(input.value)) {
        result.textContent='정답';
        input.value='';
        input.focus();

        x1 = Math.floor(Math.random() * 9) + 1;
        x2 = Math.floor(Math.random() * 9) + 1;
        multiply = x1 * x2;
        quiz.textContent = x1 + "*" + x2 + "=?";
    } else {
        result.textContent='땡';
        input.value='';
        input.focus();
    }
});
