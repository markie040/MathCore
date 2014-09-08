/**
 * Created by mark_000 on 16/08/14.
 */

var utilities = {
    screen_adjustment : function () {
        return {
            adjustStyle: function (width)
            {
                width = parseInt(width);
                var stylesheet = document.getElementById('size-stylesheet');
                if (width < 701)
                {
                    $("#size-stylesheet").attr("href", "css/narrow.css");
                } else if ((width >= 701) && (width < 900))
                {
                    $("#size-stylesheet").attr("href", "css/medium.css");
                } else
                {
                    $("#size-stylesheet").attr("href", "css/wide.css");
                }
            }
        }
    }
}