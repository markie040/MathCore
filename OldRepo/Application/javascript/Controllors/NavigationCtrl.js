/**
 * Created by mark_000 on 20/08/14.
 */

var NavigationCtrl = (function (_super){
    __extends(NavigationCtrl , _super)
    function NavigationCtrl()
    {
        _super.call(this);
        this.tree = new BinarySearchTree();
    }

    NavigationCtrl.prototype.run = function ()
    {
        var node_uid = app.session.select('navigation_uid');  // used as is going back through the navigation node system last id is needed
        var action   = node_uid === false ? 2 : 1;
            node_uid = node_uid === false ? 0 : node_uid[node_uid.length - 1];
        this.update_and_change_navigation(false , node_uid);
    };

    NavigationCtrl.prototype.update_and_change_navigation = function (action , uid)
    {
        switch(action)
        {
            case 1 : app.session.insert('navigation_uid' , app.session.select('navigation_uid').remove(app.session.select('navigation_uid').length - 1)); break; // remove from array
            case 2 : app.session.insert('navigation_uid' , app.session.select('navigation_uid').push(uid)); break; // append to array
            default :
                throw new Error('Problem in Navigation Controller boolean action has return a third option !!');
                break;
        }

        this.get_level(action , uid);
    }

    NavigationCtrl.prototype.get_level = function (action , uid)
    {
        if(typeof this.view != 'undefined')
        {
            this.view.remove();
        }

        this.view = new NavigationView(this.tree.search(uid));
        this.view.setEntrance = action; // enter left or right depending on the action;
    };

})(_controller);