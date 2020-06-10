const returnFirstTwoDrivers = function (arrOfDriver){
  let newArr = [arrOfDriver[0], arrOfDriver[1]];
  return newArr;
}

const returnLastTwoDrivers = function (arrOfDriver) {
  let newArr = [arrOfDriver[arrOfDriver.length-2], arrOfDriver[arrOfDriver.length-1]];
  return newArr;
}