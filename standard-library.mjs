import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question(`nama kamuu siapaa??` , nama => {
    console.log(`hii ${nama}!`);
    input.close();
});