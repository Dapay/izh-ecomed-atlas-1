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
    title: 'Выделенные объекты<br />\
    <img src="styles/legend/_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/_1_1.png" /> 20 - 30<br />\
    <img src="styles/legend/_1_2.png" /> 30 - 60<br />\
    <img src="styles/legend/_1_3.png" /> 60 - 90<br />\
    <img src="styles/legend/_1_4.png" /> 90 - 120<br />\
    <img src="styles/legend/_1_5.png" /> 120 - 150<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'name': 'name', 'тыс.тонн/год': 'тыс.тонн/год', });
lyr__1.set('fieldImages', {'name': 'TextEdit', 'тыс.тонн/год': 'TextEdit', });
lyr__1.set('fieldLabels', {'name': 'no label', 'тыс.тонн/год': 'inline label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});