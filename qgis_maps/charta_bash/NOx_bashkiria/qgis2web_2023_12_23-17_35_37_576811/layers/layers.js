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
var format_NOx_1 = new ol.format.GeoJSON();
var features_NOx_1 = format_NOx_1.readFeatures(json_NOx_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOx_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOx_1.addFeatures(features_NOx_1);
var lyr_NOx_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NOx_1, 
                style: style_NOx_1,
                interactive: true,
    title: 'NOx<br />\
    <img src="styles/legend/NOx_1_0.png" /> 0,15 - 0,75<br />\
    <img src="styles/legend/NOx_1_1.png" /> 0,75 - 1,25<br />\
    <img src="styles/legend/NOx_1_2.png" /> 1,25 - 5<br />\
    <img src="styles/legend/NOx_1_3.png" /> 5 - 5,5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_NOx_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NOx_1];
lyr_NOx_1.set('fieldAliases', {'id': 'id', 'в ПДК': 'в ПДК', });
lyr_NOx_1.set('fieldImages', {'id': 'TextEdit', 'в ПДК': 'TextEdit', });
lyr_NOx_1.set('fieldLabels', {'id': 'no label', 'в ПДК': 'inline label', });
lyr_NOx_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});