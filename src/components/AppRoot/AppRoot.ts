import { AppRootController } from './AppRoot.controller';
import './AppRoot.less';

const templateUrl = require('./AppRoot.html');

export function AppRoot(): ng.IDirective {
  return {
    bindToController: true,
    controller: AppRootController,
    controllerAs: 'ctrl',
    restrict: 'E',
    replace: true,
    templateUrl,
  }
}
