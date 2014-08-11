/**
 * Created by mark_000 on 10/08/14.
 */

var _controller = ( function (_super){
   __extends (_controller , _super)
   function controller ()
   {
       this.init();
   }

   controller.prototype.init = function ()
   {
        if(typeof user === 'undefined')
        {
            throw new Error("No user object avalible redirecting to the start_screen");

            if(this.get_controller("startscreen") != null) // Navigation class not used as the path needs to remain intact for user login
            {
                new this.get_controller("startscreen")().run();
            }

            return;
        }
   }

   controller.prototype.get_controller = function (controller_path) {

       if(typeof controller_path === 'undefined' || controller_path === null )
       {
           throw new Error("No controller path set")
           return null;
       }

       if(typeof window[controller_path] === 'function')
       {
           return window[controller_path];
       }
       else
       {
           throw new Error(controller_path + '' + typeof window[controller_path] );
           return null;
       }
   }

   return controller;
})(model);