"use strict";
function main_calculations() {
    const inp = require("prompt-sync")();
    const inp1 = require("prompt-sync")();
    const inp2 = require("prompt-sync")();
    let choice;
    console.log("\t\t-----------------\n" +
        "\t\t|   CALCULATOR  |\n" +
        "\t\t|---------------|\n" +
        "\t\t| 7 | 8 | 9 | / |\n" +
        "\t\t-----------------\n" +
        "\t\t| 4 | 5 | 6 | * |\n" +
        "\t\t-----------------\n" +
        "\t\t| 1 | 2 | 3 | - |\n" +
        "\t\t-----------------\n" +
        "\t\t| 0 | . | = | + |\n" +
        "\t\t-----------------\n" +
        "CHOOSE YOUR PREFFERED OPTION:\n" +
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division");
    choice = parseInt(inp("Enter your choice: "));
    const vinp1 = parseFloat(inp1("Enter the first number: "));
    const vinp2 = parseFloat(inp2("Enter the second number: "));
    let add = vinp1 + vinp2;
    let sub = vinp1 - vinp2;
    let div = vinp1 / vinp2;
    let mul = vinp1 * vinp2;
    if (choice == 1) {
        console.log(vinp1 + "+" + vinp2 + " = " + add);
    }
    else if (choice == 2) {
        console.log(vinp1 + "-" + vinp2 + " = " + sub);
    }
    else if (choice == 3) {
        console.log(vinp1 + "*" + vinp2 + " = " + mul);
    }
    else if (choice == 4) {
        console.log(vinp1 + "/" + vinp2 + " = " + div);
    }
}
main_calculations();
