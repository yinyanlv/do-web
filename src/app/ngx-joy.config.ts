import {JConfig} from 'src/ngx-joy/types/config';

export const jConfig: JConfig = {
  colorTheme: 'theme-default',
  customScrollbars: true,
  layout: {
    style: 'vertical-layout-1',
    width: 'fullwidth',
    navbar: {
      primaryBackground: 'j-navy-700',
      secondaryBackground: 'j-navy-900',
      folded: false,
      hidden: false,
      position: 'left',
      variant: 'vertical-style-1'
    },
    toolbar: {
      customBackgroundColor: false,
      background: 'j-white-500',
      hidden: false,
      position: 'below-static'
    },
    footer: {
      customBackgroundColor: true,
      background: 'j-navy-900',
      hidden: false,
      position: 'below-fixed'
    },
    sidepanel: {
      hidden: false,
      position: 'right'
    }
  }
};
