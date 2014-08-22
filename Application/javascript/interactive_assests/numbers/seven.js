/**
 * Created by mark_000 on 21/08/14.
 */


var number_seven = (function (){
    function number_seven()
    {
        this.nodes = [[0 , 44.4],[107.82 , 44.4],[38.48 , 295.54]] // number seven
        this.nodes = [ [129.13 , 0.1],[66.43  , 11.23],[23.95  , 43.46],[2.57   , 87.99],[2.86   , 135.75],[25.42  , 177.93],[71.12  , 205.77],[192.41 , 204.49],[236.65 , 234.77],[258.92 , 277.25],[259.5  , 324.12],[238.11 , 367.48],[194.17 , 399.12],[127.96 , 411.43],[66.43 , 399.12],[24.83 , 367.48],[3.71 , 324.12],[4.03 , 277.25],[26.3 ,  234.77],[71.12 , 204.49],[192.41 , 205.77],[235.48 , 177.93],[256.57 ,135.75],[255.99 , 87.99],[234.31 , 43.46],[191.83 , 11.23],[129.13 , 0.1]] // number eight
        this.nodes = [[]]
    }

    number_seven.prototype.run = function ()
    {
        var duration = 5/this.nodes.length; // makeing the duration same no matter the nodes
        for(var i = 0; i < this.nodes.length; i++)
        {
            var
                var circle = new Kinetic.Circle({
            x:
        })
        }
    }

    number_seven.prototype.run = function ()
    {
        var _this = this;
        var tween = new Kinetic.Tween({
            x:this.nodes[idx][0],
            y:this.nodes[idx][1],
            duration:5/this.nodes.length,
            onFinish: function () {
                if(idx === this.nodes.length) return;
                _this.run(idx++)
            }
        }).play();
    }

    return number_seven;
})();