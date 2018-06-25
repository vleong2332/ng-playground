import * as angular from 'angular';
import { registerTo as registerComponentsTo } from './fauxComponents';

import './index.less';

const MainApp: angular.IModule = angular.module('MainApp', []);

registerComponentsTo(MainApp);

export { MainApp };
