import * as camelCase from 'lodash/camelCase';
import * as flow from 'lodash/flow';

import { AppRoot, AppRootController } from './AppRoot';
import { TopBar, TopBarController } from './TopBar';
import { Instruction, InstructionController } from './Instruction';
import { getFunctionName } from './utils';

const directives = [
  AppRoot,
  TopBar,
  Instruction,
];

const controllers = [
  AppRootController,
  TopBarController,
  InstructionController,
];

export function registerTo(module: angular.IModule): void {
  directives.forEach(directive => {
    const getName = flow([getFunctionName, camelCase ]);
    module.directive(getName(directive), directive);
  });

  controllers.forEach(controller => {
    const getName = flow([getFunctionName]);
    module.controller(getName(controller), controller);
  });
}
