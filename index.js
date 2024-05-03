

const FRIZZ = 'Frizz';
const BUZZ = 'Buzz';

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) {
            output += FIZZ;
        }
        if (i % 5 === 0) {
            output += BUZZ;
        }
        console.log(output || i);
    }
}
console.log('Hello, 2');






