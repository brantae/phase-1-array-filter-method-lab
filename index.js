// Code your solution here

const drivers = ['Bobby', 'Sammy', 
'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(drivers, string) {
    const result = drivers.filter(driver => 
        driver.toLowerCase() === string.toLowerCase());
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driver =>
        driver.substring(0, 1) === string.substring(0, 1));
    return result;    
}

function matchName(drivers, string) {
    const result = drivers.filter(driver =>
        driver.name === string);
    return result;    
}


