var size = 0;
var placement = 'point';

var style_Bashkiria_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("КИЗА");
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
    if (value >= 0.010000 && value <= 0.500000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.647)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(58,176,250,0.647)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.500000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.647)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(15,232,33,0.647)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.000000 && value <= 5.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.647)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(252,254,7,0.647)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.000000 && value <= 7.500000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.647)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,30,34,0.647)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
