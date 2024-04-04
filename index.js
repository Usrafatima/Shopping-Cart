#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("Welcome to your Shopping Cart"));
let cart = [];
let condition = true;
while (condition) {
    let operations = await inquirer.prompt([
        {
            name: "grocerySections",
            type: "list",
            message: ("Select section"),
            choices: ["Dairy", "Fruits", "Vegetables", "Meat", "Cart"],
        }
    ]);
    if (operations.grocerySections === "Dairy") {
        let addDairy = await inquirer.prompt([
            {
                name: ("dairyitems"),
                type: "list",
                message: "",
                choices: ["Egg $2", "Milk $3", "Bread $5", "Yougurt $6"],
            }
        ]);
        cart.push(addDairy.dairyitems);
        condition = addDairy;
        console.log("Added into cart ", addDairy.dairyitems);
    }
    else if (operations.grocerySections === "Fruits") {
        let addfruit = await inquirer.prompt([
            {
                name: ("freshFruits"),
                type: "list",
                message: "",
                choices: ["Grapes $2", "Apple$3", "Banana $5", "Melon $6"],
            }
        ]);
        cart.push(addfruit.freshFruits);
        condition = addfruit;
        console.log("Added into cart", addfruit.freshFruits);
    }
    else if (operations.grocerySections === "Vegetables") {
        let addveg = await inquirer.prompt([
            {
                name: ("freshveg"),
                type: "list",
                message: "",
                choices: ["1kg :Potatoes $2", "1kg: Tomatoes $2", "1kg :Onion $5", "1kg: Carrot $3"],
            }
        ]);
        cart.push(addveg.freshveg);
        condition = addveg;
        console.log("Added into cart", addveg.freshveg);
    }
    else if (operations.grocerySections === "Meat") {
        let addmeat = await inquirer.prompt([
            {
                name: ("Meat"),
                type: "list",
                message: "",
                choices: ["1kg beef : $6", "1kg mutton :$5", "1kg chicken :$3"]
            }
        ]);
        cart.push(addmeat.Meat);
        condition = addmeat;
        console.log("Added into cart", addmeat.Meat);
    }
    if (operations.grocerySections === "Cart") {
        console.log("Your items", cart);
    }
}
;
