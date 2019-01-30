'use strict';

/**
 * Agent.js controller
 *
 * @description: A set of functions called "actions" for managing `Agent`.
 */

module.exports = {

  /**
   * Retrieve agent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.agent.search(ctx.query);
    } else {
      return strapi.services.agent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a agent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.agent.fetch(ctx.params);
  },

  /**
   * Count agent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.agent.count(ctx.query);
  },

  /**
   * Create a/an agent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.agent.add(ctx.request.body);
  },

  /**
   * Update a/an agent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.agent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an agent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.agent.remove(ctx.params);
  }
};
