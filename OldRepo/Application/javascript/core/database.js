/**
 * Created by mark_000 on 18/08/14.
 */

var database = (function (){
  function database(type)
  {
      this.stratagay = type == 'session' ? window.sessionStorage : window.localStorage;
  }

  database.prototype.insert = function (id , data)
  {
      this.stratagay.setItem(id, JSON.stringify(data));
  }

  database.prototype.select = function (id)
  {
      if (this.stratagay.getItem(String(id)) === null) {
          return false;
      }
      else
      {
          return this.getFromStorage(id);
      }
  }

  database.prototype.getFromStorage = function (id) {
        var json = jQuery.parseJSON(localStorage.getItem(id));
        return json;
  };

  database.prototype.clear = function (id) {
      this.stratagay.clear();
  };

  return database;
})();