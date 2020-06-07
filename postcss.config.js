module.exports = {
	plugins: [
		require('autoprefixer'),
		...(process.env.HUGO_ENVIRONMENT == 'production' ? [
			require('cssnano')({ preset: 'default' })
		] : [])
	]
};
