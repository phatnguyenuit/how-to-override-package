const { variable } = require("./module-a");

console.log(`variable`, variable); // 10

// Cache "module-a" with custom "exports"
require.cache[require.resolve("./module-a")].exports = {
  variable: 100,
};

const { variable: variable2 } = require("./module-a");
console.log(`variable2`, variable2); // 100

// still the same
const { variable: variable3 } = require("./module-a");
console.log(`variable3`, variable3); // 100

// back to original { variable: 10 }
// if we delete cache
delete require.cache[require.resolve("./module-a")];
const { variable: variable4 } = require("./module-a");

console.log(`variable4`, variable4); // 10
