/**
 * Created by mark_000 on 21/08/14.
 */


window.Math.add = function (a , b) {
    return a + b;
}

window.Math.subtract = function (a , b) {
    return a - b;
}

window.Math.multiply = function (a , b ){
    return a * b;
}

window.Math.division = function (a , b ){
    return a/b;
}


var question = (function (){
    function question(n){
        this.numbers  = n
        this.y = n[2];
        this.b = n[1];
        this.a = n[0];
    }
    return question;
})
var question_generator = (function (){
    function question_generator(opperations , number_range)
    {
        this._opperations = opperations;
        this._number_range = number_range;
        this.questions = new Array();
    }


    question_generator.prototype.generate(n)
    {

    }

    return question_generator;
})();

var solver = (function (){
    function solver ()
    {

    }

    solver.findTheOpperation = function (a , b , y)
    {
        var opperations = [Math.add(b , a) , Math.subtract(b , a ) , Math.division( b , a) , Math.multiply(b , a)]
        var ans = new Array();

        for(var i = 0 ; i < opperations.length; i++)
        {
            if(y === opperations[i])
            {
                ans.push('right');
            }
        }

        return ans;
    }

    return solver;
})();