const { Asset } = require ('parcel-bundler');
const parse = require('csv-parse/lib/sync');
const path = require('path');

class CsvAsset extends Asset {
  constructor(name,options) {
    super(name,options);
    this.type = 'js';
  }

  async generate() {

    let imported = parse(this.contents,{
      columns: true
    });

    let code = `module.exports = ${
      JSON.stringify(imported)
    };`;

    return code;

  }
}

module.exports = CsvAsset;
