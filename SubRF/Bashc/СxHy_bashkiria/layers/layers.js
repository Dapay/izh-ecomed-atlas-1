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
var format_CxHy_1 = new ol.format.GeoJSON();
var features_CxHy_1 = format_CxHy_1.readFeatures(json_CxHy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CxHy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CxHy_1.addFeatures(features_CxHy_1);
var lyr_CxHy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CxHy_1, 
                style: style_CxHy_1,
                interactive: true,
    title: 'CxHy<br />\
    <img src="styles/legend/CxHy_1_0.png" /> 0,0001 - 0,005<br />\
    <img src="styles/legend/CxHy_1_1.png" /> 0,005 - 0,009<br />\
    <img src="styles/legend/CxHy_1_2.png" /> 0,009 - 0,05<br />\
    <img src="styles/legend/CxHy_1_3.png" /> 0,05 - 0,1<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_CxHy_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CxHy_1];
lyr_CxHy_1.set('fieldAliases', {'id': 'id', 'в мг/м3': 'в мг/м3', });
lyr_CxHy_1.set('fieldImages', {'id': 'TextEdit', 'в мг/м3': 'TextEdit', });
lyr_CxHy_1.set('fieldLabels', {'id': 'no label', 'в мг/м3': 'inline label', });
lyr_CxHy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});