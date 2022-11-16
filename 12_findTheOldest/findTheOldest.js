const findTheOldest = function(arr) {
    let person = undefined

    const Oldest = arr.reduce((oldest, a) => {
        if (!('yearOfDeath' in a)) {
            if ((((new Date()).getFullYear()) - a.yearOfBirth ) > oldest) {
                oldest = ((new Date()).getFullYear()) - a.yearOfBirth;
                person = a;
            }
        }

        else {
            if ((a.yearOfDeath - a.yearOfBirth) > oldest) {
                oldest = a.yearOfDeath - a.yearOfBirth;
                person = a;
            }
        }

        return oldest;
    }, 0);

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
