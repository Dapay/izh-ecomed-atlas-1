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
var lyr_dust_pdk_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "dust_pdk",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dust_pdk_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1892431.343486, 4865942.279503, 18924313.434857, 15538711.096309]
                            })
                        });
var format_dust_pdk_itog_2 = new ol.format.GeoJSON();
var features_dust_pdk_itog_2 = format_dust_pdk_itog_2.readFeatures(json_dust_pdk_itog_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dust_pdk_itog_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dust_pdk_itog_2.addFeatures(features_dust_pdk_itog_2);
var lyr_dust_pdk_itog_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dust_pdk_itog_2, 
                style: style_dust_pdk_itog_2,
                interactive: true,
    title: 'dust_pdk_itog<br />\
    <img src="styles/legend/dust_pdk_itog_2_0.png" /> 0,1<br />\
    <img src="styles/legend/dust_pdk_itog_2_1.png" /> 0,5<br />\
    <img src="styles/legend/dust_pdk_itog_2_2.png" /> 1,500000<br />\
    <img src="styles/legend/dust_pdk_itog_2_3.png" /> 3,500000<br />\
    <img src="styles/legend/dust_pdk_itog_2_4.png" /> 4,500000<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_dust_pdk_1.setVisible(false);lyr_dust_pdk_itog_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_dust_pdk_1,lyr_dust_pdk_itog_2];
lyr_dust_pdk_itog_2.set('fieldAliases', {'id': 'id', 'конц �': 'конц �', });
lyr_dust_pdk_itog_2.set('fieldImages', {'id': 'TextEdit', 'конц �': 'TextEdit', });
lyr_dust_pdk_itog_2.set('fieldLabels', {'id': 'no label', 'конц �': 'inline label', });
lyr_dust_pdk_itog_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});