module.exports = {
  stories: [
    '../stories/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../components/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',],
}
