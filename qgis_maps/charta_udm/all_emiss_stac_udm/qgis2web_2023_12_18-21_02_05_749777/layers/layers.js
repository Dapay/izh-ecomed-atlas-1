var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
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
    title: 'Выборка<br />\
    <img src="styles/legend/_1_0.png" /> 0,01 - 1<br />\
    <img src="styles/legend/_1_1.png" /> 1 - 3<br />\
    <img src="styles/legend/_1_2.png" /> 3 - 10<br />\
    <img src="styles/legend/_1_3.png" /> 10 - 20<br />\
    <img src="styles/legend/_1_4.png" /> 20 - 50<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'тыс.т/ год': 'тыс.т/ год', });
lyr__1.set('fieldImages', {'тыс.т/ год': 'TextEdit', });
lyr__1.set('fieldLabels', {'тыс.т/ год': 'inline label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});