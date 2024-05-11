#!/usr/bin/env node

import readline from "node:readline";

async function checkOpenAIEnvs () {

    if (process.env.OPENAI_API_KEY === undefined) {

        // Prompt the user for input
        let openAIKey = await new Promise((resolve, reject) => {

            const readLineInterface = readline.createInterface({
                "input": process.stdin,
                "output": process.stdout
            });

            readLineInterface.question(
                "We have not found any OPENAI_API_KEY environment variable. Please enter your OpenAI api key (OPENAI_API_KEY): ",
                (answer) => {

                    // Close the readline interface
                    readLineInterface.close();
                    resolve(answer);

                }
            );

        });
        if (!openAIKey) {

            throw new Error("Please set the OPENAI_API_KEY environment variable and retry.");

        } else {

            process.env.OPENAI_API_KEY = openAIKey;

        }

    }
    return true;

}

export {
    checkOpenAIEnvs
};
