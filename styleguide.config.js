module.exports = {
  // set your styleguidist configuration here
  title: 'Skaalab Style Guide',
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,
  sections: [
    {
      name: 'Base',
      components: 'src/components/base/[A-Z]*.vue',
    },
    {
      name: 'Components',
      components: 'src/components/[A-Z]*.vue',
    },
  ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: 'expand',
  require: [
    './src/plugins/tailwind/index.ts',
    './src/plugins/buefy.js',
    './src/plugins/fontawesome.ts',
  ],
  // prevent Bulma/Buefy from overriding styles
  styles: {
    Editor: {
      root: {
        [`& .token.property,
& .token.tag,
& .token.boolean,
& .token.number,
& .token.constant,
& .token.symbol`]: {
          alignItems: 'initial',
          backgroundColor: 'initial',
          borderRadius: 'initial',
          display: 'initial',
          fontSize: 'inherit',
          height: 'initial',
          justifyContent: 'initial',
          lineHeight: 'initial',
          paddingLeft: 'initial',
          paddingRight: 'initial',
          whiteSpace: 'inherit',
        },
      },
    },
  },
  mountPointId: 'body',
};
