function convert(...list) {
    let newArr = [];
    for (let item of list) {
        if (typeof item === 'string') {
            newArr.push(parseInt(item));
        } else if (typeof item === 'number') {
            newArr.push(String(item));
        }
    }
    return newArr;
}

function executeForEach(arr, callback) {   
    for (let item of arr) {
        callback(item);
    }
}

function mapArray(arr, callback) {
    let result = [];
    let call = function(item) {
        item *= 1;
        result.push(callback(item));
    }   
    executeForEach(arr, call);
    return result;
}

function filterArray(arr, callback) {
    let result = [];
    let call = function(item) {
        if (callback(item)){
            result.push(item);
        }
    }
    executeForEach(arr, call);
    return result;
}

function getValuePosition(arr, value) {
    for (let i = 0; i <= arr.length; i++) {
        if (value === arr[i]) {
            return i + 1;
        } 
    }
    return false;
}

function flipOver(str) {
    let revStr = '';
    for (let char of str) {
        revStr = char + revStr;
    }
    return revStr;
}

function makeListFromRange(start, end) {
    let result = [];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    } else {
        result.push(start);
    }
    return result;
}

function getArrayOfKeys(array, str) {
    let result = [];
    let callback = function(item) {
        result.push(item[str])
    }
    executeForEach(array, callback);
    return result;
}


function getTotalWeight(array) {
    let result = [];
    let callback = function(item) {
        result.push(item.weight);
    }
    executeForEach(array, callback);
    let sum = 0;
    for (let item of result){
        sum += item;
    }
    return sum;
}

function getPastDay(date, days) {
    const magicHour = 24;
    const magicSec = 3600;
    const magicMl = 1000;
    const newDate = new Date(date - days * magicHour * magicSec * magicMl);
    return newDate.toDateString();
}

function formateDate(date) {
    const magicTwo = 2;
    let newDate = date.getFullYear()+'/'+('0' + (date.getMonth() + 1)).slice(-magicTwo)+
    '/'+('0' + date.getDate()).slice(-magicTwo)+' '+date.getHours()+':'+date.getMinutes();
    return newDate;
}