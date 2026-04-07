module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-block-scoping', { throwIfClosureRequired: true }]
  ]
};
