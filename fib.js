const fibs = n => {
    let fibSeq = [];
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            fibSeq.push(i);
        } else {
            fibSeq.push(fibSeq[i-1]+fibSeq[i-2])
        }

    }

    console.log(fibSeq)
}
