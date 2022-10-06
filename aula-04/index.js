import os from 'os';
import fs from 'fs';

const userInfo = os.userInfo();
const print = JSON.stringify(userInfo, null, 1);

fs.appendFile(
    './user.txt',
    print,
    'utf-8',
    () => console.log('Usuário inserido')
);