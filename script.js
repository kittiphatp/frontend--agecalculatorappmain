// SUBMIT
let submit = document.querySelector('.logo')

// LISTENER TO CLICK LOGO ARROW DOWN
submit.addEventListener('click', () => {
    calculationbirthday() 
})


function calculationbirthday() {
    let monthList = [0,1,2,3,4,5,6,7,8,9,10,11,12]
    let numDateOfMonthList = [31,28,31,30,31,30,31,31,30,31,30,31]


    // INPUT
    let inputDay = document.getElementById('birth-day').value;
    let inputMonth = document.getElementById('birth-month').value;
    let inputYear = document.getElementById('birth-year').value;

    // TODAY
    let today = new Date()
    let dayOfToday = today.getDate()
    let monthOfToday = today.getMonth()
    let yearOfToday = today.getFullYear()
    
    // DIFF TODAY - BIRTHDAY
    let diffDay = dayOfToday - inputDay
    let diffMonth = monthOfToday - (inputMonth - 1)
    let diffYear = yearOfToday - inputYear


    // CALCULATION
    
    let dayOfMonthToday = numDateOfMonthList[monthOfToday]
    if(diffDay < 0) {
        diffDay = diffDay + dayOfMonthToday
        diffMonth -= 1
        if(diffMonth < 0) {
            diffMonth = diffMonth + 12
            diffYear -=1
        }
    } else if (diffMonth < 0) {
        diffMonth = diffMonth + 12
        diffYear -=1
    }


    // GRAB LABEL FOR VALIDATION
    let labelDay = document.getElementsByClassName('label-day')[0]
    let labelMonth = document.getElementsByClassName('label-month')[0]
    let labelYear = document.getElementsByClassName('label-year')[0]

    // GRAB DIV FOR RECOMMENDATION
    let recDay = document.getElementsByClassName('show-invalid-day')[0]
    let recMonth = document.getElementsByClassName('show-invalid-month')[0]
    let recYear = document.getElementsByClassName('show-invalid-year')[0]
    
    // VALIDATE VARIABLE TRIGER
    let ValidDay = false
    let ValidMonth = false
    let ValidYear = false



    let dayOfMonthBirth = numDateOfMonthList[inputMonth - 1]
    if(inputDay == "" || inputDay <= 0 || inputDay > dayOfMonthBirth || isNaN(diffDay)) {
        labelDay.classList.add('invalid')
        recDay.textContent = "Must be a valid day"
        ValidDay = false
    } else {
        labelDay.classList.remove('invalid')
        recDay.textContent = ""
        ValidDay = true
    }
    
    if(inputMonth == "" || inputMonth <= 0 || inputMonth > 12 || isNaN(diffMonth))  {
        labelMonth.classList.add('invalid')
        recMonth.textContent = "Must be a valid month"
        ValidMonth = false
    } else {
        labelMonth.classList.remove('invalid')
        recMonth.textContent = ""
        ValidMonth = true
    }
    
    if(inputYear == "" || inputYear <= 0 || inputYear > yearOfToday || isNaN(diffYear))  {
        labelYear.classList.add('invalid')
        recYear.textContent = "Must be in the past"
        ValidYear = false
    } else {
        labelYear.classList.remove('invalid')
        recYear.textContent = ""
        ValidYear = true
    }


    // GRAB RESULTS
    let calcDays = document.querySelector('.calc-days-result')
    let calcMonths = document.querySelector('.calc-months-result')
    let calcYears = document.querySelector('.calc-years-result')

    // SHOW RESULTS
    if(ValidDay && ValidMonth && ValidYear) {
        calcDays.textContent = diffDay
        calcMonths.textContent = diffMonth
        calcYears.textContent = diffYear
    } else {
        calcDays.textContent = "--"
        calcMonths.textContent = "--"
        calcYears.textContent = "--"
    }

}
