// const withPlugins = require("next-compose-plugins"),
//   isProd = process.env.NODE_ENV === "production",
//   gitCommitHash = process.env.CODEBUILD_RESOLVED_SOURCE_VERSION,
//   domainUrl = process.env.DOMAIN_URL;

const { ModelTrainingRounded } = require('@mui/icons-material')

// const nextConfig = {
//   /* config options here */
  
//   generateBuildId: async () => {
//     return gitCommitHash;
//   },
//   env: {
//     API_URL: process.env.API_URL,
//     DOMAIN: process.env.DOMAIN,
//     DOMAIN_URL: domainUrl ? domainUrl : "",
//     VERSION: process.env.VERSION,
//     SERVER_FILES: process.env.SERVER_FILES,
//     SERVER_SOCKET: process.env.SERVER_SOCKET,
//     STATIC_FOLDER: isProd && gitCommitHash ? `static` : "static",
//   },
// };

// module.exports = withPlugins([], nextConfig);


/** @type {import('next').NextConfig} */
const nextConfig={
  reactStrictMode:true,
}
module.exports =nextConfig