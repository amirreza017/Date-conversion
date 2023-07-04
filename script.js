// Jalali Moment:
// https://github.com/fingerpich/jalali-moment
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
    shamsi = moment(`${year}/${month}/${day}`, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
    return shamsi;
}
document.getElementById('convert').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('dateshamsi').innerHTML = `تاریخ تبدیل شده شمسی ${shamsifunction(year,month,day)} است.`;
})