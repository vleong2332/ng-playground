import { IScope } from 'angular';

import { TopBarController } from './TopBar.controller';
import './TopBar.less';

const templateUrl = require('./TopBar.html');

export function TopBar(): angular.IDirective {
  return {
    templateUrl,
    restrict: 'E',
    bindToController: true,
    controller: TopBarController,
    controllerAs: 'ctrl',
    replace: true,
    scope: {
      appTitle: '<'
    }
  }
}

export interface TopBarScope extends IScope {
  appTitle: string;
}
