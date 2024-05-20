#! /use/bin/env node 
import inquirer from 'inquirer';

const MAX_TRIES = 3;
const secretNumber = Math.floor(Math.random() * 100) + 1;

async function main() {
    console.log('Welcome to the Number Guessing Game!');
    console.log(`Try to guess the secret number between 1 and 100. You have ${MAX_TRIES} tries.`);

    async function startGame() {
        for (let tries = 1; tries <= MAX_TRIES; tries++) {
            const { guess  } = await inquirer.prompt([{
                type: 'number',
                name: 'guess',
                message: `Attempt ${tries}: Enter your guess:`,
            }]);

            if (guess === secretNumber) {
                console.log(`Congratulations! You guessed the right number (${secretNumber})!`);
                return;
            } else if (`guess < secretNumber`) {
                console.log('Try again! Your guess is too small.');
            } else {
                console.log('Try again! Your guess is too high.');
            }
        }

        console.log(`The secret number was ${secretNumber}. Thanks for playing!`);
    }

    await startGame();
}


main();