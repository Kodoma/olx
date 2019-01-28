const data = [
    2,
    [2, 3, 4, 10, 7],
];
const calculateTickets = (index, input) => {
    let ret = 0;
    // put selected person at the end of the raw
    const orderedRaw = input.slice(index + 1, input.length).concat(input.slice(0, index + 1).map(x => x - 1));
    // get the number of iterations needed to sell target's tickets
    const iterationsNeeded = orderedRaw[orderedRaw.length - 1];
    // iterate raw in order to calculate how many tickets will be unsold
    orderedRaw.forEach((pendingTickets) => {
        const unsoldTickets = pendingTickets - iterationsNeeded;
        if (unsoldTickets > 0) {
            ret += unsoldTickets;
        }
    });
    return ret;
};
console.log(calculateTickets(data[0], data[1]));