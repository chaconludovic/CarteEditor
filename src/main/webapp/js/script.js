$(function() {
    // Setup map
    var map = L.map('map').setView([48.8534100, 2.3488000], 4);
    mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

    // =====================================================
    // =============== mapEditor ============================
    // =====================================================
    var mapEditorOptions = {
        
    };
    
    new L.MapEditor(map, data, mapEditorOptions);
});