import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({apiKey: 'apikeyhere'});

async function main() {
  const file = await openai.files.create({
    file: fs.createReadStream('./training.jsonl'),
    purpose: "fine-tune",
  });

  console.log(file);
}

main();