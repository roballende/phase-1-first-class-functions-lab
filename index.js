const returnFirstTwoDrivers = (arg) => {
    return [arg[0],arg[1]]
}

// const returnFirstTwoDrivers = function(drivers) {
//     return drivers.slice(0, 2)
// }

const returnLastTwoDrivers = function(names) {
    return names.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(x) {
//     return (fare) => fare * x
// }

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(names, returnedDrivers) {
    return returnedDrivers(names)
}

