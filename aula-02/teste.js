import os from 'os';
import fs from 'fs';
import { bytesToMB, bytesToGB } from './convertUnitStorage.js';

setInterval(() => {
    const totalMem = parseFloat(bytesToGB(os.totalmem())).toFixed(2);
    const freeMem = parseFloat(bytesToGB(os.freemem())).toFixed(2);
    const percent = (freeMem/totalMem*100).toFixed(2);

    const memoria = {
        totalMem: `${totalMem} GB`,
        freeMem: `${freeMem} GB`,
        percent: `${percent}%`
    };

    //console.table(memoria);

    // console.log(`Memória total: ${totalMem} GB`);
    // console.log(`Memória livre: ${freeMem} GB`)
    // console.log(`Percentual de memória utilizada: ${(freeMem/totalMem*100).toFixed(2)}%`)

    const dateTime = new Date().toLocaleString();
    const print = `${dateTime} - ${JSON.stringify(memoria)}\n`;

    fs.appendFile(
        './log.txt',
        print,
        'utf-8',
        () => console.log('log inserido'));
}, 1000);