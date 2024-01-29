import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({apiKey: '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'});

// async function yes() {
//   const file = await openai.files.create({
//     file: fs.createReadStream('./training.jsonl'),
//     purpose: "fine-tune",
//   });

//   console.log(file);
// }

// yes();

// async function fineTune() {
//     const finetune = await openai.fineTuning.jobs.create({
//         training_file: "file-4bLXL3xb8cc3sj6Ht4vZWzgP",
//         model: 'gpt-3.5-turbo'
//     })
// console.log(finetune)
// }

// fineTune();

async function main() {
    const fineTune = await openai.fineTuning.jobs.listEvents('ftjob-ud5ZgkcyyvPppeYhbzC7d9aV');
    console.log(fineTune)
}

main();