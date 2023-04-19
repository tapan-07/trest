const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '7000',
    Meta_WA_VerifyToken: '1234',
    Meta_WA_accessToken: 'EAAjYfehbzecBAKzH1zeouKVksZCV3qwxLa95a4trdlvDMmudmLZCxFxHF2m52vbI974ho0ZAyuqtNzruvIGgOtLb7thLxX8yTvTrEJaOnYv3EIaflYfOfTMUZCzbOGQO2vz32OZCZBAbE9VdZB4Q6zyFmiSXHSNmuFdAd5tgTvAQDuVZBh9moStWtjmQD9M1LCzE7MCjszN2IwZDZD',
    Meta_WA_SenderPhoneNumberId: '121277524247116',
    Meta_WA_wabaId: '101580719564155',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};


