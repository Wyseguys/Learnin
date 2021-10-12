module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'autoprefixer ': {
      browsers: ['last 10 versions']
    }
  },
})