class Calculator{
    constructor(num){
        this.num =num;
    }
    add(num){
        return this.num + num;
    }
    subtract(num){
        return this.num -= num;
    }
    multiply(num){
        return this.num *= num;
    }
    divide(num){
        return this.num /= num;
    }
    clear(){
        return this.num = 0;
    }
    equals(){
        return this.num;
    }
}

module.exports = Calculator