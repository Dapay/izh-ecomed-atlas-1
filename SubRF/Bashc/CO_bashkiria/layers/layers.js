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
var format_CO_1 = new ol.format.GeoJSON();
var features_CO_1 = format_CO_1.readFeatures(json_CO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO_1.addFeatures(features_CO_1);
var lyr_CO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CO_1, 
                style: style_CO_1,
                interactive: true,
    title: 'CO<br />\
    <img src="styles/legend/CO_1_0.png" /> 0,01 - 0,1<br />\
    <img src="styles/legend/CO_1_1.png" /> 0,1 - 0,5<br />\
    <img src="styles/legend/CO_1_2.png" /> 0,5 - 1,01<br />\
    <img src="styles/legend/CO_1_3.png" /> 1,01 - 1,5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_CO_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CO_1];
lyr_CO_1.set('fieldAliases', {'id': 'id', 'в ПДК': 'в ПДК', });
lyr_CO_1.set('fieldImages', {'id': 'TextEdit', 'в ПДК': 'TextEdit', });
lyr_CO_1.set('fieldLabels', {'id': 'no label', 'в ПДК': 'inline label', });
lyr_CO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});