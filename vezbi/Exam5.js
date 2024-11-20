//first solution without anything
const func = (arr) => {
    let odd = 0;
    let even = 0;
    for (let i of arr) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }
    return Math.abs(odd - even);

};
//with Reduce only
const func1 = (array) => {
    const { odd, even } = array.reduce((sum, num) => {
        if (num % 2 === 0) {
            sum.even += num;
        } else {
            sum.odd += num;
        }
        return sum;
    },
        { odd: 0, even: 0 });

    return Math.abs(odd - even);
};
// reduce and filter
const func2 = (array) => {
    const oddSum = array.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    const evenSum = array.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    return Math.abs(oddSum - evenSum);
};

console.log(func([2, 8, 7, 5]));
console.log(func1([2, 8, 7, 5]));
console.log(func2([2, 8, 7, 5]));