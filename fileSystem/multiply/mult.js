const fs = require('fs');

let multiply = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) 
            return reject(`${base} is not a number`);

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`${base}.txt`);
            }
        });
    });
};

module.exports = {
    multiply
}