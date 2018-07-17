

const convertToC = (num) => {
    return (Math.abs(num - 32) / 1.8).toFixed(2) *1;
}

const convertToF = (num) => {
    return (num * 1.8) + 32;
}


module.exports = {
    convertToC,
    convertToF
}