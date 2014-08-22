/**
 * Created by mark_000 on 19/08/14.
 */


Kinetic.THREEDLayer = function (config)
{
    Kinetic.Layer.call(this, config); // _super.call
    this.scene = new THREE.Scene();
    this.renderer = new THREE.CanvasRenderer({ canvas: this.getCanvas().getElement() });
}

Kinetic.THREEDLayer


Kinetic.Util.extend(Kinetic.THREEDLayer , Kinetic.Layer);
