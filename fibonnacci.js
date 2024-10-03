function fibs(num) {
    let fibSeq = [];
    if (num === 0) return fibSeq;
    if (num === 1) {
        fibSeq = [0];
        return fibSeq;
    } 
    else {
         fibSeq = [0, 1];
        for (let i = 0; i < (num - 2); i++){
            fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
        }
        return fibSeq;
    }
}
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(21));
console.log(fibs(11));



function fibsRec(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let fibSeq = fibsRec(num - 1);

    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);

    return fibSeq;
}

console.log(fibsRec(9));