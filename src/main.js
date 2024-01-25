import './css/index.css'
console.log('main.js');
console.log('111');
console.log('222');
console.log('333');

let msg = function (...args) {
    console.log('args',args);
}
msg(1,2,3,4)