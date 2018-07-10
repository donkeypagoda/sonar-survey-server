module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/sonar-survey'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
