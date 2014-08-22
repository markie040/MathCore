/**
 * Created by mark_000 on 31/07/14.
 */

var user = (function (){
  function user()
  {
      this.firstname = '';
      this.lastname  = '';
      this.user_uid  = null;
      this.password  = '';
  }

  user.prototype.getScreenName = function ()
  {
      return this.firstname + ' ' + this.lastname;
  }

  user.prototype.createUser = function()
  {

  }

  user.prototype.isAdmin = function () {

  }

  return user;
})();