module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'API',
      script: 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name: 'WEB',
      script: 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '45.76.47.109',
      ref: 'origin/master',
      repo: 'git@github.com:MusNick/pm2_2.git',
      path: '/data/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
