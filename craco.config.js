module.exports = {
  style: {
    sass: {
      loaderOptions: {
        // See https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
        // Prefer Dart Sass ('sass') over 'node-sass' if both are installed
        implementation: require('sass')
      }
    }
  }
}