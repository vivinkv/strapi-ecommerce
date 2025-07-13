/**
 * A set of functions called "actions" for `web`
 */

export default {
  login: async (ctx, next) => {
    try {
      const {phone}=ctx.request.body;

      const userExist = await strapi.documents('api::customer.customer').findFirst({
        filters:{
          phone_number:phone
        }
      })

      if(!userExist){
        ctx.status = 404;
        ctx.body = {
          message:"Invalid Credentials"
        }
      }

    } catch (err) {
      ctx.status=500;
      ctx.body = err;
    }
  }
};
