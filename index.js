import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 1234;
console.log("Welcome to Code With Tahir, ATM Machine");
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin",
    }
]);
if (pinAns.pin === mypin) {
    console.log("Pin is correct, login successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance ", "Fast Cash"],
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter The Amount To Withdraw:",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is:${myBalance}`);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                message: "Select Your Amount:",
                choices: [1000, 2000, 5000, 10000, 20000, 50000],
            }
        ]);
        if (fastCash.cash > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= fastCash.cash;
            console.log(`${fastCash.cash} Withdraw Successfully`);
            console.log(`Your Remaining Balance is:${myBalance}`);
        }
        if (operationAns.operation === "Check Balance") {
            console.log(`Your Account Balance Is:${myBalance}`);
        }
    }
}
else {
    console.log("Your Pin Is Incorrect, Try Again");
}
