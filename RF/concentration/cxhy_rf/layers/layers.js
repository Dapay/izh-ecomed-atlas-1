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
var format_cxhy_pdk_itog_1 = new ol.format.GeoJSON();
var features_cxhy_pdk_itog_1 = format_cxhy_pdk_itog_1.readFeatures(json_cxhy_pdk_itog_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cxhy_pdk_itog_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cxhy_pdk_itog_1.addFeatures(features_cxhy_pdk_itog_1);
var lyr_cxhy_pdk_itog_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cxhy_pdk_itog_1, 
                style: style_cxhy_pdk_itog_1,
                interactive: true,
    title: 'cxhy_pdk_itog<br />\
    <img src="styles/legend/cxhy_pdk_itog_1_0.png" /> 0,001<br />\
    <img src="styles/legend/cxhy_pdk_itog_1_1.png" /> 0,01<br />\
    <img src="styles/legend/cxhy_pdk_itog_1_2.png" /> 0,02<br />\
    <img src="styles/legend/cxhy_pdk_itog_1_3.png" /> 0,03<br />\
    <img src="styles/legend/cxhy_pdk_itog_1_4.png" /> 0,04<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_cxhy_pdk_itog_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cxhy_pdk_itog_1];
lyr_cxhy_pdk_itog_1.set('fieldAliases', {'id': 'id', 'в ПДК': 'в ПДК', });
lyr_cxhy_pdk_itog_1.set('fieldImages', {'id': 'TextEdit', 'в ПДК': 'TextEdit', });
lyr_cxhy_pdk_itog_1.set('fieldLabels', {'id': 'no label', 'в ПДК': 'inline label', });
lyr_cxhy_pdk_itog_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});