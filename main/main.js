// Write your cade below:
module.exports = function main(num1, num2) {
    // Using try-catch to avoid some errors such as the num2 equals to zero, 
    // num1 or num2 is not the numeric type, num1 or num2 is overflow and so on.
    try {
        return (num1 % num2);
    } catch (error) {
        console.log("error!");
    }
};