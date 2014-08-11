/**
 * Created by mark_000 on 27/07/14.
 */

var View = (function (){
   function View(x , y )
   {
       this._layer = new Kinetic.Layer({ x: typeof x == 'undefined' ? 0 : x , y : typeof y == 'undefined' ? 0 : y });

       try
       {
           window.app.stage.add(this._layer);
       }
       catch(e)
       {
           throw new Error('Interface Error : application is undefined and stage is hence unavalible ');
       }
   }

   return View;
})();