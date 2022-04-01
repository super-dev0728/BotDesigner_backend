/* ============
 * Actions for the category module
 * ============
 *
 * The actions that are available on the
 * category module.
 */

import {
    PROJECT_ADD,
    PROJECT_UPDATE,
    PROJECT_REMOVE,
    PROJECT_LIST,
  } from './action-types';
  
  export function add(payload) {
    return {
      type: PROJECT_ADD,
      payload
    }
  }
  
  export function update(payload) {
    return {
      type: PROJECT_UPDATE,
      payload
    }
  }
  
  export function remove(payload) {
    return {
      type: PROJECT_REMOVE,
      payload
    }
  }
  
  export function list(payload) {
    return {
      type: PROJECT_LIST,
      payload
    }
  }