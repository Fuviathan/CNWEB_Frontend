/** @type {import('next').NextConfig} */
// const nextConfig = {};
const withTM = require('next-transpile-modules')(['react-haiku']);
module.exports = withTM({});
// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   output: "standalone",
// }

// const withTM = require('next-transpile-modules')(['react-haiku']);
// module.exports = withTM(nextConfig);