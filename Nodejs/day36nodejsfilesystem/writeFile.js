// const { error } = require("console");
const fs = require("fs");


fs.writeFile("./sample.txt", "kishore", (err) => {
    if(err){
        console.error("Error reading the file", err);
        return
    }
    console.log("File written successfully")
})


const fs = require("fs")

fs.writeFile("./KISHORE.txt", "kishore", (error) => {
    if(error){
        console.error("error message",error);
        return
    }
    console.log ("file written successfully")
})