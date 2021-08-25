const args = process.argv;
const array = args.slice(2);

const beep = function (num) {
  setTimeout(() => {
    console.log("Beep at: " + num + " seconds");
    process.stdout.write("\x07");
  }, num * 1000);
};

for (let item of array) {
  if (item >= 0 && !isNaN(item)) {
    beep(item);
  }
}
