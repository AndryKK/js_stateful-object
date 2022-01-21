'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        if (typeof (action.keysToRemove) === 'object') {
          for (const key of action.keysToRemove) {
            delete state[key];
          }
        } else {
          delete state[action.keysToRemove];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw Error;
    }
  }

  return state;
}

module.exports = transformState;
