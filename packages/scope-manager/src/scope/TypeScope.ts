import { TSESTree } from '@typescript-eslint/experimental-utils';
import { Scope } from './Scope';
import { ScopeBase } from './ScopeBase';
import { ScopeType } from './ScopeType';
import { ScopeManager } from '../ScopeManager';

class TypeScope extends ScopeBase<
  ScopeType.type,
  TSESTree.TSInterfaceDeclaration | TSESTree.TSTypeAliasDeclaration,
  Scope
> {
  constructor(
    scopeManager: ScopeManager,
    upperScope: TypeScope['upper'],
    block: TypeScope['block'],
  ) {
    super(scopeManager, ScopeType.type, upperScope, block, false);
  }
}

export { TypeScope };
