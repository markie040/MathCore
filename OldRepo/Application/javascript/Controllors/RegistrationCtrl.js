/**
 * Created by mark_000 on 15/08/14.
 */

var RegistrationCtrl = (function (){
   function RegistrationCtrl()
   {
       new application_history().add('Registration');
   }

   RegistrationCtrl.prototype.run = function ()
   {
       this.view = new RegistrationView(this);
       this.view.draw();
   }

   RegistrationCtrl.prototype.register = function ()
   {
       new Re
   }

   return RegistrationCtrl;
})();