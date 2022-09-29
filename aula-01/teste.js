const os = require('os');

const totalMem = parseInt(os.totalmem()/1024*1024);
const freeMem = parseInt(os.freemem()/1024*1024);

setInterval(() => {
    const totalMem = parseInt(os.totalmem()/(1024/1024));
    const freeMem = parseInt(os.freemem()/(1024/1024));

    console.log(`Percentual de memória utilizada: ${(freeMem/totalMem*100).toFixed(2)}%`)
}, 1000);