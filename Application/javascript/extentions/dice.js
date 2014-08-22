/**
 * Created by mark_000 on 19/08/14.
 */

Kinetic.Dice = ( function (_super){
    __extends(Kinetic.Dice , _super)
   function Dice(config)
   {
       _super.call({x:0 , y:0});
       this._config = config;
   }

   return Dice;
})(_view);