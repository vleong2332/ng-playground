import { IScope } from 'angular';

import { InstructionController } from './Instruction.controller';
import './Instruction.less';

const templateUrl = require('./Instruction.html');

export function Instruction(): angular.IDirective {
  return {
    templateUrl,
    restrict: 'E',
    bindToController: true,
    controller: InstructionController,
    controllerAs: 'ctrl',
    replace: true,
    scope: {
    }
  }
}
