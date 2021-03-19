let i = 0;

do {
    if (i % 2 !==0) console.log(i);
    i++;
}while (i <= 5);

let p = 0;

while (p <= 5) {
    if (p % 2 !==0) console.log(p)
    p++;
}

for (let k = 1; k <= 5; k++) {
    if (k % 2 !== 0) console.log(k);
}

let hour = 15;

if (hour >=6 && hour < 12)
    console.log("Good Morning");
else if (hour >= 12 && hour < 18)
    console.log("Good Morning");
else
    console.log("Greetings");

console.log("loops are fun");
console.log("learning JS is fun");
