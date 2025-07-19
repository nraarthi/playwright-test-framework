module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'tests/step-definitions/*.ts',
      'tests/hooks/*.ts'
    ],
    paths: ['tests/features/*.feature'],
    format: ['progress'],
    publishQuiet: true
  }
};