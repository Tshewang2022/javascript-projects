
/* we work for a company building a smart home thermomet. Our most recent task is this: "
given an arrays of temperatures of one day, calculate the temperatures amplitude. keep in mind that sometimes
ther might be sensor errors*/



const temperatures = [3, 4, 5, 'error', 2, 34, -32];

// 1. understanding the problems
// what is temperature amplitudes? diff between highest and lowest temp
// how to compute max and min temperatures?
// what does the sensor error? and what to do? 

// 2. breaking the problems into the sub problems
// how to ignore the errors?
// find max of the temps
// find min value
// to subtract max-min (amplitude);

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps == 'number') {
            continue;
        }
        if (temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) {
            min = temps[i];
        }
    }
    console.log(max, min);
    return max - min;
}
calcTempAmplitude([9, 3, 10]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//problem 2
// function should now receive 2 arrays of temps
// 1 understanding the problem
// with 2 arryas. we should merge the two arrays into one

// 2 how to merge the two arrays
