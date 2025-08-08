const { FlatCompat } = require('@eslint/eslintrc')
const compat = new FlatCompat()

module.exports = {
  extends: compat.extends('eslint.config.js'),
}
