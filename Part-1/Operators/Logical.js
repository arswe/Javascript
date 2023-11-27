// Logical AND (&&) Return TRUE if both operands ar TRUE
// console.log(true && true);

// let hightIncome = false;
// let goodCreditScore = true
// let eligibleForLoan = hightIncome && goodCreditScore;

// Logical OR (||) Return True if one of The operands are true
// console.log(true || false);

// let hightIncome = false;
// let goodCreditScore = true
// let eligibleForLoan = hightIncome || goodCreditScore;

// console.log("EligibleForLoan " + eligibleForLoan);

// Logical NOT (!) Return True if one of The operands are true

let hightIncome = false;
let goodCreditScore = false
let eligibleForLoan = hightIncome || goodCreditScore;
console.log("eligibleForLoan is : " + eligibleForLoan);

// Not (!) 
let applicationRefused = !eligibleForLoan
console.log("applicationRefused is : " + applicationRefused);
