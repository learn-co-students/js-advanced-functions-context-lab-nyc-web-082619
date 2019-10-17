class EmployeeRecord{
    constructor(array){
        this.firstName = array[0]
        this.familyName = array[1]
        this.title = array[2]
        this.payPerHour = array[3]
        this.timeInEvents = []
        this.timeOutEvents = []
    }
}

class DateTime{
    constructor(string){
        const array = string.split(" ")
        this.date = array[0]
        this.hour = parseInt(array[1])
    }
}

const adderReducer = (accumulator, currentValue) => accumulator + currentValue

let createEmployeeRecord = function (array){
    return new EmployeeRecord(array)
}

let createEmployeeRecords = function (arrayOfArrays){
    return arrayOfArrays.map(createEmployeeRecord)
}

let createTimeInEvent = function(dateTime){
    const timeIn = new DateTime(dateTime)
    timeIn.type = "TimeIn"
    this.timeInEvents.push(timeIn)
    return this
}

let createTimeOutEvent = function(dateTime){
    const timeOut = new DateTime(dateTime)
    timeOut.type = "TimeOut"
    this.timeOutEvents.push(timeOut)
    return this
}

function findEmployeeByFirstName(employees, firstName){
    return employees.filter(employee => employee.firstName === firstName)[0]
}

let hoursWorkedOnDate = function(date){
    const timeInHoursOnDate = this.timeInEvents.filter(event => event.date === date).map(event => event.hour)
    console.log(this.firstName, timeInHoursOnDate)
    const timeOutHoursOnDate = this.timeOutEvents.filter(event => event.date === date).map(event => event.hour)
    console.log(this.firstName, timeInHoursOnDate)
    return (timeOutHoursOnDate.reduce(adderReducer) - timeInHoursOnDate.reduce(adderReducer))/100
}

let wagesEarnedOnDate = function(date){
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let calculatePayroll = function (employeeArray){
    const wageArray = employeeArray.map(record => allWagesFor.call(record))
    return wageArray.reduce(adderReducer)
}