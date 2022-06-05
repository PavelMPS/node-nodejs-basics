export const parseEnv = () => {
  let result = "";
  Object.entries(process.env).map((elem) => {
    if (elem[0].indexOf("RSS_") === 0) {
      result += `${elem[0]}=${elem[1]}; `;
    }
  });
  console.log(result.slice(0, -2));
};

parseEnv();

//Для проверки наберите в консоли:
//RSS_name1=value1 RSS_name2=value2 node env
