L.MapEditor = L.MapEditor || {};

L.MapEditor = L.Class.extend({
    options : {
        
    },
    initialize : function (map, data, options) {
        L.setOptions(this, options);
        this._map = map;
        this._data = data;
        this._options = options;
    }
});