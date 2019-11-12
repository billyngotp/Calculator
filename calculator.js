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
}

module.exports = Calculator