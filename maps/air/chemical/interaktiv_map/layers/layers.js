var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: "промышленная_зона",
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> промышленная_зона'
            });
var format_1_2 = new ol.format.GeoJSON();
var features_1_2 = format_1_2.readFeatures(json_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_2.addFeatures(features_1_2);
var lyr_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_2, 
                style: style_1_2,
                popuplayertitle: "1 категория объектов НВОС",
                interactive: true,
                title: '<img src="styles/legend/1_2.png" /> 1 категория объектов НВОС'
            });
var format_2_3 = new ol.format.GeoJSON();
var features_2_3 = format_2_3.readFeatures(json_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_3.addFeatures(features_2_3);cluster_2_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_2_3
});
var lyr_2_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2_3, 
                style: style_2_3,
                popuplayertitle: "2 категория объектов НВОС",
                interactive: true,
                title: '<img src="styles/legend/2_3.png" /> 2 категория объектов НВОС'
            });

lyr_OSMStandard_0.setVisible(true);lyr___1.setVisible(true);lyr_1_2.setVisible(true);lyr_2_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr___1,lyr_1_2,lyr_2_3];
lyr___1.set('fieldAliases', {'объем_выбросов_от_промышленных_': 'объем_выбросов_от_промышленных_', 'наименование_промышленной_зоны': 'наименование_промышленной_зоны', });
lyr_1_2.set('fieldAliases', {'номер': 'номер', 'название': 'название', 'диоксид азота, т/год': 'диоксид азота, т/год', 'оксид азота, т/год': 'оксид азота, т/год', 'диоксид серы, т/год': 'диоксид серы, т/год', 'оксид углерода, т/год': 'оксид углерода, т/год', 'Бенз/а/пирен (3,4-Бензпирен), т/год': 'Бенз/а/пирен (3,4-Бензпирен), т/год', 'формальдегид, т/год': 'формальдегид, т/год', 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год': 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год', 'прочие ЗВ, т/год': 'прочие ЗВ, т/год', 'общее количество выбросов, т/год': 'общее количество выбросов, т/год', 'адрес': 'адрес', 'раойн': 'раойн', });
lyr_2_3.set('fieldAliases', {'номер': 'номер', 'название': 'название', 'диоксид азота, т/год': 'диоксид азота, т/год', 'оксид азота, т/год': 'оксид азота, т/год', 'диоксид серы, т/год': 'диоксид серы, т/год', 'оксид углерода, т/год': 'оксид углерода, т/год', 'Бенз/а/пирен (3,4-Бензпирен), т/год': 'Бенз/а/пирен (3,4-Бензпирен), т/год', 'формальдегид, т/год': 'формальдегид, т/год', 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год': 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год', 'прочие ЗВ, т/год': 'прочие ЗВ, т/год', 'общее количество выбросов, т/год': 'общее количество выбросов, т/год', 'адрес': 'адрес', 'район': 'район', });
lyr___1.set('fieldImages', {'объем_выбросов_от_промышленных_': 'TextEdit', 'наименование_промышленной_зоны': 'TextEdit', });
lyr_1_2.set('fieldImages', {'номер': 'Range', 'название': 'TextEdit', 'диоксид азота, т/год': 'TextEdit', 'оксид азота, т/год': 'TextEdit', 'диоксид серы, т/год': 'TextEdit', 'оксид углерода, т/год': 'TextEdit', 'Бенз/а/пирен (3,4-Бензпирен), т/год': 'TextEdit', 'формальдегид, т/год': 'TextEdit', 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год': 'TextEdit', 'прочие ЗВ, т/год': 'TextEdit', 'общее количество выбросов, т/год': 'TextEdit', 'адрес': 'TextEdit', 'раойн': 'TextEdit', });
lyr_2_3.set('fieldImages', {'номер': 'Range', 'название': 'TextEdit', 'диоксид азота, т/год': 'TextEdit', 'оксид азота, т/год': 'TextEdit', 'диоксид серы, т/год': 'TextEdit', 'оксид углерода, т/год': 'TextEdit', 'Бенз/а/пирен (3,4-Бензпирен), т/год': 'TextEdit', 'формальдегид, т/год': 'TextEdit', 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год': 'TextEdit', 'прочие ЗВ, т/год': 'TextEdit', 'общее количество выбросов, т/год': 'TextEdit', 'адрес': 'TextEdit', 'район': 'TextEdit', });
lyr___1.set('fieldLabels', {'объем_выбросов_от_промышленных_': 'no label', 'наименование_промышленной_зоны': 'no label', });
lyr_1_2.set('fieldLabels', {'номер': 'no label', 'название': 'no label', 'диоксид азота, т/год': 'no label', 'оксид азота, т/год': 'no label', 'диоксид серы, т/год': 'no label', 'оксид углерода, т/год': 'no label', 'Бенз/а/пирен (3,4-Бензпирен), т/год': 'no label', 'формальдегид, т/год': 'no label', 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год': 'no label', 'прочие ЗВ, т/год': 'no label', 'общее количество выбросов, т/год': 'no label', 'адрес': 'no label', 'раойн': 'no label', });
lyr_2_3.set('fieldLabels', {'номер': 'no label', 'название': 'no label', 'диоксид азота, т/год': 'no label', 'оксид азота, т/год': 'no label', 'диоксид серы, т/год': 'no label', 'оксид углерода, т/год': 'no label', 'Бенз/а/пирен (3,4-Бензпирен), т/год': 'no label', 'формальдегид, т/год': 'no label', 'Взвешенные в-ва (аэрозоль, содерж. в воздухе населенных пунктов), т/год': 'no label', 'прочие ЗВ, т/год': 'no label', 'общее количество выбросов, т/год': 'no label', 'адрес': 'no label', 'район': 'no label', });
lyr_2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});