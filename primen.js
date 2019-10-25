function* getPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
// return prime;
}

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}