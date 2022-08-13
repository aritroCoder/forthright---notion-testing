const { Client } = require('@notionhq/client');
require('dotenv').config();
const connection = require('./db')
const Dump = require('./models/Dump');

const notion = new Client({ auth: process.env.NOTION_KEY });

const readData = async () => {
    await connection();
    const blockId = process.env.NOTION_PAGE_ID;
    console.log("Accessing notion with api key: " + process.env.NOTION_KEY);
    const response = await notion.blocks.children.list({
        block_id: blockId,
    });
    // console.log(JSON.stringify(response));
    response.results.forEach(async(block) =>{
        console.log(block.paragraph || block.image);
        const data = new Dump({data: block });
        await data.save();
        console.log("Data saved successfully");
    })
};

readData();