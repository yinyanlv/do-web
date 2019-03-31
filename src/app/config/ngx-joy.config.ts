import {JConfig} from 'src/ngx-joy/types/config';

export const jConfig: JConfig = {
  colorTheme: 'theme-default',
  customScrollbars: true,
  layout: {
    style: 'vertical-layout-default',
    width: 'fullwidth',
    navbar: {
      primaryBackground: 'j-navy-700',
      secondaryBackground: 'j-navy-900',
      folded: false,
      hidden: false,
      position: 'left',
      variant: 'vertical-default'
    },
    toolbar: {
      customBackgroundColor: false,
      background: 'j-white-500',
      hidden: false,
      position: 'below-fixed'
    },
    footer: {
      customBackgroundColor: true,
      background: 'j-navy-900',
      hidden: false,
      position: 'below-static'
    }
  }
};
