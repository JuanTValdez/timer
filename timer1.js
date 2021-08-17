args = process.argv;
const array = args.slice(2, args.length);

for (let i = 0; i < array.length; i++) {
  if (parseInt(array[i]) >= 0) {
    setTimeout(() => {
      console.log("Beep at: " + array[i] + " seconds");
      process.stdout.write("\x07");
    }, array[i] * 1000);
  } else {
    console.log("Only positive integers are accepted as input");
    console.log(array[i] + " is not valid input\n");
  }
}
