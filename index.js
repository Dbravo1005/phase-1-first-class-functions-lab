const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);

function returnFirstTwoDrivers(){
   return drivers.slice (0, 2)
    
}

// returnFirstTwoDrivers(function() {['Antonia', 'Nuru']})

function returnLastTwoDrivers(){
    return drivers.slice (2, 4)
}

// returnLastTwoDrivers(function(){['Amari', 'Mo']});

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function fareMultiplier(num1){
    return function (num2){
   return num1 * num2
}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
//     arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//     returnFirstTwoDrivers = arrayOfDrivers.slice[0, 2]
//     return selectDifferentDrivers
//

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
}

