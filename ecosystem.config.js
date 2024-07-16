module.exports = {
  apps: [
    {
      name: "nextjswebiste-app",
      script: "npm",
      args: "start -- --port 3002",
      cwd: "/var/www/html/frontend", // Change this to the correct directory of your Next.js app
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
