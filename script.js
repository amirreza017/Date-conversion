// Date FNS Jalali:
// https://github.com/date-fns-jalali/date-fns-jalali
let datefnsjalali = require('date-fns-jalali');
let day;
let month;
let year;
let shamsi;
let onchangeday = function(event) {
    day = event.target.value;
}
let onchangemonth = function(event) {
    month = event.target.value;
}
let onchangeyear = function(event) {
    year = event.target.value;
}
function shamsifunction(year,month,day) {
    shamsi = format(new Date(year,month,day), 'yyyy-MM-dd');
    return shamsi;
}
document.getElementById('convert').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('dateshamsi').innerHTML = `تاریخ تبدیل شده شمسی ${shamsifunction(year,month,day)} است.`;
})