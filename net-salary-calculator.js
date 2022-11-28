let salay = 50000;
let benefits = 7000;
let gross = salay + benefits;

function deductionForNhiF(){
if (gross <= 5999 ){
    return 150
}
 else if (gross <= 7999) {
    return 300;
 }
 else if( gross <= 11999){
    return 400;
}
 else if ( gross <= 14999) {
    return 500;
    }
 else if (gross <= 19999) {
    return 600;
 }
 else if(gross <= 24999) {
    return 750;
}
 else if( gross <= 29999){
    return 850;
}
 else if (gross <= 34999) {
    return 900;
}
 else if (gross <= 39999) {
    return 950;
}
 else if (gross <= 44999) {
    return 1000;
}
 else if (gross <= 49999) {
    return 1100;
}
 else if  (gross <= 59999){
    return 1200;
}
 else if (gross <= 69999) {
    return 1300;
}
 else if (gross <= 79999) {
    return 1400;
}
 else if  (gross <= 89999) {
    return 1500;
}
 else if (gross <= 99999) {
    return 1600;
}
 else if (gross >= 100000) {
    return 1700;
}
 }
 deductionForNhiF();
