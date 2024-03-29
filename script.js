let inp = null;

function reset() {
    document.getElementById("fib").textContent = "";
    inp = null;
}

function fibo(n) {
    let fibarray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibarray.push(fibarray[i - 2] + fibarray[i - 1]);
    }
    return fibarray.join("\n");
}

function resfibo() {
    if (inp == null) {
    inp = prompt("Enter a number");
    inp = inp.toString();
    }
    if (!isNaN(inp) && inp !== null && parseInt(inp) > 0) {
        let final_fiboseries = fibo(parseInt(inp));
        document.getElementById("fib").textContent = `Fibonacci series:\n${final_fiboseries}`;
    } else {
        alert("Please enter a valid positive integer greater than 0");
    }
}

function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

function resfact() {
    if (inp == null) {
    inp = prompt("Enter a number");
    inp = inp.toString();
    }
    if (!isNaN(inp) && inp !== null) {
        let res = fact(parseInt(inp));
        alert(`Factorial of ${inp} is ${res}`);
        document.getElementById("fib").textContent = `Factorial: ${res}`;
    } else {
        alert("Please enter a valid positive integer");
    }
}

function isprime(n) {
    n = parseInt(n);
    if (isNaN(n) || n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function resprime() {
    if (inp == null) {
    inp = prompt("Enter a positive integer to check whether it's prime");
    inp = inp.toString();
    }
    if (!isNaN(inp)) {
        if (parseInt(inp) === 1) {
            alert("Neither prime nor composite");
            document.getElementById("fib").textContent = `${inp} is neither prime nor composite`;
        } else if (parseInt(inp) === 2) {
            alert("Prime number!!!");
            document.getElementById("fib").textContent = `${inp} is the smallest prime number :)`;
        } else if (parseInt(inp) > 2) {
            if (isprime(inp)) {
                alert(`${inp} is Prime!!!`);
                document.getElementById("fib").textContent = `${inp} is a Prime number. Yayyy! :)`;
            } else {
                alert(`${inp} is NOT prime`);
                document.getElementById("fib").textContent = `${inp} is NOT a Prime Number :( `;
            }
        }
    } else {
        alert("Enter a valid positive integer");
        document.getElementById("fib").textContent = "Enter something operable ; TRY AGAIN!";
    }
}

function sumd(inp) {
    let str = inp.toString();
    let tsum = 0;
    let len = str.length;

    for (let i = 0; i < len; i++) {
        tsum += parseInt(str[i]);
    }

    return tsum;
}

function ressum() {
    if (inp == null) {
        inp = prompt("Enter a positive integer to display sum of its digits:");
        inp = inp.toString();
    }
    if (!isNaN(inp) && inp !== null) {
        let result = sumd(inp);
        alert(`sum of digits in ${inp} is ${result}`);
        document.getElementById("fib").textContent = `${inp} \n Sum of Digits : ${result}`;
    } else {
        alert("Enter a valid positive integer");
        document.getElementById("fib").textContent = "Enter something operable";
    }
}

function factors(inp) {
    inp = parseInt(inp);
    let d = 2;
    let list = [];
    while (d <= inp) {
        if (inp % d == 0) {
            list.push(d.toString());
            inp /= d;
        } else {
            d++;
        }
    }
    return list;
}

function listfact() {
    if (inp == null) {
    inp = prompt("Enter a positive integer to display its factors:");
    inp = inp.toString();
    }
    if (inp === null) {
        alert("Please enter a valid positive integer");
        return;
    } else if (parseInt(inp) <= 1) {
        alert(`Enter a valid positive integer`);
        return;
    } else if (!isNaN(inp) && inp !== null) {
        const result = factors(inp);
        document.getElementById("fib").textContent = `Prime Factors of ${inp} is \n
        [ ${result.join(" ,")} ]`;
    } else {
        alert("Enter a valid positive integer");
        document.getElementById("fib").textContent = "Enter something operable ; TRY AGAIN!";
    }
}
