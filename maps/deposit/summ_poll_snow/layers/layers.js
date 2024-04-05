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
var format_borders_1 = new ol.format.GeoJSON();
var features_borders_1 = format_borders_1.readFeatures(json_borders_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_borders_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_borders_1.addFeatures(features_borders_1);
var lyr_borders_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_borders_1, 
                style: style_borders_1,
                interactive: true,
                title: '<img src="styles/legend/borders_1.png" /> borders'
            });
var format_summ_poll_snow_2 = new ol.format.GeoJSON();
var features_summ_poll_snow_2 = format_summ_poll_snow_2.readFeatures(json_summ_poll_snow_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_summ_poll_snow_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_summ_poll_snow_2.addFeatures(features_summ_poll_snow_2);
var lyr_summ_poll_snow_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_summ_poll_snow_2, 
                style: style_summ_poll_snow_2,
                interactive: true,
    title: 'summ_poll_snow<br />\
    <img src="styles/legend/summ_poll_snow_2_0.png" /> менее 1<br />\
    <img src="styles/legend/summ_poll_snow_2_1.png" /> 1 - 10<br />\
    <img src="styles/legend/summ_poll_snow_2_2.png" /> 10 - 50<br />\
    <img src="styles/legend/summ_poll_snow_2_3.png" /> более 50<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_borders_1.setVisible(true);lyr_summ_poll_snow_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_borders_1,lyr_summ_poll_snow_2];
lyr_borders_1.set('fieldAliases', {'id': 'id', });
lyr_summ_poll_snow_2.set('fieldAliases', {'id': 'id', 'Zc': 'Zc', });
lyr_borders_1.set('fieldImages', {'id': 'TextEdit', });
lyr_summ_poll_snow_2.set('fieldImages', {'id': 'TextEdit', 'Zc': 'TextEdit', });
lyr_borders_1.set('fieldLabels', {'id': 'no label', });
lyr_summ_poll_snow_2.set('fieldLabels', {'id': 'no label', 'Zc': 'no label', });
lyr_summ_poll_snow_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});