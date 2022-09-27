const os = require('os');

// function memoriaLivre() {
//     return parseInt(os.freemem()/(1024*1024));
// };

const memoria = {
    livre: parseInt(os.freemem()/(1024*1024))
}

console.log(memoria.livre);