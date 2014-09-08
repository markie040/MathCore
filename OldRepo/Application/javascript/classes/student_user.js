/**
 * Created by mark_000 on 10/08/14.
 */


var user_student = (function (){
    function user_student(){
        this.medals = {platinum : 0 , gold : 0 , silver: 0 , bronze : 0};
        this.skill_levels = {reading_writing : 0 , counting : 0 };
    }
    return user_student;
})();