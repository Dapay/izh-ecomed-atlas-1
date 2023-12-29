var size = 0;
var placement = 'point';

var style_SO2_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("в ПДК�");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.010000 && value <= 0.020000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.551)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(6,241,249,0.551)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.020000 && value <= 0.200000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.551)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(10,232,40,0.551)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.200000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.551)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,254,6,0.551)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.000000 && value <= 1.500000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.551)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(243,29,32,0.551)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
