const returnFirstTwoDrivers = function(drivers){
    const newArray = [drivers[0], drivers[1]];
    return newArray;
}

const returnLastTwoDrivers = function(drivers){
    const newArray = [drivers[2], drivers[3]];
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
     return function fareMultiplier(value){
        return multiplier * value
     }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
