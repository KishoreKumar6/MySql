const fs = require("fs");


fs.appendFile("./sample.txt", "\n arun", (err) => {
    if(err){
        console.error("Error reading the file", err);
        return
    }
    console.log("File appended successfully")
})