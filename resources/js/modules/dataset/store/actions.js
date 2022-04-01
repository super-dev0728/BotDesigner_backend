/* ============
 * Actions for the category module
 * ============
 *
 * The actions that are available on the
 * category module.
 */

import {
    DATASET_ADD,
    DATASET_UPDATE,
    DATASET_REMOVE,
    DATASET_LIST,
  } from './action-types';
  
  export function add(payload) {
    return {
      type: DATASET_ADD,
      payload
    }
  }
  
  export function update(payload) {
    return {
      type: DATASET_UPDATE,
      payload
    }
  }
  
  export function remove(payload) {
    return {
      type: DATASET_REMOVE,
      payload
    }
  }
  
  export function list(payload) {
    return {
      type: DATASET_LIST,
      payload
    }
  }