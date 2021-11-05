function sprawdz(num1, num2){
    if (num1 === 20 || num2 === 20) {
        return true;
    } if (num1 + num2 <= 20) {
        return true;
    }
}
console.log( sprawdz(20, 15) );