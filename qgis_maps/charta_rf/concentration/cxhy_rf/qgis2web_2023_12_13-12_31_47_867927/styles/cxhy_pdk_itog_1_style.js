var size = 0;
var placement = 'point';
function categories_cxhy_pdk_itog_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '0.001':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(37,255,248,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0.01':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(25,236,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0.02':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(252,250,16,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0.03':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(246,176,63,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0.04':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(215,6,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_cxhy_pdk_itog_1 = function(feature, resolution){
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
    
var style = categories_cxhy_pdk_itog_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
