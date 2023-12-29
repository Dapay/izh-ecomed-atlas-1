var size = 0;
var placement = 'point';

var style_CxHy_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("в мг/м3");
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
    if (value >= 0.000100 && value <= 0.005000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.583)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(59,250,253,0.583)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.005000 && value <= 0.009000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.583)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(21,232,21,0.583)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.009000 && value <= 0.050000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.583)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(254,250,14,0.583)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.050000 && value <= 0.100000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.583)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(251,30,33,0.583)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
