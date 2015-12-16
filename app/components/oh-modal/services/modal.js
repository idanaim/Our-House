/**
 * Created by idannaim on 13/12/15.
 */

import templatesRegistry from '..//templatesRegistry.json'

export class Modal {

  /* @ngInject */
  constructor($uibModal) {
    this.$uibModal       = $uibModal;
    this.defaultSettings = {
      animation: true,
      windowClass: 'custom-modal'
    };

  }

  /**
   * Calls for buildSettings method depending on the modal type and opens with
   * generated settings
   *
   * @param {string} type The type of modal has to start with uppercase
   * @param {object} resolve Data to pass to modal's controller
   */
  open(type, resolve) {
    return this.$uibModal.open(this.buildSettings(type, resolve)).result;
    //.then((data)=>data);
  }

  /**
   * Generates settings based on type. Controller's name, controllerAs and
   * template have to start with uppercase like the type
   *
   * @param {string} type
   * @param {object} resolve Data to pass to modal's controller
   * @returns {*} Generated settings for given modal type: template, controller
   *   and controllerAs.
   */
  buildSettings(type, resolve) {
    let uniqueSettings = {
      templateUrl: templatesRegistry[type],
      controller: `${type}Controller`,
      controllerAs: type,
      resolve: resolve
    };

    return _.defaults(uniqueSettings, this.defaultSettings)
  }
}