// Part 1: 🔐 Login & Access Control
let username = prompt("Enter your username (admin or user):");
let password = prompt("Enter your password:");

if ((username === "admin" || username === "user") && password === "1234") {
    var role = username;
    var securityLevel = (role === "admin") ? "high" : "low";
} else {
    alert("Incorrect credentials. Access denied.");
    throw new Error("Access Denied");
}

// Part 2: ☕ Coffee Shop Order Calculator
let customerName = prompt("What is your name?");
let age = parseInt(prompt("What is your age?"));
let coffeeType = prompt("What type of coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup = 0;

if (coffeeType === "espresso") {
    pricePerCup = 2.5;
} else if (coffeeType === "latte") {
    pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
} else {
    alert("Invalid coffee type. Please refresh and try again.");
    throw new Error("Invalid coffee type");
}

let originalTotal = quantity * pricePerCup;
let discount = 0;

if (age < 18 || age > 60) {
    discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// Part 3: 🧾 Bill Splitter with Tip
let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
let tipPercent = parseInt(prompt("Tip percentage? (0, 5, 10, or 15)"));

if (![1, 2, 3].includes(splitCount) || ![0, 5, 10, 15].includes(tipPercent)) {
    alert("Invalid input for bill split or tip. Please refresh and try again.");
    throw new Error("Invalid bill split or tip input");
}

let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / splitCount;

// Output the result
alert(
    `Hello ${customerName}!\n` +
    `You ordered ${quantity} ${coffeeType}(s).\n` +
    `Original total: $${originalTotal.toFixed(2)}\n` +
    `Discount: $${discount.toFixed(2)}\n` +
    `Tip: $${tipAmount.toFixed(2)}\n` +
    `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
    `Split between ${splitCount} people: $${amountPerPerson.toFixed(2)} each`
);


