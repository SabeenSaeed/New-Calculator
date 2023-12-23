#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
// async function main(){
//     const rainbowTitle =  chalkAnimation.karaoke(
//         'Lets start our calculations 🏴‍☠️ ')
//     }
// main();
function main() {
    return new Promise(resolve => {
        const rainbowTitle = chalkAnimation.karaoke('Lets start our calculations 🏴‍☠️ ');
        rainbowTitle.start();
        // Assuming that chalkAnimation.karaoke completes after 2000 milliseconds
        setTimeout(() => {
            rainbowTitle.stop();
            resolve();
        }, 2000);
    });
}
async function operation() {
    await main();
    console.log(chalk.magentaBright('╔════════════════════════╗\n' +
        '║ Simple Text Calculator ║\n' +
        '╠═══════════════════════ ╣\n' +
        '║  7  |  8  |  9  |  /  |║\n' +
        '║═════╬════ ╬════ ╬════ ╣║\n' +
        '║  4  |  5  |  6  |  * |║\n' +
        '║═════╬════ ╬════ ╬════ ╣║\n' +
        '║  1  |  2  |  3  |  - |║\n' +
        '║═════╬════ ╬════ ╬════ ╣║\n' +
        '║  0  |  .  |  =  |  + |║\n' +
        '╚═════╩════ ╩════ ╩════ ╝║\n' +
        '╠════════════════════════╣\n' +
        '║        Results         ║\n' +
        '╠══════════════════════ ═╣\n' +
        '║                        ║\n' +
        '╚════════════════════════╝'));
    console.log(chalk.gray(`
╭────────────────────────────────────────────────────╮
│                  Designed By Sabeen                │
╰────────────────────────────────────────────────────╯
`));
    let answer = await inquirer.prompt([
        {
            name: 'num1',
            type: 'number',
            message: 'Enter the first number :',
        },
        {
            name: 'num2',
            type: 'number',
            message: 'Enter the second number :',
        },
        {
            name: 'operator',
            type: 'list',
            message: 'Which operation would you like to perform ?',
            choices: ['add', 'subtract', 'multiply', 'divide'],
        }
    ]);
    if (Number.isNaN(answer.num1) || Number.isNaN(answer.num2)) {
        console.log(chalk.red('Error❗ :Invalid input'));
    }
    else {
        let result = 0;
        switch (answer.operator) {
            case 'add':
                result = answer.num1 + answer.num2;
                console.log(chalk.yellow(`Your answer is : ${result}`));
                break;
            case 'subtract':
                result = answer.num1 - answer.num2;
                console.log(chalk.cyan(`Your answer is : ${result}`));
                break;
            case 'multiply':
                result = answer.num1 * answer.num2;
                console.log(chalk.green(`Your answer is : ${result}`));
                break;
            case 'divide':
                result = answer.num1 / answer.num2;
                console.log(chalk.magenta(`Your answer is : ${result}`));
                if (answer.num2 == 0) {
                    console.log(chalk.red('Error❗ :Cannot divide by zero'));
                }
                break;
        }
    }
}
operation();
