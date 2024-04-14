'use strict';

/**
 * news-seo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-seo.news-seo');
