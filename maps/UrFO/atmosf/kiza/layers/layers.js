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
    title: 'Комплексный индекс загрязнения атмосферы (КИЗА)<br />\
    <img src="styles/legend/_0_0.png" /> менее 1<br />\
    <img src="styles/legend/_0_1.png" /> 1 - 5<br />\
    <img src="styles/legend/_0_2.png" /> 5 - 7<br />\
    <img src="styles/legend/_0_3.png" /> 7 - 14<br />\
    <img src="styles/legend/_0_4.png" /> 14 и более<br />'
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
                title: '<img src="styles/legend/_2.png" /> ЯНАО'
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
                title: '<img src="styles/legend/_4.png" /> Курганская область'
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
                title: '<img src="styles/legend/_5.png" /> Челябинская область'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> ХМАО'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> Тюменская область'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: false,
                title: '<img src="styles/legend/_8.png" /> граница УрФО'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8];
lyr__0.set('fieldAliases', {'index': 'index', 'kiza_min': 'kiza_min', 'kiza_max': 'kiza_max', 'label': 'label', });
lyr__1.set('fieldAliases', {'id': 'id', 'город': 'город', });
lyr__2.set('fieldAliases', {'id': 'id', });
lyr__3.set('fieldAliases', {'id': 'id', });
lyr__4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'id': 'id', });
lyr__6.set('fieldAliases', {'id': 'id', });
lyr__7.set('fieldAliases', {'id': 'id', 'Тюмен': 'Тюмен', });
lyr__8.set('fieldAliases', {'id': 'id', });
lyr__0.set('fieldImages', {'index': 'Range', 'kiza_min': 'TextEdit', 'kiza_max': 'TextEdit', 'label': 'TextEdit', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'город': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', });
lyr__3.set('fieldImages', {'id': '', });
lyr__4.set('fieldImages', {'id': 'TextEdit', });
lyr__5.set('fieldImages', {'id': '', });
lyr__6.set('fieldImages', {'id': '', });
lyr__7.set('fieldImages', {'id': 'TextEdit', 'Тюмен': 'TextEdit', });
lyr__8.set('fieldImages', {'id': 'TextEdit', });
lyr__0.set('fieldLabels', {'index': 'no label', 'kiza_min': 'no label', 'kiza_max': 'no label', 'label': 'no label', });
lyr__1.set('fieldLabels', {'id': 'no label', 'город': 'no label', });
lyr__2.set('fieldLabels', {'id': 'no label', });
lyr__3.set('fieldLabels', {'id': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', });
lyr__5.set('fieldLabels', {'id': 'no label', });
lyr__6.set('fieldLabels', {'id': 'no label', });
lyr__7.set('fieldLabels', {'id': 'no label', 'Тюмен': 'no label', });
lyr__8.set('fieldLabels', {'id': 'no label', });
lyr__8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});