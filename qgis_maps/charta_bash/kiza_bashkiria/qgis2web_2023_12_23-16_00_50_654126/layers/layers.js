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
var format_Bashkiria_1 = new ol.format.GeoJSON();
var features_Bashkiria_1 = format_Bashkiria_1.readFeatures(json_Bashkiria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bashkiria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bashkiria_1.addFeatures(features_Bashkiria_1);
var lyr_Bashkiria_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bashkiria_1, 
                style: style_Bashkiria_1,
                interactive: true,
    title: 'Bashkiria<br />\
    <img src="styles/legend/Bashkiria_1_0.png" /> 0,01 - 0,5<br />\
    <img src="styles/legend/Bashkiria_1_1.png" /> 0,5 - 1<br />\
    <img src="styles/legend/Bashkiria_1_2.png" /> 1 - 5<br />\
    <img src="styles/legend/Bashkiria_1_3.png" /> 5 - 7,5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Bashkiria_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bashkiria_1];
lyr_Bashkiria_1.set('fieldAliases', {'id': 'id', 'КИЗА': 'КИЗА', });
lyr_Bashkiria_1.set('fieldImages', {'id': 'TextEdit', 'КИЗА': 'TextEdit', });
lyr_Bashkiria_1.set('fieldLabels', {'id': 'no label', 'КИЗА': 'inline label', });
lyr_Bashkiria_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});