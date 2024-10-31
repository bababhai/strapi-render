module.exports = ({ env }) => ({
  host: '0.0.0.0', // Explicitly set the host to 0.0.0.0 as Render requires
  port: parseInt(process.env.PORT, 10) || 1337, // Use Render's PORT or default to 1337
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
