const getName = () => {
    return "Faizul Islam";
}

const getAge = () => {
    return "25";
}

const cgpa = 2.96;


// exports.name = getName;
// exports.age = getAge;
// exports.result = cgpa;
// To separately access these items


module.exports = {
    getName,
    getAge,
    cgpa
}