let count = 100;
const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (const frame of array) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, count += 200);
};