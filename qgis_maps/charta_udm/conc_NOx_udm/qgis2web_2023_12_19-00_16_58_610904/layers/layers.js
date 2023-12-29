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
var format_conc_NOx_1 = new ol.format.GeoJSON();
var features_conc_NOx_1 = format_conc_NOx_1.readFeatures(json_conc_NOx_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_conc_NOx_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_conc_NOx_1.addFeatures(features_conc_NOx_1);
var lyr_conc_NOx_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_conc_NOx_1, 
                style: style_conc_NOx_1,
                interactive: true,
    title: 'conc_NOx<br />\
    <img src="styles/legend/conc_NOx_1_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/conc_NOx_1_1.png" /> 0,5 - 0,7<br />\
    <img src="styles/legend/conc_NOx_1_2.png" /> 0,7 - 0,9<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_conc_NOx_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_conc_NOx_1];
lyr_conc_NOx_1.set('fieldAliases', {'id': 'id', 'доли �': 'доли �', });
lyr_conc_NOx_1.set('fieldImages', {'id': 'TextEdit', 'доли �': 'TextEdit', });
lyr_conc_NOx_1.set('fieldLabels', {'id': 'no label', 'доли �': 'inline label', });
lyr_conc_NOx_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});