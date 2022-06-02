export const parseEnv = () => {
    Object.entries(process.env).map((elem) => {
        if (!elem[0].indexOf("RSS_")) {
            console.log(`${elem[0]}=${elem[1]}`);
        }
    });
};

parseEnv();
