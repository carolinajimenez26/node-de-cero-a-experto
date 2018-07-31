const fs = require('fs');

let multiply = (base, from, to) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(from) || !Number(to)) 
            return reject(`${base} or ${from} or ${to} is not a number`); 

        let data = '';

        for (let i = from; i <= to; i++) {
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