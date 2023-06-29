//IS TRUTHY
// print to dialog box
alert(`This site will test if the value is true or false. Press ENTER or OK to continue`)
const input = prompt(`Enter your value here`)
// write if statement

// if the value of the input is false, print false
if (input === `false`) {
    alert (`The boolean value false is falsy`)
}
else if (input === "false") {

}
else if (input === "null") {
        alert (`The null value is falsy`)
}
else if (input === "undefined") {
    alert (`undefined is falsy`)
}
else if (input === "0") {
    alert (`The number 0 is falsy (the only falsy number)`)
}
else if (input === "") {
    alert (`The empty string is falsy (the only falsy string)`)
}
// if the boolean value of the input is true, print true
else {
    alert (`true`)
}


//NUMBER-LINE
// Start with an intro alert box
alert(`Hi! Welcome to Number Line; a service that will tell you where a sum of your numbers belongs in a number line. Press ENTER or click OK to continue.`)
// 1. Create prompt for input 1
const input1 = prompt(`Please enter your first number.`)
// 2. Create prompt for input 2
const input2 = prompt(`Please enter your second number.`)
// 3. Sum = sum(input1 + input2)
const sum = Number(input1) + Number(input2)

alert(`The total of the two numbers is ${sum}`)

// 4. if sum > 100, print is greater than 100"
if (sum > 100) {
    alert(`${sum} is greater than 100`)
}
// 5. if 100 > sum > 0, print is greater than 0"
else if (100 > sum && sum > 0) {
    alert(`${sum} is greater than 0`)
}
// 6. if sum = 0, print is equal to 0"
else if (sum === 0) {
    alert(`${sum} is equal to 0`)
}
// 7. if 0 > sum >= -1000, print, is a negative number"
else if (0 > sum && sum >= -1000) {
    alert(`${sum} is a negative number`)
}
// 8. if -1000 > sum, print is less than -1000"
else if (-1000 > sum) {
    alert(`${sum} is less than -1000`)
}


//GREATER-THAN-5
// 1. Introductory alert
alert(`Enter any two numbers. If both numbers are greater than or equal to 5, expect "true". If not, expect "false".`);

// 2. input 1
num1 = prompt(`Enter the first number:`);

// 3. input 2
num2 = prompt(`Enter the second number:`);

// 4. Create if statement:
if (num1 && num2 >= 5) {
    alert(true)
// 5. if num1 and num2 >= 5, print true. else, print false.
} else {
    alert(false)
}


//PAIR AND COMPARE
// 1. Introductory/transition dialog box
alert(`Our fourth and final act will compare whether two inputs are exactly the same as each other. There will be two sets asked. If either is true, we will continue.`)

// 2. input 1A
param1A = prompt(`Enter Set 1: Input 1:`)

// 3. input 1B
param1B = prompt(`Enter Set 1: Input 2:`)

// 4. input 2A
param2A = prompt(`Enter Set 2: Input 1:`)

// 5. input 2B
param2B = prompt(`Enter Set 2: Input 2:`)

// 6. Create if statement:
// 7. If 1A === 1B or 2A === 2B, true
if ((param1A === param1B) || (param2A === param2B)) {
    alert(true)
// 8. Else, false
} else {
    alert(false)
}