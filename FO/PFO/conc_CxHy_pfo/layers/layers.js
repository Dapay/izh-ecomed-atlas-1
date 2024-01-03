var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.695000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_border_pfo_1 = new ol.format.GeoJSON();
var features_border_pfo_1 = format_border_pfo_1.readFeatures(json_border_pfo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_border_pfo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_border_pfo_1.addFeatures(features_border_pfo_1);
var lyr_border_pfo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_border_pfo_1, 
                style: style_border_pfo_1,
                interactive: true,
                title: '<img src="styles/legend/border_pfo_1.png" /> border_pfo'
            });
var format_CxHy_2 = new ol.format.GeoJSON();
var features_CxHy_2 = format_CxHy_2.readFeatures(json_CxHy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CxHy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CxHy_2.addFeatures(features_CxHy_2);
var lyr_CxHy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CxHy_2, 
                style: style_CxHy_2,
                interactive: true,
    title: 'CxHy<br />\
    <img src="styles/legend/CxHy_2_0.png" /> 0 - 0,1<br />\
    <img src="styles/legend/CxHy_2_1.png" /> 0,1 - 1<br />\
    <img src="styles/legend/CxHy_2_2.png" /> 1 - 2<br />\
    <img src="styles/legend/CxHy_2_3.png" /> 2 - 5<br />\
    <img src="styles/legend/CxHy_2_4.png" /> 5 - 7<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_border_pfo_1.setVisible(true);lyr_CxHy_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_border_pfo_1,lyr_CxHy_2];
lyr_border_pfo_1.set('fieldAliases', {'ПФО': 'ПФО', });
lyr_CxHy_2.set('fieldAliases', {'id': 'id', 'в ПДК': 'в ПДК', });
lyr_border_pfo_1.set('fieldImages', {'ПФО': 'TextEdit', });
lyr_CxHy_2.set('fieldImages', {'id': 'TextEdit', 'в ПДК': 'TextEdit', });
lyr_border_pfo_1.set('fieldLabels', {'ПФО': 'no label', });
lyr_CxHy_2.set('fieldLabels', {'id': 'no label', 'в ПДК': 'inline label', });
lyr_CxHy_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});