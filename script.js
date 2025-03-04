let expression = "0"
let expression_on_screen = expression;
let screen = document.querySelector("#screen")
let numButtons = document.querySelectorAll(".red");
numButtons = Array.from(numButtons);
numButtons.forEach(element => {
    element.addEventListener("click", () => {
        let t = element.textContent;
        expression += t;
        expression_on_screen += t;
        screen.textContent = expression_on_screen;
    })
});
let operationButtons = document.querySelectorAll(".yellow");
operationButtons = Array.from(operationButtons);
operationButtons.forEach(element => {
    element.addEventListener("click", () => {
        let t = element.textContent;
        if(t != "="){
            if(t == "C"){
                expression = "0";
                expression_on_screen = "0";
                screen.textContent = expression_on_screen;
            }
            else if(t == "+" || t == "-" || t == "*" || t == "/"){
                expression += t;
                expression_on_screen = "0";
                screen.textContent = expression_on_screen;
            }
            else{
                expression = expression.slice(0, -1);
                expression_on_screen = expression_on_screen(0, -1);
                screen.textContent = expression_on_screen;
            }
        }
        else {
            let result = eval(expression);
            expression = "0";
            expression_on_screen = `${result}`;
            screen.textContent = expression_on_screen;
        }
    })
});