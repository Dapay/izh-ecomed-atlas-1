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
var format_SO2_1 = new ol.format.GeoJSON();
var features_SO2_1 = format_SO2_1.readFeatures(json_SO2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SO2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SO2_1.addFeatures(features_SO2_1);
var lyr_SO2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SO2_1, 
                style: style_SO2_1,
                interactive: true,
    title: 'SO2<br />\
    <img src="styles/legend/SO2_1_0.png" /> 0,01 - 0,02<br />\
    <img src="styles/legend/SO2_1_1.png" /> 0,02 - 0,2<br />\
    <img src="styles/legend/SO2_1_2.png" /> 0,2 - 1<br />\
    <img src="styles/legend/SO2_1_3.png" /> 1 - 1,5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_SO2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SO2_1];
lyr_SO2_1.set('fieldAliases', {'id': 'id', 'в ПДК�': 'в ПДК�', });
lyr_SO2_1.set('fieldImages', {'id': 'TextEdit', 'в ПДК�': 'TextEdit', });
lyr_SO2_1.set('fieldLabels', {'id': 'no label', 'в ПДК�': 'inline label', });
lyr_SO2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});