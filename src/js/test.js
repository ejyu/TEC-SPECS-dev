import { freePc } from './pcs.js';
import { breakPc } from './pcs.js';
import { fixPc } from './pcs.js';
import { printPcStatus } from './pcs.js';
import { initPcs } from './pcs.js';
import { reservePcs } from './pcs.js';
import { scanId } from './pcs.js';


//TEST SUITE MADE ASSUMING numPcs = 5
initPcs();
console.log("Average Day At TEC");

test1();
initPcs();

test2();

function wait(seconds){
    let time = Date.now();
    while(Date.now() < time + seconds*1000){
        ;
    }
}

//basic use and free
function test1(){
    console.log("TEST 1");
    scanId('ABCDE');
    wait(2);
    scanId('ABCDE');
    printPcStatus();
}

//more advanced use
function test2(){
    console.log("TEST 2");
    scanId('12345');
    wait(2);
    scanId('23456');
    wait(2);
    scanId('34567');
    wait(2);
    scanId('45678');
    wait(2);
    scanId('56789');
    wait(2);
    scanId('67890');
    printPcStatus();
    wait(2);
    scanId('12345');
    wait(2);
    scanId('23456');
    wait(2);
    scanId('34567');
    wait(2);
    scanId('45678');
    wait(2);
    scanId('56789');
}
