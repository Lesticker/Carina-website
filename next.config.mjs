let userConfig = undefined;
try {
  // Try to import ESM user config
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // Fallback to CJS user config
    userConfig = await import('./v0-user-next.config');
  } catch (innerError) {
    // Ignore
  }
}

/** @type {import('next').NextConfig} */
let nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
  webpackBuildWorker: true,
  parallelServerBuildTraces: true,
  parallelServerCompiles: true,
  serverActions: {} // correct format
  },
};

if (userConfig) {
  const config = userConfig.default || userConfig;
  for (const key in config) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
