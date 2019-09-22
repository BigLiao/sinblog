const Builder = require('./builder');
process.env.NODE_ENV = 'production';

const builder = new Builder();
builder.run();