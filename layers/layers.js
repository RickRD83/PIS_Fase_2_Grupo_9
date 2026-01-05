ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([613885.901837, 9640675.135008, 614441.712824, 9641163.859245]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_Pendientes_reclass_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendientes_reclass<br />\
    <img src="styles/legend/Pendientes_reclass_3_0.png" /> 0<br />\
    <img src="styles/legend/Pendientes_reclass_3_1.png" /> 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendientes_reclass_3.png",
            attributions: ' ',
            projection: 'EPSG:32717',
            alwaysInRange: true,
            imageExtent: [613845.812500, 9640677.750000, 614445.812500, 9641165.250000]
        })
    });
var lyr_orientaciones_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'orientaciones<br />\
    <img src="styles/legend/orientaciones_4_0.png" /> 0<br />\
    <img src="styles/legend/orientaciones_4_1.png" /> 353.66<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/orientaciones_4.png",
            attributions: ' ',
            projection: 'EPSG:32717',
            alwaysInRange: true,
            imageExtent: [613845.812500, 9640677.750000, 614445.812500, 9641165.250000]
        })
    });
var format_Limitesadministrativos_5 = new ol.format.GeoJSON();
var features_Limitesadministrativos_5 = format_Limitesadministrativos_5.readFeatures(json_Limitesadministrativos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Limitesadministrativos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesadministrativos_5.addFeatures(features_Limitesadministrativos_5);
var lyr_Limitesadministrativos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesadministrativos_5, 
                style: style_Limitesadministrativos_5,
                popuplayertitle: 'Limites administrativos',
                interactive: true,
                title: '<img src="styles/legend/Limitesadministrativos_5.png" /> Limites administrativos'
            });
var format_Areatotaldeestudio_6 = new ol.format.GeoJSON();
var features_Areatotaldeestudio_6 = format_Areatotaldeestudio_6.readFeatures(json_Areatotaldeestudio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Areatotaldeestudio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areatotaldeestudio_6.addFeatures(features_Areatotaldeestudio_6);
var lyr_Areatotaldeestudio_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areatotaldeestudio_6, 
                style: style_Areatotaldeestudio_6,
                popuplayertitle: 'Area total de estudio',
                interactive: true,
                title: '<img src="styles/legend/Areatotaldeestudio_6.png" /> Area total de estudio'
            });
var format_Informacindelreadeestudio_7 = new ol.format.GeoJSON();
var features_Informacindelreadeestudio_7 = format_Informacindelreadeestudio_7.readFeatures(json_Informacindelreadeestudio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Informacindelreadeestudio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informacindelreadeestudio_7.addFeatures(features_Informacindelreadeestudio_7);
var lyr_Informacindelreadeestudio_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informacindelreadeestudio_7, 
                style: style_Informacindelreadeestudio_7,
                popuplayertitle: 'Información del área de estudio',
                interactive: true,
                title: '<img src="styles/legend/Informacindelreadeestudio_7.png" /> Información del área de estudio'
            });
var format_Estaciones_8 = new ol.format.GeoJSON();
var features_Estaciones_8 = format_Estaciones_8.readFeatures(json_Estaciones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Estaciones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_8.addFeatures(features_Estaciones_8);
var lyr_Estaciones_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_8, 
                style: style_Estaciones_8,
                popuplayertitle: 'Estaciones',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_8.png" /> Estaciones'
            });
var format_Nivelderiesgoenlasreas_9 = new ol.format.GeoJSON();
var features_Nivelderiesgoenlasreas_9 = format_Nivelderiesgoenlasreas_9.readFeatures(json_Nivelderiesgoenlasreas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Nivelderiesgoenlasreas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivelderiesgoenlasreas_9.addFeatures(features_Nivelderiesgoenlasreas_9);
var lyr_Nivelderiesgoenlasreas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivelderiesgoenlasreas_9, 
                style: style_Nivelderiesgoenlasreas_9,
                popuplayertitle: 'Nivel de riesgo en las áreas',
                interactive: true,
    title: 'Nivel de riesgo en las áreas<br />\
    <img src="styles/legend/Nivelderiesgoenlasreas_9_0.png" /> Alto<br />\
    <img src="styles/legend/Nivelderiesgoenlasreas_9_1.png" /> Medio<br />\
    <img src="styles/legend/Nivelderiesgoenlasreas_9_2.png" /> Bajo<br />' });
var format_Niveldeinundacinencalles_10 = new ol.format.GeoJSON();
var features_Niveldeinundacinencalles_10 = format_Niveldeinundacinencalles_10.readFeatures(json_Niveldeinundacinencalles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Niveldeinundacinencalles_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveldeinundacinencalles_10.addFeatures(features_Niveldeinundacinencalles_10);
var lyr_Niveldeinundacinencalles_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveldeinundacinencalles_10, 
                style: style_Niveldeinundacinencalles_10,
                popuplayertitle: 'Nivel de inundación en calles',
                interactive: true,
    title: 'Nivel de inundación en calles<br />\
    <img src="styles/legend/Niveldeinundacinencalles_10_0.png" /> Alto<br />\
    <img src="styles/legend/Niveldeinundacinencalles_10_1.png" /> Bajo<br />\
    <img src="styles/legend/Niveldeinundacinencalles_10_2.png" /> Medio<br />' });
var format_Linderosdelasreasdeestudio_11 = new ol.format.GeoJSON();
var features_Linderosdelasreasdeestudio_11 = format_Linderosdelasreasdeestudio_11.readFeatures(json_Linderosdelasreasdeestudio_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Linderosdelasreasdeestudio_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linderosdelasreasdeestudio_11.addFeatures(features_Linderosdelasreasdeestudio_11);
var lyr_Linderosdelasreasdeestudio_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linderosdelasreasdeestudio_11, 
                style: style_Linderosdelasreasdeestudio_11,
                popuplayertitle: 'Linderos de las áreas de estudio',
                interactive: true,
                title: '<img src="styles/legend/Linderosdelasreasdeestudio_11.png" /> Linderos de las áreas de estudio'
            });
var format_Sitiosvulnerables_12 = new ol.format.GeoJSON();
var features_Sitiosvulnerables_12 = format_Sitiosvulnerables_12.readFeatures(json_Sitiosvulnerables_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Sitiosvulnerables_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosvulnerables_12.addFeatures(features_Sitiosvulnerables_12);
var lyr_Sitiosvulnerables_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosvulnerables_12, 
                style: style_Sitiosvulnerables_12,
                popuplayertitle: 'Sitios vulnerables',
                interactive: true,
    title: 'Sitios vulnerables<br />\
    <img src="styles/legend/Sitiosvulnerables_12_0.png" /> Alto<br />\
    <img src="styles/legend/Sitiosvulnerables_12_1.png" /> Medio<br />\
    <img src="styles/legend/Sitiosvulnerables_12_2.png" /> Bajo<br />' });
var format_Parcelas_Catastrales_13 = new ol.format.GeoJSON();
var features_Parcelas_Catastrales_13 = format_Parcelas_Catastrales_13.readFeatures(json_Parcelas_Catastrales_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Parcelas_Catastrales_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_Catastrales_13.addFeatures(features_Parcelas_Catastrales_13);
var lyr_Parcelas_Catastrales_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_Catastrales_13, 
                style: style_Parcelas_Catastrales_13,
                popuplayertitle: 'Parcelas_Catastrales',
                interactive: true,
                title: '<img src="styles/legend/Parcelas_Catastrales_13.png" /> Parcelas_Catastrales'
            });
var format_Verticesdelreadeestudio_14 = new ol.format.GeoJSON();
var features_Verticesdelreadeestudio_14 = format_Verticesdelreadeestudio_14.readFeatures(json_Verticesdelreadeestudio_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Verticesdelreadeestudio_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verticesdelreadeestudio_14.addFeatures(features_Verticesdelreadeestudio_14);
var lyr_Verticesdelreadeestudio_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verticesdelreadeestudio_14, 
                style: style_Verticesdelreadeestudio_14,
                popuplayertitle: 'Vertices del Área de estudio',
                interactive: true,
                title: '<img src="styles/legend/Verticesdelreadeestudio_14.png" /> Vertices del Área de estudio'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_Pendientes_reclass_3.setVisible(true);lyr_orientaciones_4.setVisible(true);lyr_Limitesadministrativos_5.setVisible(true);lyr_Areatotaldeestudio_6.setVisible(true);lyr_Informacindelreadeestudio_7.setVisible(true);lyr_Estaciones_8.setVisible(true);lyr_Nivelderiesgoenlasreas_9.setVisible(true);lyr_Niveldeinundacinencalles_10.setVisible(true);lyr_Linderosdelasreasdeestudio_11.setVisible(true);lyr_Sitiosvulnerables_12.setVisible(true);lyr_Parcelas_Catastrales_13.setVisible(true);lyr_Verticesdelreadeestudio_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_GoogleHybrid_2,lyr_Pendientes_reclass_3,lyr_orientaciones_4,lyr_Limitesadministrativos_5,lyr_Areatotaldeestudio_6,lyr_Informacindelreadeestudio_7,lyr_Estaciones_8,lyr_Nivelderiesgoenlasreas_9,lyr_Niveldeinundacinencalles_10,lyr_Linderosdelasreasdeestudio_11,lyr_Sitiosvulnerables_12,lyr_Parcelas_Catastrales_13,lyr_Verticesdelreadeestudio_14];
lyr_Limitesadministrativos_5.set('fieldAliases', {'Codigo': 'Codigo', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Area (Ha)': 'Area (Ha)', 'Pob_est': 'Pob_est', 'Vista_Web': 'Vista_Web', });
lyr_Areatotaldeestudio_6.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Informacindelreadeestudio_7.set('fieldAliases', {'parametro': 'Parametro', 'valor': 'Valor', 'Id': 'Id', 'unidad': 'Unidad de medición', 'descrip': 'Descripción', 'Fuente_dat': 'Fuente del dato', 'Vista_Web': 'Vista_Web', });
lyr_Estaciones_8.set('fieldAliases', {'id': 'id', 'X (Este)': 'X (Este)', 'Y Norte': 'Y Norte', 'Código': 'Código', 'Nombre': 'Nombre', 'Preci_Me_A': 'Preci_Me_A', 'Web': 'Web', });
lyr_Nivelderiesgoenlasreas_9.set('fieldAliases', {'id': 'id', 'Area': 'Área (m2)', 'Riesgo': 'Nivel de riesgo', 'Calles_Aso': 'Calles asociadas', 'Crecida_es': 'Crecida esperada', 'Impac_espe': 'Impacto esperado', 'Vista_Web': 'Vista_Web', });
lyr_Niveldeinundacinencalles_10.set('fieldAliases', {'id': 'id', 'nombre_via': 'Nombre de la calle', 'Riesgo': 'Riesgo de inundación', 'Tipo_rod': 'Tipo de rodamiento', 'Est_dren': 'Drenaje', 'Longit_m': 'Longitud (m)', 'ancho_m': 'Ancho (m)', 'Peralt_pct': 'Peralte (%)', 'Inun_max_m': 'Inundación Máx (m)', 'pob_expues': 'Población expuesta', 'Vista_web': 'Vista_web', });
lyr_Linderosdelasreasdeestudio_11.set('fieldAliases', {'FID': 'FID', 'Distance': 'Distance', 'azimuth': 'azimuth', 'Rumbo': 'Rumbo', 'Vista_Web': 'Vista_Web', });
lyr_Sitiosvulnerables_12.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo de vía', 'Niv_vulner': 'Nivel de Vulnerabilidad', 'Calle_refe': 'Calles de referencia', 'Acc_Recome': 'Acciones recomendadas', 'Nombre_L': 'Nombre del lugar', 'Coord_X': 'Coordenadas Este (UTM)', 'Coord_Y': 'Coordenadas Norte (UTM)', 'Vista_Web': 'Vista_Web', });
lyr_Parcelas_Catastrales_13.set('fieldAliases', {'id': 'id', 'IDpredial': 'IDpredial', 'Propiet': 'Propiet', 'Uso_suelo': 'Uso_suelo', 'Area': 'Area', 'Val_Catas': 'Val_Catas', 'Vista_Web': 'Vista_Web', });
lyr_Verticesdelreadeestudio_14.set('fieldAliases', {'id': 'id', 'Coord_E': 'Coordenadas Este (UTM)', 'Coord_N': 'Coordenadas Norte (UTM)', 'Vista_Web': 'Vista_Web', });
lyr_Limitesadministrativos_5.set('fieldImages', {'Codigo': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'Area (Ha)': 'TextEdit', 'Pob_est': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Areatotaldeestudio_6.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_Informacindelreadeestudio_7.set('fieldImages', {'parametro': 'TextEdit', 'valor': 'TextEdit', 'Id': 'TextEdit', 'unidad': 'TextEdit', 'descrip': 'TextEdit', 'Fuente_dat': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Estaciones_8.set('fieldImages', {'id': 'TextEdit', 'X (Este)': 'TextEdit', 'Y Norte': 'TextEdit', 'Código': 'TextEdit', 'Nombre': 'TextEdit', 'Preci_Me_A': 'TextEdit', 'Web': 'TextEdit', });
lyr_Nivelderiesgoenlasreas_9.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Riesgo': 'TextEdit', 'Calles_Aso': 'TextEdit', 'Crecida_es': 'TextEdit', 'Impac_espe': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Niveldeinundacinencalles_10.set('fieldImages', {'id': 'TextEdit', 'nombre_via': 'TextEdit', 'Riesgo': 'TextEdit', 'Tipo_rod': 'TextEdit', 'Est_dren': 'TextEdit', 'Longit_m': 'TextEdit', 'ancho_m': 'TextEdit', 'Peralt_pct': 'TextEdit', 'Inun_max_m': 'TextEdit', 'pob_expues': 'TextEdit', 'Vista_web': 'TextEdit', });
lyr_Linderosdelasreasdeestudio_11.set('fieldImages', {'FID': 'TextEdit', 'Distance': 'TextEdit', 'azimuth': 'TextEdit', 'Rumbo': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Sitiosvulnerables_12.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Niv_vulner': 'TextEdit', 'Calle_refe': 'TextEdit', 'Acc_Recome': 'TextEdit', 'Nombre_L': 'TextEdit', 'Coord_X': 'TextEdit', 'Coord_Y': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Parcelas_Catastrales_13.set('fieldImages', {'id': 'TextEdit', 'IDpredial': 'TextEdit', 'Propiet': 'TextEdit', 'Uso_suelo': 'TextEdit', 'Area': 'TextEdit', 'Val_Catas': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Verticesdelreadeestudio_14.set('fieldImages', {'id': 'TextEdit', 'Coord_E': 'TextEdit', 'Coord_N': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Limitesadministrativos_5.set('fieldLabels', {'Codigo': 'hidden field', 'Nombre': 'hidden field', 'Tipo': 'hidden field', 'Area (Ha)': 'hidden field', 'Pob_est': 'hidden field', 'Vista_Web': 'no label', });
lyr_Areatotaldeestudio_6.set('fieldLabels', {'id': 'hidden field', 'Area': 'inline label - always visible', });
lyr_Informacindelreadeestudio_7.set('fieldLabels', {'parametro': 'hidden field', 'valor': 'hidden field', 'Id': 'hidden field', 'unidad': 'hidden field', 'descrip': 'hidden field', 'Fuente_dat': 'hidden field', 'Vista_Web': 'no label', });
lyr_Estaciones_8.set('fieldLabels', {'id': 'hidden field', 'X (Este)': 'hidden field', 'Y Norte': 'hidden field', 'Código': 'hidden field', 'Nombre': 'hidden field', 'Preci_Me_A': 'hidden field', 'Web': 'no label', });
lyr_Nivelderiesgoenlasreas_9.set('fieldLabels', {'id': 'hidden field', 'Area': 'hidden field', 'Riesgo': 'hidden field', 'Calles_Aso': 'hidden field', 'Crecida_es': 'hidden field', 'Impac_espe': 'hidden field', 'Vista_Web': 'no label', });
lyr_Niveldeinundacinencalles_10.set('fieldLabels', {'id': 'hidden field', 'nombre_via': 'hidden field', 'Riesgo': 'hidden field', 'Tipo_rod': 'hidden field', 'Est_dren': 'hidden field', 'Longit_m': 'hidden field', 'ancho_m': 'hidden field', 'Peralt_pct': 'hidden field', 'Inun_max_m': 'hidden field', 'pob_expues': 'hidden field', 'Vista_web': 'no label', });
lyr_Linderosdelasreasdeestudio_11.set('fieldLabels', {'FID': 'hidden field', 'Distance': 'inline label - always visible', 'azimuth': 'inline label - always visible', 'Rumbo': 'inline label - always visible', 'Vista_Web': 'no label', });
lyr_Sitiosvulnerables_12.set('fieldLabels', {'id': 'hidden field', 'Tipo': 'hidden field', 'Niv_vulner': 'hidden field', 'Calle_refe': 'hidden field', 'Acc_Recome': 'hidden field', 'Nombre_L': 'hidden field', 'Coord_X': 'hidden field', 'Coord_Y': 'hidden field', 'Vista_Web': 'no label', });
lyr_Parcelas_Catastrales_13.set('fieldLabels', {'id': 'hidden field', 'IDpredial': 'hidden field', 'Propiet': 'hidden field', 'Uso_suelo': 'hidden field', 'Area': 'hidden field', 'Val_Catas': 'hidden field', 'Vista_Web': 'no label', });
lyr_Verticesdelreadeestudio_14.set('fieldLabels', {'id': 'hidden field', 'Coord_E': 'hidden field', 'Coord_N': 'hidden field', 'Vista_Web': 'no label', });
lyr_Verticesdelreadeestudio_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});