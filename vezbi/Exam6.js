const wait = (f) => {
    let args = [];
   
    return {
        add(newValue) {
            args.push(newValue);
        },
        remove(newValue){
            args = args.filter(arg => arg !== newValue);
        },
        calc() {
            return f(args);
        }
    };
};
let sum = (array)=> array.reduce((p,n)=>p+n, 0)

let sum_wait = wait(sum)

sum_wait.add(10)

sum_wait.add(100)

sum_wait.add(15)

sum_wait.remove(10)

console.log(sum_wait.calc())