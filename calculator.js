class Calculator{
    constructor(num){
        this.num = num;
    }
    add(num){
        this.num += num;
        return this;
    }
    subtract(num){
        this.num -= num;
        return this;
    }
    multiply(num){
        this.num *= num;
        return this;
    }
    divide(num){
        this.num /= num;
        return this;
    }
    clear(){
        this.num = 0;
        return this;
    }
    equals(){
        return this.num;
    }
    rpn(equation="") {
        
        if (equation === "") {
            equation = 0;
            return parseInt(equation)
        }
        //evaluate the equation
        else{ 
            //calculations
            let output = equation.split(" ").slice();


            // function handleResult(equation) {
            //     let stack = [];
            //     console.log(equation[0].isInteger + " is integer");
            //     if(equation.length === 1 && equation[0].isInteger) {
            //         return parseInt(equation);
            //     }
            //     else {
                    
            //     }

            // }

            return handleResult(output);


            handleResult(output);
            function handleResult(calc) {
                if(calc.length <= 1){
                    return calc
                }
                else {
                    let result = parseInt(calc[0])
                    let secNum = parseInt(calc[1])
                    let operand = calc[2]
                    if(operand === "+") {
                        result += secNum; 
                    }
                    else if (operand === "-") {
                        result -= secNum;
                    }

                    else if (operand === "*") {
                        result *= secNum;
                    }

                    else if (operand === "/") {
                        result /= secNum;
                    }
                    calc.shift()
                    calc.shift()
                    calc[0] = result;

                    return handleResult(calc)
                }
            }
            //console.log(output)
            return parseInt(output)
        }
        
    }
}

const test = new Calculator(5);
//console.log(test);
//console.log(test.rpn())
console.log(test.rpn("5 3 + 6 - 2 *"))


module.exports = Calculator