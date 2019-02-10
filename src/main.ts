import { MagiApp } from '@mandalalabs/magishift.core/dist/bootstrap';
import { ConfigLoaderHelper } from '@mandalalabs/magishift.core/dist/config/config.helper';
import chalk from 'chalk';
import { existsSync } from 'fs';
import { menuItems } from './menu';
import { DemoModule } from './modules/demoModule/demoModule.module';

const modules = [DemoModule];

const envPath =
  process.env.NODE_ENV === 'production'
    ? `${process.cwd()}/.env.local.prod`
    : existsSync(`${process.cwd()}/.env.local`)
    ? `${process.cwd()}/.env.local`
    : `${process.cwd()}/.env`;

console.info(chalk.green('Load .env path: "' + envPath + '"'));

const config = ConfigLoaderHelper(
  'Magishift Starter Back Office',
  'Magishift Starter API Server',
  menuItems,
  envPath,
);

MagiApp(modules, config);
