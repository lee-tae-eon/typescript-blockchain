"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = exports.init = void 0;
// @ts-check
/**
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 * **/
function init(config) {
    return true;
}
exports.init = init;
/**
 * @param {number} code
 * @returns {number}
 */
function exit(code) {
    return code + 1;
}
exports.exit = exit;
