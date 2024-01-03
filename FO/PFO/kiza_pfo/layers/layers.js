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
var format_kiza_pfo_2 = new ol.format.GeoJSON();
var features_kiza_pfo_2 = format_kiza_pfo_2.readFeatures(json_kiza_pfo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiza_pfo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiza_pfo_2.addFeatures(features_kiza_pfo_2);
var lyr_kiza_pfo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kiza_pfo_2, 
                style: style_kiza_pfo_2,
                interactive: true,
    title: 'kiza_pfo<br />\
    <img src="styles/legend/kiza_pfo_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/kiza_pfo_2_1.png" /> 1 - 3<br />\
    <img src="styles/legend/kiza_pfo_2_2.png" /> 3 - 7<br />\
    <img src="styles/legend/kiza_pfo_2_3.png" /> 7 - 11<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_border_pfo_1.setVisible(true);lyr_kiza_pfo_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_border_pfo_1,lyr_kiza_pfo_2];
lyr_border_pfo_1.set('fieldAliases', {'ПФО': 'ПФО', });
lyr_kiza_pfo_2.set('fieldAliases', {'id': 'id', 'КИЗА': 'КИЗА', });
lyr_border_pfo_1.set('fieldImages', {'ПФО': '', });
lyr_kiza_pfo_2.set('fieldImages', {'id': 'TextEdit', 'КИЗА': 'TextEdit', });
lyr_border_pfo_1.set('fieldLabels', {'ПФО': 'no label', });
lyr_kiza_pfo_2.set('fieldLabels', {'id': 'no label', 'КИЗА': 'inline label', });
lyr_kiza_pfo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});