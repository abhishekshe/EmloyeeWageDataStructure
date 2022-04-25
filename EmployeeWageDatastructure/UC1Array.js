function CalculateDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTHS=160;
const NUM_OF_WORKING_DAYS =20;

let totalEmpHrs=0;
let totalWorkingDays=0;

let empDailyWageArray= new Array();

while(totalEmpHours<=MAX_HRS_IN_MONTHS && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck= ath.floor((Math.random()*10)%3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(CalcDailyWage(empHrs));

}

let empWage = CalcDailyWage(totalEmpHrs);
console.log("Total days" +totalWorkingDays+ "EmpWage" +empWage);
