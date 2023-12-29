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
var format_KIZA_1 = new ol.format.GeoJSON();
var features_KIZA_1 = format_KIZA_1.readFeatures(json_KIZA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KIZA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KIZA_1.addFeatures(features_KIZA_1);
var lyr_KIZA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KIZA_1, 
                style: style_KIZA_1,
                interactive: true,
    title: 'KIZA<br />\
    <img src="styles/legend/KIZA_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/KIZA_1_1.png" /> 1 - 3<br />\
    <img src="styles/legend/KIZA_1_2.png" /> 3 - 5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KIZA_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KIZA_1];
lyr_KIZA_1.set('fieldAliases', {'id': 'id', 'КИЗА': 'КИЗА', });
lyr_KIZA_1.set('fieldImages', {'id': 'TextEdit', 'КИЗА': 'TextEdit', });
lyr_KIZA_1.set('fieldLabels', {'id': 'no label', 'КИЗА': 'inline label', });
lyr_KIZA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});