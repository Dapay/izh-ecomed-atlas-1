var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                interactive: false,
    title: 'Средние значения концентраций оксидов азота, доли ПДК<br />\
    <img src="styles/legend/_0_0.png" /> менее 0.001<br />\
    <img src="styles/legend/_0_1.png" /> 0.001 - 0.004<br />\
    <img src="styles/legend/_0_2.png" /> 0.004 - 0.01<br />\
    <img src="styles/legend/_0_3.png" /> 0.01 - 0.02<br />\
    <img src="styles/legend/_0_4.png" /> 0.02 - 0.1<br />\
    <img src="styles/legend/_0_5.png" /> 0.1 и более<br />'
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> Населенные пункты '
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> ХМАО'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> Свердловская область'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> граница УрФО'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> Курганская область'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5];
lyr__0.set('fieldAliases', {'index': 'index', 'NO2_min': 'NO2_min', 'NO2_max': 'NO2_max', 'label': 'label', });
lyr__1.set('fieldAliases', {'город': 'город', });
lyr__2.set('fieldAliases', {});
lyr__3.set('fieldAliases', {});
lyr__4.set('fieldAliases', {});
lyr__5.set('fieldAliases', {});
lyr__0.set('fieldImages', {'index': 'TextEdit', 'NO2_min': 'TextEdit', 'NO2_max': 'TextEdit', 'label': 'TextEdit', });
lyr__1.set('fieldImages', {'город': 'TextEdit', });
lyr__2.set('fieldImages', {});
lyr__3.set('fieldImages', {});
lyr__4.set('fieldImages', {});
lyr__5.set('fieldImages', {});
lyr__0.set('fieldLabels', {'index': 'no label', 'NO2_min': 'no label', 'NO2_max': 'no label', 'label': 'no label', });
lyr__1.set('fieldLabels', {'город': 'no label', });
lyr__2.set('fieldLabels', {});
lyr__3.set('fieldLabels', {});
lyr__4.set('fieldLabels', {});
lyr__5.set('fieldLabels', {});
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});