/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This is implemented as we want to use biome to lint the code. We have added the linting before the build step.
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
