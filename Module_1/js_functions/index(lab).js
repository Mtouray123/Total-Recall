function addList() {
    console.log(arguments);
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
    return sum;
}

addList (10, 14, 17);
addList (23, 57, 99, 82);
addList (34, 11, 17, 87, 27);