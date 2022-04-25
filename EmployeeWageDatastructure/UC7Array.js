let totalEmployeeWage=0
function sum(dailyWage)
{
   totalEmployeeWage+= dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("7a Emp wage with foreach: "+totalEmployeeWage);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}

console.log("UC 7a- Emp wage with reduce: "+empDailyWageArray.reduce(totalWages,0));

//UC 7B- show the day along with daily wage using array map helper functions.
let workDayCount= 0;
function mapDayWithWage(dailyWage)
{
    workDayCount++;
    return workDayCount + " = "+ dailyWage; 
}
let mapDaywithWageArray= empDailyWageArray.map(mapDayWithWage);
console.log("7B: "+ mapDaywithWageArray);
//UC 7C- Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray= mapDaywithWageArray.filter(fulltimeWage);
console.log("7C: "+fullDayWageArray); 
//UC 7D- finding first day when employee was present for full day
console.log("7D first time employee was present for 1st time: "+ mapDaywithWageArray.find(fulltimeWage));
//UC 7E- checking if every element of fullday wage array is truely holding 160 as employee wage.
console.log("7E: checking if all elements of full time employee has wage of 160-  "+fullDayWageArray.every(fulltimeWage));
//UC 7F- checking if there is any part time wage
function checkPartTime(dailyWages)
{
    return dailyWages.includes('80');
}
console.log("7F- Checking if there is a employee with part time wage "+mapDaywithWageArray.some(checkPartTime));
//UC 7G: finding out no of days employee actually worked
function totalDaysWorked(noOfDays,dailyWage)
{
    if(dailyWage>0)
    {
        return noOfDays+=1;
    }
    return noOfDays;
}
console.log("7G: The no of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));