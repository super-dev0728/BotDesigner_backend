/* ============
 * Actions for the category module
 * ============
 *
 * The actions that are available on the
 * category module.
 */

import {
    SCRAPER_ADD,
    SCRAPER_UPDATE,
    SCRAPER_REMOVE,
    SCRAPER_LIST,
  } from './action-types';
  
  export function add(payload) {
    return {
      type: SCRAPER_ADD,
      payload
    }
  }
  
  export function update(payload) {
    return {
      type: SCRAPER_UPDATE,
      payload
    }
  }
  
  export function remove(payload) {
    return {
      type: SCRAPER_REMOVE,
      payload
    }
  }
  
  export function list(payload) {
    return {
      type: SCRAPER_LIST,
      payload
    }
  }