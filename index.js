// EXAMPLE 1 - Check if a Date is valid using JavaScript

function dateIsValid(date) {
  return date instanceof Date && !isNaN(date);
}

console.log(dateIsValid(new Date('2022-03-36'))); // 👉️ false
console.log(dateIsValid(new Date())); // 👉️ true
console.log(dateIsValid(new Date('2022-03-24'))); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Date is valid using Object.toString()

// function dateIsValid(date) {
//   return (
//     Object.prototype.toString.call(date) === '[object Date]' &&
//     !isNaN(date)
//   );
// }

// console.log(dateIsValid(new Date('2022-03-36'))); // 👉️ false
// console.log(dateIsValid(new Date())); // 👉️ true
// console.log(dateIsValid(new Date('2022-03-24'))); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Date is valid using duck-typing

// function dateIsValid(date) {
//   if (
//     typeof date === 'object' &&
//     date !== null &&
//     typeof date.getTime === 'function' &&
//     !isNaN(date)
//   ) {
//     return true;
//   }

//   return false;
// }

// console.log(dateIsValid(new Date('2022-03-36'))); // 👉️ false
// console.log(dateIsValid(new Date())); // 👉️ true
// console.log(dateIsValid(new Date('2022-03-24'))); // 👉️ true
// console.log(dateIsValid([])); // 👉️ true
// console.log(dateIsValid({})); // 👉️ true
// console.log(dateIsValid(null)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Validate a Date formatted as YYYY-MM-DD in JavaScript

// function dateIsValid(dateStr) {
//   const regex = /^\d{4}-\d{2}-\d{2}$/;

//   if (dateStr.match(regex) === null) {
//     return false;
//   }

//   const date = new Date(dateStr);

//   const timestamp = date.getTime();

//   if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
//     return false;
//   }

//   return date.toISOString().startsWith(dateStr);
// }

// console.log(dateIsValid('2022-01-24')); // 👉️ true
// console.log(dateIsValid('2022-01-35')); // 👉️ false
// console.log(dateIsValid('hello')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 5 - Validate a Date formatted as DD/MM/YYYY in JavaScript

// // ✅ Validate date formatted as `DD/MM/YYYY`
// function dateIsValid(dateStr) {
//   const regex = /^\d{2}\/\d{2}\/\d{4}$/;

//   if (dateStr.match(regex) === null) {
//     return false;
//   }

//   const [day, month, year] = dateStr.split('/');

//   // 👇️ format Date string as `yyyy-mm-dd`
//   const isoFormattedStr = `${year}-${month}-${day}`;

//   const date = new Date(isoFormattedStr);

//   const timestamp = date.getTime();

//   if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
//     return false;
//   }

//   return date.toISOString().startsWith(isoFormattedStr);
// }

// console.log(dateIsValid('18/01/2022')); // 👉️ true
// console.log(dateIsValid('35/01/2022')); // 👉️ false
// console.log(dateIsValid('hello')); // 👉️ false
