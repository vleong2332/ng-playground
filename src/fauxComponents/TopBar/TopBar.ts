import { IScope } from 'angular';

import { TopBarController } from './TopBar.controller';
import './TopBar.less';

const templateUrl = require('./TopBar.html');

export function TopBar(): angular.IDirective {
  return {
    templateUrl,
    restrict: 'E',
    controller: TopBarController,
    controllerAs: 'ctrl',
    replace: true,
    scope: {},
    bindToController: {
      appTitle: '@',
    }
  }
}

export interface TopBarScope extends IScope {
  appTitle: string;
}
