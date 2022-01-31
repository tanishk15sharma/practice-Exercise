// ex1;

// const strlength = (name) => {
//   callLength(name);
// };

// const callLength = (name) => {
//   console.log(name.length);
// };
// strlength("tanishk");

// ex2

// const strLength = (name, cb1) => {
//   const length = name.length;
//   cb1(length);
// };
// const cb1 = (length) => {
//   console.log(length);
// };
// strLength("tanishk", cb1);

// ex3;

// const willThanosKillMe = (name, isAlive, isDead) => {
//   if (name.length % 2 === 0) {
//     isAlive();
//   } else {
//     isDead();
//   }
// };
// const isDead = () => console.log("on no dead");
// const live = () => console.log("on yes live");
// willThanosKillMe("tanish", live, isDead);

// ex4

// const delayMsg = (msg, delay) => {
//   setTimeout(() => {
//     console.log(msg);
//   }, delay);
// };

// delayMsg("ruk 3 sec", 3000);

// ex6

// 6.1
// const delayMsg = (msg, time) => {
//   setInterval(() => {
//     console.log(msg);
//   }, time);
// };

// delayMsg("tanishk", 2000);

// 6.2
// const printMsg = (num) => {
//   const id = setInterval(() => {
//     if (num === 0) {
//       console.log("bang bang!!");
//       clearInterval(id);
//     } else {
//       console.log(num);
//       num = num - 1;
//     }
//   }, 1000);
// };
// printMsg(5);
