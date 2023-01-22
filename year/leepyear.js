
function leapYear(year) {
    if (0 == year % 4 && (0 != year % 100) ) {
        return true;
    }
    else if(0 == year % 400){
        return true;
    } else {
        return false;
    }
}
console.log(leapYear(2003))
