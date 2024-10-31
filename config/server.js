module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: parseInt(process.env.PORT, 10) || 1337, // Use Render's `PORT` or fallback to 1337 for local development
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
