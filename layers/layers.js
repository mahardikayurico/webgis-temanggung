ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([109.311326, -7.946723, 111.437817, -6.586494]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AGRISAWAH_AR_25K_1 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_1 = format_AGRISAWAH_AR_25K_1.readFeatures(json_AGRISAWAH_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_AGRISAWAH_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_1.addFeatures(features_AGRISAWAH_AR_25K_1);
var lyr_AGRISAWAH_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_1, 
                style: style_AGRISAWAH_AR_25K_1,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_1.png" /> AGRISAWAH_AR_25K'
            });
var format_NONAGRIALANG_AR_25K_2 = new ol.format.GeoJSON();
var features_NONAGRIALANG_AR_25K_2 = format_NONAGRIALANG_AR_25K_2.readFeatures(json_NONAGRIALANG_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_NONAGRIALANG_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIALANG_AR_25K_2.addFeatures(features_NONAGRIALANG_AR_25K_2);
var lyr_NONAGRIALANG_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIALANG_AR_25K_2, 
                style: style_NONAGRIALANG_AR_25K_2,
                popuplayertitle: "NONAGRIALANG_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIALANG_AR_25K_2.png" /> NONAGRIALANG_AR_25K'
            });
var format_NONAGRIHUTANKERING_AR_25K_3 = new ol.format.GeoJSON();
var features_NONAGRIHUTANKERING_AR_25K_3 = format_NONAGRIHUTANKERING_AR_25K_3.readFeatures(json_NONAGRIHUTANKERING_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_NONAGRIHUTANKERING_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIHUTANKERING_AR_25K_3.addFeatures(features_NONAGRIHUTANKERING_AR_25K_3);
var lyr_NONAGRIHUTANKERING_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIHUTANKERING_AR_25K_3, 
                style: style_NONAGRIHUTANKERING_AR_25K_3,
                popuplayertitle: "NONAGRIHUTANKERING_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIHUTANKERING_AR_25K_3.png" /> NONAGRIHUTANKERING_AR_25K'
            });
var format_NONAGRISEMAKBELUKAR_AR_25K_4 = new ol.format.GeoJSON();
var features_NONAGRISEMAKBELUKAR_AR_25K_4 = format_NONAGRISEMAKBELUKAR_AR_25K_4.readFeatures(json_NONAGRISEMAKBELUKAR_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_NONAGRISEMAKBELUKAR_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRISEMAKBELUKAR_AR_25K_4.addFeatures(features_NONAGRISEMAKBELUKAR_AR_25K_4);
var lyr_NONAGRISEMAKBELUKAR_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRISEMAKBELUKAR_AR_25K_4, 
                style: style_NONAGRISEMAKBELUKAR_AR_25K_4,
                popuplayertitle: "NONAGRISEMAKBELUKAR_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRISEMAKBELUKAR_AR_25K_4.png" /> NONAGRISEMAKBELUKAR_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_5 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_5 = format_PEMUKIMAN_AR_25K_5.readFeatures(json_PEMUKIMAN_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_PEMUKIMAN_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_5.addFeatures(features_PEMUKIMAN_AR_25K_5);
var lyr_PEMUKIMAN_AR_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_5, 
                style: style_PEMUKIMAN_AR_25K_5,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_5.png" /> PEMUKIMAN_AR_25K'
            });
var format_AGRIKEBUN_AR_25K_6 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_25K_6 = format_AGRIKEBUN_AR_25K_6.readFeatures(json_AGRIKEBUN_AR_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_AGRIKEBUN_AR_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_25K_6.addFeatures(features_AGRIKEBUN_AR_25K_6);
var lyr_AGRIKEBUN_AR_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_AR_25K_6, 
                style: style_AGRIKEBUN_AR_25K_6,
                popuplayertitle: "AGRIKEBUN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_25K_6.png" /> AGRIKEBUN_AR_25K'
            });
var format_AGRILADANG_AR_25K_7 = new ol.format.GeoJSON();
var features_AGRILADANG_AR_25K_7 = format_AGRILADANG_AR_25K_7.readFeatures(json_AGRILADANG_AR_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_AGRILADANG_AR_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRILADANG_AR_25K_7.addFeatures(features_AGRILADANG_AR_25K_7);
var lyr_AGRILADANG_AR_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRILADANG_AR_25K_7, 
                style: style_AGRILADANG_AR_25K_7,
                popuplayertitle: "AGRILADANG_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRILADANG_AR_25K_7.png" /> AGRILADANG_AR_25K'
            });
var format_JALAN_LN_25K_8 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_8 = format_JALAN_LN_25K_8.readFeatures(json_JALAN_LN_25K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_JALAN_LN_25K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_8.addFeatures(features_JALAN_LN_25K_8);
var lyr_JALAN_LN_25K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_8, 
                style: style_JALAN_LN_25K_8,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_8.png" /> JALAN_LN_25K'
            });
var format_SUNGAI_AR_25K_9 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_9 = format_SUNGAI_AR_25K_9.readFeatures(json_SUNGAI_AR_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_SUNGAI_AR_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_9.addFeatures(features_SUNGAI_AR_25K_9);
var lyr_SUNGAI_AR_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_9, 
                style: style_SUNGAI_AR_25K_9,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_9.png" /> SUNGAI_AR_25K'
            });
var format_ADMINISTRASIDESA_AR_25K_10 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_10 = format_ADMINISTRASIDESA_AR_25K_10.readFeatures(json_ADMINISTRASIDESA_AR_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_ADMINISTRASIDESA_AR_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_10.addFeatures(features_ADMINISTRASIDESA_AR_25K_10);
var lyr_ADMINISTRASIDESA_AR_25K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_10, 
                style: style_ADMINISTRASIDESA_AR_25K_10,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_10.png" /> ADMINISTRASIDESA_AR_25K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AGRISAWAH_AR_25K_1.setVisible(true);lyr_NONAGRIALANG_AR_25K_2.setVisible(true);lyr_NONAGRIHUTANKERING_AR_25K_3.setVisible(true);lyr_NONAGRISEMAKBELUKAR_AR_25K_4.setVisible(true);lyr_PEMUKIMAN_AR_25K_5.setVisible(true);lyr_AGRIKEBUN_AR_25K_6.setVisible(true);lyr_AGRILADANG_AR_25K_7.setVisible(true);lyr_JALAN_LN_25K_8.setVisible(true);lyr_SUNGAI_AR_25K_9.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AGRISAWAH_AR_25K_1,lyr_NONAGRIALANG_AR_25K_2,lyr_NONAGRIHUTANKERING_AR_25K_3,lyr_NONAGRISEMAKBELUKAR_AR_25K_4,lyr_PEMUKIMAN_AR_25K_5,lyr_AGRIKEBUN_AR_25K_6,lyr_AGRILADANG_AR_25K_7,lyr_JALAN_LN_25K_8,lyr_SUNGAI_AR_25K_9,lyr_ADMINISTRASIDESA_AR_25K_10];
lyr_AGRISAWAH_AR_25K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRIALANG_AR_25K_2.set('fieldAliases', {'AQDATE': 'AQDATE', 'FCODE': 'FCODE', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'NAMOBJ': 'NAMOBJ', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSPDG': 'JNSPDG', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRIHUTANKERING_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNSPHN': 'JNSPHN', 'JNSHTN': 'JNSHTN', 'KRPPHN': 'KRPPHN', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'KLSLCO': 'KLSLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TKTHTN': 'TKTHTN', 'TIPHTN': 'TIPHTN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRISEMAKBELUKAR_AR_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRILADANG_AR_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_8.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_AR_25K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_10.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_1.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRIALANG_AR_25K_2.set('fieldImages', {'AQDATE': '', 'FCODE': '', 'KLSRMP': '', 'KODATC': '', 'NAMOBJ': '', 'PUDATE': '', 'REMARK': '', 'SRS_ID': '', 'JNSPDG': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRIHUTANKERING_AR_25K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNSPHN': '', 'JNSHTN': '', 'KRPPHN': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'KLSLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TKTHTN': '', 'TIPHTN': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRISEMAKBELUKAR_AR_25K_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMUKIMAN_AR_25K_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRIKEBUN_AR_25K_6.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRILADANG_AR_25K_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JALAN_LN_25K_8.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_AR_25K_9.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASIDESA_AR_25K_10.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRISAWAH_AR_25K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRIALANG_AR_25K_2.set('fieldLabels', {'AQDATE': 'no label', 'FCODE': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'NAMOBJ': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSPDG': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRIHUTANKERING_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNSPHN': 'no label', 'JNSHTN': 'no label', 'KRPPHN': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'KLSLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TKTHTN': 'no label', 'TIPHTN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRISEMAKBELUKAR_AR_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRILADANG_AR_25K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_8.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_AR_25K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_10.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});