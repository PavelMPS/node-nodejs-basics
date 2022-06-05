export const parseArgs = () => {
  const args = process.argv.slice(2);
  let result = "";
  args.forEach((arg, index) => {
    if (index % 2 === 0) {
      result += `${arg.slice(2)} is ${args[index + 1]}, `;
    }
  });
  console.log(result.slice(0, -2));
};

parseArgs();

//Для проверки наберите в консоли:
//Git Bash:
//node args --propName value --prop2Name value2
//Также Вы можете проверить используя команду npm run cli:args
