//ép kiểu
let a = prompt("Nhập vào số a: ");
console.log(typeof a); //string
a = Number(a); //ép kiểu string sang number
console.log(typeof a); //number
console.log(a + 1); // 1
//ép kiểu number sang string
let b = 1;
console.log(typeof b); //number
b = String(b); //ép kiểu number sang string
console.log(typeof b); //string
console.log(b + 1); // 11
//ép kiểu boolean sang string
let c = true;
console.log(typeof c); //boolean
c = String(c); //ép kiểu boolean sang string
console.log(typeof c); //string
console.log(c + 1); // true1
//ép kiểu string sang boolean
let d = "true";
console.log(typeof d); //string
d = Boolean(d); //ép kiểu string sang boolean
console.log(typeof d); //boolean
console.log(d); // true
//ép kiểu number sang boolean
let e = 1;
console.log(typeof e); //number
e = Boolean(e); //ép kiểu number sang boolean
console.log(typeof e); //boolean
console.log(e); // true
//ép kiểu boolean sang number
let f = true;
console.log(typeof f); //boolean
f = Number(f); //ép kiểu boolean sang number
console.log(typeof f); //number
console.log(f); // 1
