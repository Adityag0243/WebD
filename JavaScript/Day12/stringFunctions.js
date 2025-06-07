let str = 'IPL2025';
console.log(str.startsWith('IPL'));  // true
console.log(str.startsWith('ipl'));  // false

console.log(str.endsWith('2025')) // true
console.log(str.endsWith('2025  ')) // true


str = 'mnopqr'

console.log(str.charCodeAt(0))
// 109
undefined
console.log(str.charCodeAt(null))
// 109
undefined
console.log(str.charCodeAt(NaN))
// 109
undefined
console.log(str.charCodeAt(undefined))
// 109