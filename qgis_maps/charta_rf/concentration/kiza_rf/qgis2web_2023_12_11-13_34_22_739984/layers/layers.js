var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_kiza_itog_1 = new ol.format.GeoJSON();
var features_kiza_itog_1 = format_kiza_itog_1.readFeatures(json_kiza_itog_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiza_itog_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiza_itog_1.addFeatures(features_kiza_itog_1);
var lyr_kiza_itog_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kiza_itog_1, 
                style: style_kiza_itog_1,
                interactive: true,
    title: 'kiza_itog<br />\
    <img src="styles/legend/kiza_itog_1_0.png" /> 0<br />\
    <img src="styles/legend/kiza_itog_1_1.png" /> 2,500000<br />\
    <img src="styles/legend/kiza_itog_1_2.png" /> 7,500000<br />\
    <img src="styles/legend/kiza_itog_1_3.png" /> 10,000000<br />\
    <img src="styles/legend/kiza_itog_1_4.png" /> 15,000000<br />\
    <img src="styles/legend/kiza_itog_1_5.png" /> <br />'
        });

lyr_2gisMap_0.setVisible(true);lyr_kiza_itog_1.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_kiza_itog_1];
lyr_kiza_itog_1.set('fieldAliases', {'id': 'id', 'kiza': 'kiza', });
lyr_kiza_itog_1.set('fieldImages', {'id': 'TextEdit', 'kiza': 'TextEdit', });
lyr_kiza_itog_1.set('fieldLabels', {'id': 'no label', 'kiza': 'inline label', });
lyr_kiza_itog_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});