var size = 0;
var placement = 'point';

var style_CO_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("в ПДК");
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
    if (value >= 0.010000 && value <= 0.100000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.579)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(22,252,252,0.579)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.100000 && value <= 0.500000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.579)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(56,252,30,0.579)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.500000 && value <= 1.010000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.579)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,254,19,0.579)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.010000 && value <= 1.500000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.579)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(253,30,33,0.579)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
