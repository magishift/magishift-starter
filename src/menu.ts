import { IMenu } from '@mandalalabs/magishift.core/dist/setting/menu/interfaces/menu.interface';
import { DEMO_MODULE_ENDPOINT } from './modules/demoModule/interfaces/demoModule.const';

export const menuItems: IMenu[] = [
  {
    title: 'Demos',
    icon: 'keyboard_arrow_right',
    items: [
      {
        href: '/crud/' + DEMO_MODULE_ENDPOINT,
        title: 'Demo Module',
      },
    ],
  },
];
