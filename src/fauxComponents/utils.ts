/**
 * Conditions:
 * 'function()' => 'unknown'
 * 'function ()' => 'unknown'
 * 'function a()' => 'a'
 */
export function getFunctionName(func: Function): string {
  const funcAsString = func.toString();
  const withoutKeyword = funcAsString.substr('function'.length);
  const openingParenIndex = withoutKeyword.indexOf('(');
  const funcName = withoutKeyword.substr(0, openingParenIndex);
  const trimmedFuncName = funcName.trim();

  return trimmedFuncName || 'unknown';
}
