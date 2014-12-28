L.MapEditor = L.MapEditor || {};

L.MapEditor = L.Class.extend({
    statics : {
    },
    options : {
        
    },
    initialize : function (map, data, options) {
        L.setOptions(this, options);
        this._map = map;
        this._data = data;
        this._options = options;
        this.initializerLesControles(this._map);
    },
    initializerLesControles : function(map){
        // https://leanpub.com/leaflet-tips-and-tricks/read#leanpub-auto-leafletdraw
        // https://github.com/Leaflet/Leaflet.draw
        
        // TODO cherche en base les coordonnées sauvegardées et les ajouter à la FeatureGroup
        var polygon = new L.Polygon([
                        [51.51, -0.1],
                        [51.5, -0.06],
                        [51.52, -0.03]
                    ]);
//        polygon.editing.enable();

        var drawnItems = new L.FeatureGroup([polygon]);
        map.addLayer(drawnItems);
        
        var MyCustomMarker = L.Icon.extend({
            options: {
                shadowUrl: null,
                iconAnchor: new L.Point(12, 12),
                iconSize: new L.Point(44, 44),
                iconUrl: 'image/marker.png'
            }
        });
        
        var drawControl = new L.Control.Draw({
            draw: {
                    polygon: {
                        shapeOptions: {
                            color: 'red'
                        },
                    },
                    marker: {
                        icon: new MyCustomMarker()
                    }
                },
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl);

        map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;
            if (type === 'marker') {
                alert("Latitude : " + layer._latlng.lat + ", longitude : " + layer._latlng.lng);
            }
            drawnItems.addLayer(layer);
        });
        map.on('draw:edited', function (e) {
            var layers = e.layers;
            layers.eachLayer(function (layer) {
                for (var i in layer._latlngs) {
                    alert("Latitude : " + layer._latlngs[i].lat + ", longitude : " + layer._latlngs[i].lng);
                }

                //do whatever you want, most likely save back to db
            });
        });

       
    }
});