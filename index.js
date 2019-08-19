module.exports = function(bundler) {
  bundler.addAssetType('csv', require.resolve('./CsvAsset'))
}
