module.exports = function override(config) {
    config.resolve.fallback = {
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/")
    };
    return config;
  };
  