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
var format_NOx_pdk_itog_1 = new ol.format.GeoJSON();
var features_NOx_pdk_itog_1 = format_NOx_pdk_itog_1.readFeatures(json_NOx_pdk_itog_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOx_pdk_itog_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOx_pdk_itog_1.addFeatures(features_NOx_pdk_itog_1);
var lyr_NOx_pdk_itog_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NOx_pdk_itog_1, 
                style: style_NOx_pdk_itog_1,
                interactive: true,
                title: '<img src="styles/legend/NOx_pdk_itog_1.png" /> NOx_pdk_itog'
            });
var format_co_pdk_itog_2 = new ol.format.GeoJSON();
var features_co_pdk_itog_2 = format_co_pdk_itog_2.readFeatures(json_co_pdk_itog_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_co_pdk_itog_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_co_pdk_itog_2.addFeatures(features_co_pdk_itog_2);
var lyr_co_pdk_itog_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_co_pdk_itog_2, 
                style: style_co_pdk_itog_2,
                interactive: true,
    title: 'co_pdk_itog<br />\
    <img src="styles/legend/co_pdk_itog_2_0.png" /> 0,01<br />\
    <img src="styles/legend/co_pdk_itog_2_1.png" /> 3,010000<br />\
    <img src="styles/legend/co_pdk_itog_2_2.png" /> 6,010000<br />\
    <img src="styles/legend/co_pdk_itog_2_3.png" /> 9,010000<br />\
    <img src="styles/legend/co_pdk_itog_2_4.png" /> 12,010000<br />'
        });
var format_border_linecrop_3 = new ol.format.GeoJSON();
var features_border_linecrop_3 = format_border_linecrop_3.readFeatures(json_border_linecrop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_border_linecrop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_border_linecrop_3.addFeatures(features_border_linecrop_3);
var lyr_border_linecrop_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_border_linecrop_3, 
                style: style_border_linecrop_3,
                interactive: true,
                title: '<img src="styles/legend/border_linecrop_3.png" /> border_line-crop'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NOx_pdk_itog_1.setVisible(true);lyr_co_pdk_itog_2.setVisible(true);lyr_border_linecrop_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NOx_pdk_itog_1,lyr_co_pdk_itog_2,lyr_border_linecrop_3];
lyr_NOx_pdk_itog_1.set('fieldAliases', {'id': 'id', 'в ПДК': 'в ПДК', });
lyr_co_pdk_itog_2.set('fieldAliases', {'id': 'id', 'в ПДК': 'в ПДК', });
lyr_border_linecrop_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_NOx_pdk_itog_1.set('fieldImages', {'id': '', 'в ПДК': '', });
lyr_co_pdk_itog_2.set('fieldImages', {'id': 'TextEdit', 'в ПДК': 'TextEdit', });
lyr_border_linecrop_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_NOx_pdk_itog_1.set('fieldLabels', {'id': 'no label', 'в ПДК': 'no label', });
lyr_co_pdk_itog_2.set('fieldLabels', {'id': 'no label', 'в ПДК': 'inline label', });
lyr_border_linecrop_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_border_linecrop_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});