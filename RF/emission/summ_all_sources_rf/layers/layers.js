var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.631000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: 'Выделенные объекты<br />\
    <img src="styles/legend/_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/_1_1.png" /> 0 - 30<br />\
    <img src="styles/legend/_1_2.png" /> 30 - 100<br />\
    <img src="styles/legend/_1_3.png" /> 100 - 200<br />\
    <img src="styles/legend/_1_4.png" /> 200 - 300<br />\
    <img src="styles/legend/_1_5.png" /> 300 - 400<br />\
    <img src="styles/legend/_1_6.png" /> 400 - 500<br />\
    <img src="styles/legend/_1_7.png" /> 500 - 600<br />\
    <img src="styles/legend/_1_8.png" /> 600 - 1000<br />\
    <img src="styles/legend/_1_9.png" /> 1000 - 1800<br />\
    <img src="styles/legend/_1_10.png" /> 1800 - 3000<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'name': 'name', 'тыс.т./год': 'тыс.т./год', });
lyr__1.set('fieldImages', {'name': 'TextEdit', 'тыс.т./год': '', });
lyr__1.set('fieldLabels', {'name': 'no label', 'тыс.т./год': 'inline label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});