/**
 * Created by USRDEL on 3/7/17.
 */
/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  console.log(res.headers.Authorization);
  if(res.headers.Authorization){
    return next() //Tienes permiso
  }else{
    return res.forbidden("No tiene cabecera de autorizacion") //Redirigirle al error 403!
  }


  /*
   // User is allowed, proceed to the next policy,
   // or if this is the last policy, the controller
   if (req.session.authenticated) {
   return next();
   }
   // User is not allowed
   // (default res.forbidden() behavior can be overridden in `config/403.js`)
   return res.forbidden('You are not permitted to perform this action.');
   */
};
