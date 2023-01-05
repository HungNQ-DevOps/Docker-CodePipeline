module.exports = {
  apps : [{
    name   : 'reactjs',
    script : 'npm',
    args   : 'start',
    cwd    : '/home/ubuntu/reactjs/source/',
  }],

  deploy : {
    production : {
      key  : '~/Desktop/keypair/pm2.pem',
      user : 'ubuntu',
      host : 'ec2-54-176-170-167.us-west-1.compute.amazonaws.com',
      ref  : 'origin/main',
      repo : 'git@github.com:HungNQ-DevOps/Docker-CodePipeline.git',
      path : '/home/ubuntu/reactjs',
        'pre-deploy-local' : '',
        'post-deploy'      : 'npm install && pm2 reload ecosystem.config.js --env production',
        'pre-setup'        : ''
    }
  }
};
