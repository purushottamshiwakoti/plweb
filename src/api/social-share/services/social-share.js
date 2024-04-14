'use strict';

/**
 * social-share service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::social-share.social-share');
