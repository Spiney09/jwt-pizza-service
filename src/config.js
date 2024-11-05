module.exports =  {
    jwtSecret: 'superSecretSettings',
    db: {
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'spiney09',
        database: 'pizza',
        connectTimeout: 60000,
      },
      listPerPage: 10,
    },
    factory: {
      url: 'https://pizza-factory.cs329.click',
      apiKey: '4d929265edcb43d28486d4ac18abb1e5',
    },
 };