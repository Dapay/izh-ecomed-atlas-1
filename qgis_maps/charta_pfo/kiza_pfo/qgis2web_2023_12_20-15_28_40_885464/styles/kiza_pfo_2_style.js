var size = 0;
var placement = 'point';

var style_kiza_pfo_2 = function(feature, resolution){
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
    if (value >= 0.000000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.5670000000000001)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(82,186,47,0.5670000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.000000 && value <= 3.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.5670000000000001)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,232,6,0.5670000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.000000 && value <= 7.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.5670000000000001)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(254,201,128,0.5670000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 7.000000 && value <= 11.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.5670000000000001)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(215,25,28,0.5670000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
