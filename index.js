mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dyNDcyc3VwZXJhd2Vzb21lY29vbGdyb3VwIiwiYSI6ImNrN250cm1seTAyODIzZmptcW9iazZ5OXYifQ.OlkcC2IwNkLMVEuzloHkAA';

var bounds = [
  [-79.787949, 43.356919],
  [-78.916770, 44.096508]
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ggr472superawesomecoolgroup/ck8nx2a1i1cv31injqeeosnda',
  center: [-79.3753, 43.71555], // starting point
  zoom: 10.5, // starting zoom level
  maxBounds: bounds // set bounds of map
});

// disable map rotation
map.dragRotate.disable();

// load data
map.on('load', () => {
  // load basic neighbourhood outline
  map.addSource('neighbourhoodsToronto', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.4fne8bjm'
  });
  map.addLayer({
    'id': 'neighbourhoodsFill',
    'type': 'fill',
    'source': 'neighbourhoodsToronto',
    'layout': {},
    'paint': {
      'fill-color': 'white',
      'fill-opacity': 0.2,
    },
    'source-layer': 'Neighbourhoods-40wgft'
  });
  map.addLayer({
    'id': 'neighbourhoodsLine',
    'type': 'line',
    'source': 'neighbourhoodsToronto',
    'layout': {},
    'paint': {
      'line-color': 'black',
      'line-width': 1.5
    },
    'source-layer': 'Neighbourhoods-40wgft'
  });

  // load all chemical points
  // map.addSource('allChemicals', {
  //   'type': 'vector',
  //   'url': 'mapbox://ggr472superawesomecoolgroup.8y48jjxn'
  // });
  // map.addLayer({
  //   'id': 'allChemicalsCircle',
  //   'type': 'circle',
  //   'source': 'allChemicals',
  //   'layout': {
  //     'visibility': 'none'
  //   },
  //   'paint': {
  //     'circle-color': 'deeppink',
  //     'circle-radius': 2
  //   },
  //   'source-layer': 'chemtrak_-_all_chemicals-1o24as'
  // });


  // Load acetaldehyde choropleth
  map.addSource('acetaldehyde_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.7qcru0xx'
  });
  map.addLayer({
    "id": "acetaldehydeFill",
    "type": "fill",
    "source": "acetaldehyde_per_hood",
    "source-layer": "acetaldehyde_hood-38nl5a",
    'layout': {
      'visibility': 'visible'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        22151, '#90a8e4',
        111187, '#a38dd3',
        362119, '#b278c0',
        1006334, '#c53760',
        1703813, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load acetaldehyde points
  map.addSource('acetaldehyde', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/acetaldehyde.geojson'
  });
  map.addLayer({
    'id': 'acetaldehydeCircle',
    'type': 'circle',
    'source': 'acetaldehyde',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // Load cadmium choropleth
  map.addSource('cadmium_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.94hkyj2x'
  });
  map.addLayer({
    "id": "cadmiumFill",
    "type": "fill",
    "source": "cadmium_per_hood",
    "source-layer": "cadmium_hood-2hj335",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.302112, '#90a8e4',
        1.540924, '#a38dd3',
        2.252006, '#b278c0',
        12.376915, '#c53760',
        37.188315, '#b42626'
      ],

      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load cadmium points
  map.addSource('cadmium', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/cadmium.geojson'
  });
  map.addLayer({
    'id': 'cadmiumCircle',
    'type': 'circle',
    'source': 'cadmium',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // Load chloroform choropleth
  map.addSource('chloroform_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.cooy8kcp'
  });
  map.addLayer({
    "id": "chloroformFill",
    "type": "fill",
    "source": "chloroform_per_hood",
    "source-layer": "chloroform_hood-48ah85",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        1.303829, '#90a8e4',
        5.692346, '#a38dd3',
        12.802116, '#b278c0',
        22.144961, '#c53760',
        43.552594, '#b42626'
      ],

      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load chloroform points
  map.addSource('chloroform', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/chloroform.geojson'
  });
  map.addLayer({
    'id': 'chloroformCircle',
    'type': 'circle',
    'source': 'chloroform',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // Load chromium hexavalent choropleth
  map.addSource('chromiumhexavalent_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.57rpih6q'
  });
  map.addLayer({
    "id": "chromiumhexavalentFill",
    "type": "fill",
    "source": "chromiumhexavalent_per_hood",
    "source-layer": "chromiumhexa_hood-1cmig7",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.002636, '#90a8e4',
        0.018890, '#a38dd3',
        0.052581, '#b278c0',
        0.136719, '#c53760',
        0.650726, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  //load chromium hexavalent points
  map.addSource('chromiumhexavalent', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/chromiumhexavalent.geojson'
  });
  map.addLayer({
    'id': 'chromiumhexavalentCircle',
    'type': 'circle',
    'source': 'chromiumhexavalent',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // Load chromium nonhexavalent choropleth
  map.addSource('chromiumnonhexavalent_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.1zdy4eju'
  });
  map.addLayer({
    "id": "chromiumnonhexavalentFill",
    "type": "fill",
    "source": "chromiumnonhexavalent_per_hood",
    "source-layer": "chromiumnonhexa_hood-3mkkd1",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.228647, '#90a8e4',
        0.994835, '#a38dd3',
        2.204711, '#b278c0',
        7.480457, '#c53760',
        13.502433, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load chromium nonhexavalent points
  map.addSource('chromiumnonhexavalent', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/chromiumnonhexavalent.geojson'
  });
  map.addLayer({
    'id': 'chromiumnonhexavalentCircle',
    'type': 'circle',
    'source': 'chromiumnonhexavalent',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load dichloromethane choropleth
  map.addSource('dichloromethane_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.5x6br54j'
  });
  map.addLayer({
    "id": "dichloromethaneFill",
    "type": "fill",
    "source": "dichloromethane_per_hood",
    "source-layer": "dichloromethanemethylenechlor-b46w1n",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.253221, '#90a8e4',
        11.398593, '#a38dd3',
        71.122479, '#b278c0',
        178.359426, '#c53760',
        2241.439052, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load dichloromethane points
  map.addSource('dichloromethane', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/dichloromethane.geojson'
  });
  map.addLayer({
    'id': 'dichloromethaneCircle',
    'type': 'circle',
    'source': 'dichloromethane',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load formaldehyde choropleth
  map.addSource('formaldehyde_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.a9nvadmq'
  });
  map.addLayer({
    "id": "formaldehydeFill",
    "type": "fill",
    "source": "formaldehyde_per_hood",
    "source-layer": "formaldehyde_hood-2rjgqc",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        2.768892, '#90a8e4',
        8.792574, '#a38dd3',
        33.37441, '#b278c0',
        68.539873, '#c53760',
        149.326486, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load formaldehyde points
  map.addSource('formaldehyde', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/formaldehyde.geojson'
  });
  map.addLayer({
    'id': 'formaldehydeCircle',
    'type': 'circle',
    'source': 'formaldehyde',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load lead choropleth
  map.addSource('lead_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.27281nnf'
  });
  map.addLayer({
    "id": "leadFill",
    "type": "fill",
    "source": "lead_per_hood",
    "source-layer": "lead_hood-7cw9wz",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.712240, '#90a8e4',
        2.355826, '#a38dd3',
        8.622575, '#b278c0',
        24.615119, '#c53760',
        49.911980, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load lead points
  map.addSource('lead', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/lead.geojson'
  });
  map.addLayer({
    'id': 'leadCircle',
    'type': 'circle',
    'source': 'lead',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load manganese choropleth
  map.addSource('manganese_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.d79v9i3c'
  });
  map.addLayer({
    "id": "manganeseFill",
    "type": "fill",
    "source": "manganese_per_hood",
    "source-layer": "manganese_hood-ce9vhr",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.168500, '#90a8e4',
        0.592263, '#a38dd3',
        1.030776, '#b278c0',
        3.533952, '#c53760',
        6.492135, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load manganese points
  map.addSource('manganese', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/manganese.geojson'
  });
  map.addLayer({
    'id': 'manganeseCircle',
    'type': 'circle',
    'source': 'manganese',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load mercury choropleth
  map.addSource('mercury_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.5tdrn6tu'
  });
  map.addLayer({
    "id": "mercuryFill",
    "type": "fill",
    "source": "mercury_per_hood",
    "source-layer": "mercury_hood-1v8kja",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.013197, '#90a8e4',
        0.039830, '#a38dd3',
        0.082232, '#b278c0',
        0.154511, '#c53760',
        0.274799, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load mercury points
  map.addSource('mercury', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/mercury.geojson'
  });
  map.addLayer({
    'id': 'mercuryCircle',
    'type': 'circle',
    'source': 'mercury',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load nickel choropleth
  map.addSource('nickel_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.6tow065g'
  });
  map.addLayer({
    "id": "nickelFill",
    "type": "fill",
    "source": "nickel_per_hood",
    "source-layer": "nickel_hood-c2jrlw",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        0.747298, '#90a8e4',
        3.229879, '#a38dd3',
        7.880733, '#b278c0',
        19.368970, '#c53760',
        33.101590, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load nickel points
  map.addSource('nickel', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/nickel.geojson'
  });
  map.addLayer({
    'id': 'nickelCircle',
    'type': 'circle',
    'source': 'nickel',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load nitrogen oxides choropleth
  map.addSource('nitrogenoxides_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.94wip23g'
  });
  map.addLayer({
    "id": "nitrogenoxidesFill",
    "type": "fill",
    "source": "nitrogenoxides_per_hood",
    "source-layer": "nitrogenoxides_hood-39aivb",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        1029.011450, '#90a8e4',
        4352.348276, '#a38dd3',
        8935.278797, '#b278c0',
        21965.334262, '#c53760',
        60483.700816, '#b42626'
      ],

      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load nitrogen oxides points
  map.addSource('nitrogenoxides', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/nitrogenoxides.geojson'
  });
  map.addLayer({
    'id': 'nitrogenoxidesCircle',
    'type': 'circle',
    'source': 'nitrogenoxides',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load particulate matter choropleth
  map.addSource('pm_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.7f46uwft'
  });
  map.addLayer({
    "id": "pmFill",
    "type": "fill",
    "source": "pm_per_hood",
    "source-layer": "pm_hood-5xtgpk",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        220.804133, '#90a8e4',
        708.166152, '#a38dd3',
        1914.984146, '#b278c0',
        3750.047015, '#c53760',
        8600.052218, '#b42626'
      ],

      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load particulate matter points
  map.addSource('particulatematter', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/particulatematter.geojson'
  });
  map.addLayer({
    'id': 'particulatematterCircle',
    'type': 'circle',
    'source': 'particulatematter',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load tetrachloroethylene choropleth
  map.addSource('tetra_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.2ytembil'
  });
  map.addLayer({
    "id": "tetraFill",
    "type": "fill",
    "source": "tetra_per_hood",
    "source-layer": "tetrachloroethylene_hood-br61y3",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        6.982826, '#90a8e4',
        23.77346, '#a38dd3',
        51.12357, '#b278c0',
        87.03251, '#c53760',
        216.4351, '#b42626'
      ],

      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load tetrachloroethlylene points
  map.addSource('tetrachloroethlylene', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/tetrachloroethlylene.geojson'
  });
  map.addLayer({
    'id': 'tetrachloroethlyleneCircle',
    'type': 'circle',
    'source': 'tetrachloroethlylene',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load trichloroethlyene choropleth
  map.addSource('trich_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.al1nnnf6'
  });
  map.addLayer({
    "id": "trichFill",
    "type": "fill",
    "source": "trich_per_hood",
    "source-layer": "trichloroethylene_hood-c5dapw",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        1.242005, '#90a8e4',
        7.011403, '#a38dd3',
        95.487709, '#b278c0',
        320.59324, '#c53760',
        671.455199, '#b42626'
      ],

      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load trichloroethlyene points
  map.addSource('trichloroethlyene', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/trichloroethlyene.geojson'
  });
  map.addLayer({
    'id': 'trichloroethlyeneCircle',
    'type': 'circle',
    'source': 'trichloroethlyene',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });

  // load volatile organic compounds choropleth
  map.addSource('voc_per_hood', {
    'type': 'vector',
    'url': 'mapbox://ggr472superawesomecoolgroup.2d7kpmn5'
  });
  map.addLayer({
    "id": "vocFill",
    "type": "fill",
    "source": "voc_per_hood",
    "source-layer": "voc_hood-dp6tdn",
    'layout': {
      'visibility': 'none'
    },
    "paint": {
      "fill-color": [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'MEAN'], 0],
        1509.603509, '#90a8e4',
        5100.560138, '#a38dd3',
        15775.49325, '#b278c0',
        33947.35135, '#c53760',
        56289.32515, '#b42626'
      ],
      "fill-opacity": 0.60,
      "fill-outline-color": 'black'
    }
  });
  // load volatile organic compounds points
  map.addSource('volatileorganiccompounds', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/quinn-mccallum/chemtrackGeojsonData/master/volatileorganiccompounds.geojson'
  });
  map.addLayer({
    'id': 'volatileorganiccompoundsCircle',
    'type': 'circle',
    'source': 'volatileorganiccompounds',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': 'white',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': 'black',
    }
  });
});

// Create popups for neighbourhood polygons
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'neighbourhoodsFill', function(e) {
  popup.remove();
  map.getCanvas().style.cursor = 'pointer';
});

map.on('click', 'neighbourhoodsFill', function(e) {
  let neighbourhoodName = e.features[0].properties.AREA_NAME
  neighbourhoodName = neighbourhoodName.toString();
  let indexToSlice = neighbourhoodName.indexOf('(')
  neighbourhoodName = neighbourhoodName.slice(0, indexToSlice)
  console.log(neighbourhoodName)

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + neighbourhoodName + '</strong>')
  popup.addTo(map);
});

map.on('mouseleave', 'neighbourhoodsFill', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for acetaldehyde facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'acetaldehydeCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let achemName = e.features[0].properties.Chemical_N
  achemName = achemName.toString();
  let afacilityName = e.features[0].properties.Facility_N
  afacilityName = afacilityName.toString()
  let aAddress = e.features[0].properties.Match_addr
  aAddress = aAddress.toString()
  let atotalrele = e.features[0].properties.Total_Rele
  atotalrele = atotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + achemName + '</strong>' + "<br>" + afacilityName + "<br>" + aAddress + "<br> <i>" + "Amount of chemical released to the environment: " + atotalrele + " kg" + "</i><br>" + "<b> To learn more about Acetaldehyde and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Acetaldehyde"> NIH - Acetaldehyde </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'acetaldehydeCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for cadmium facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'cadmiumCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let cchemName = e.features[0].properties.Chemical_N
  cchemName = cchemName.toString();
  let cfacilityName = e.features[0].properties.Facility_N
  cfacilityName = cfacilityName.toString();
  let cAddress = e.features[0].properties.Match_addr
  cAddress = cAddress.toString()
  let ctotalrele = e.features[0].properties.Total_Rele
  ctotalrele = ctotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + cchemName + '</strong>' + "<br>" + cfacilityName + "<br><i>" + cAddress + "<br>" + "Amount of chemical released to the environment: " + ctotalrele + " kg" + "</i><br>" + "<b> To learn more about Cadium and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Cadmium"> NIH - Cadium </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'cadmiumCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for chloroform facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'chloroformCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let chloroName = e.features[0].properties.Chemical_N
  chloroName = chloroName.toString();
  let chlorofacilityName = e.features[0].properties.Facility_N
  chlorofacilityName = chlorofacilityName.toString();
  let chloroAddress = e.features[0].properties.Match_addr
  chloroAddress = chloroAddress.toString()
  let chlorototalrele = e.features[0].properties.Total_Rele
  chlorototalrele = chlorototalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + chloroName + '</strong>' + "<br>" + chlorofacilityName + "<br>" + chloroAddress + "<br><i>" + "Amount of chemical released to the environment: " + chlorototalrele + " kg" + "</i><br>" + "<b> To learn more about Chloroform and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Chloroform"> NIH - Chloroform </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'chloroformCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for chromium hexavalent facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});
map.on('mouseenter', 'chromiumhexavalentCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let chhexaName = e.features[0].properties.Chemical_N
  chhexaName = chhexaName.toString();
  let chhexafacilityName = e.features[0].properties.Facility_N
  chhexafacilityName = chhexafacilityName.toString();
  let chhexaAddress = e.features[0].properties.Match_addr
  chhexaAddress = chhexaAddress.toString()
  let chexatotalrele = e.features[0].properties.Total_Rele
  chexatotalrele = chexatotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + chhexaName + '</strong>' + "<br>" + chhexafacilityName + "<br>" + chhexaAddress + "<br><i>" + "Amount of chemical released to the environment: " + chexatotalrele + " kg" + "</i><br>" + "<b> To learn more about Chromium, Hexavalent and its compounds, and its impacts, please visit: </br>" + '<a href="https://www.niehs.nih.gov/health/topics/agents/hex-chromium/index.cfm"> NIH - Chromium, Hexavalent and its compounds </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'chromiumhexavalentCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for chromium nonhexavalent facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'chromiumnonhexavalentCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let nhexaName = e.features[0].properties.Chemical_N
  nhexaName = nhexaName.toString();
  let nhexafacilityName = e.features[0].properties.Facility_N
  nhexafacilityName = nhexafacilityName.toString();
  let nhexaAddress = e.features[0].properties.Match_addr
  nhexaAddress = nhexaAddress.toString()
  let nhexatotalrele = e.features[0].properties.Total_Rele
  nhexatotalrele = nhexatotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + "Chromium Non-Hexavalent" + '</strong>' + "<br>" + nhexafacilityName + "<br>" + nhexaAddress + "<br><i>" + "Amount of chemical released to the environment: " + nhexatotalrele + " kg" + "<i><br>" + "<b> To learn more about Chromium Non-Hexavalent and its impacts, please visit: </br>" + '<a href="https://www.niehs.nih.gov/health/topics/agents/hex-chromium/index.cfm"> NIH - Chromium Non-Hexavalent</a>')
  popup.addTo(map);
});

map.on('mouseleave', 'chromiumnonhexavalentCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for dichloromethane facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});
map.on('mouseenter', 'dichloromethaneCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let dichchemName = e.features[0].properties.Chemical_N
  dichchemName = dichchemName.toString();
  let dichfacilityName = e.features[0].properties.Facility_N
  dichfacilityName = dichfacilityName.toString()
  let dichAddress = e.features[0].properties.Match_addr
  dichAddress = dichAddress.toString()
  let dichtotalrele = e.features[0].properties.Total_Rele
  dichtotalrele = dichtotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + dichchemName + '</strong>' + "<br>" + dichfacilityName + "<br>" + dichAddress + "<br><i>" + "Amount of chemical released to the environment: " + dichtotalrele + " kg" + "</i><br>" + "<b> To learn more about Dichloromethane and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Dichloromethane"> NIH - Dichloromethane </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'dichloromethaneCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for formaldehyde facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'formaldehydeCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let fchemName = e.features[0].properties.Chemical_N
  fchemName = fchemName.toString();
  let ffacilityName = e.features[0].properties.Facility_N
  ffacilityName = ffacilityName.toString()
  let fAddress = e.features[0].properties.Match_addr
  fAddress = fAddress.toString()
  let ftotalrele = e.features[0].properties.Total_Rele
  ftotalrele = ftotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + fchemName + '</strong>' + "<br>" + ffacilityName + "<br>" + fAddress + "<br><i>" + "Amount of chemical released to the environment: " + ftotalrele + " kg" + "</i><br>" + "<b> To learn more about Formaldehyde and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Formaldehyde"> NIH - Formaldehyde </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'formaldehydeCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for lead facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'leadCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let lchemName = e.features[0].properties.Chemical_N
  lchemName = lchemName.toString();
  let lfacilityName = e.features[0].properties.Facility_N
  lfacilityName = lfacilityName.toString()
  let lAddress = e.features[0].properties.Match_addr
  lAddress = lAddress.toString()
  let ltotalrele = e.features[0].properties.Total_Rele
  ltotalrele = ltotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + lchemName + '</strong>' + "<br>" + lfacilityName + "<br>" + lAddress + "<br><i>" + "Amount of chemical released to the environment: " + ltotalrele + " kg" + "</i><br>" + "<b> To learn more about Lead and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Lead-sulfate"> NIH - Lead </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'leadCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for manganese facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'manganeseCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let magName = e.features[0].properties.Chemical_N
  magName = magName.toString();
  let magfacilityName = e.features[0].properties.Facility_N
  magfacilityName = magfacilityName.toString()
  let magAddress = e.features[0].properties.Match_addr
  magAddress = magAddress.toString()
  let magtotalrele = e.features[0].properties.Total_Rele
  magtotalrele = magtotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + magName + '</strong>' + "<br>" + magfacilityName + "<br>" + magAddress + "<br><i>" + "Amount of chemical released to the environment: " + magtotalrele + " kg" + "</i><br>" + "<b> To learn more about Manganese and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Manganese"> NIH - Manganese </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'manganeseCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for mercury facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'mercuryCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let merName = e.features[0].properties.Chemical_N
  merName = merName.toString();
  let merfacName = e.features[0].properties.Facility_N
  merfacName = merfacName.toString()
  let merAddress = e.features[0].properties.Match_addr
  merAddress = merAddress.toString()
  let mertotalrele = e.features[0].properties.Total_Rele
  mertotalrele = mertotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + merName + '</strong>' + "<br>" + merfacName + "<br>" + merAddress + "<br><i>" + "Amount of chemical released to the environment: " + mertotalrele + " kg" + "</i><br>" + "<b> To learn more about Mercury and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Mercury"> NIH - Mercury </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'mercuryCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for nickel facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'nickelCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let nicName = e.features[0].properties.Chemical_N
  nicName = nicName.toString();
  let nicfacName = e.features[0].properties.Facility_N
  nicfacName = nicfacName.toString()
  let nicAddress = e.features[0].properties.Match_addr
  nicAddress = nicAddress.toString()
  let nictotalrele = e.features[0].properties.Total_Rele
  nictotalrele = nictotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + nicName + '</strong>' + "<br>" + nicfacName + "<br>" + nicAddress + "<br><i>" + "Amount of chemical released to the environment: " + nictotalrele + " kg" + "</i><br>" + "<b> To learn more about Nickel and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Nickel"> NIH - Nickel and its compounds </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'nickelCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for nitrogen oxides facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'nitrogenoxidesCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let nitroName = e.features[0].properties.Chemical_N
  nitroName = nitroName.toString();
  let nitrofacName = e.features[0].properties.Facility_N
  nitrofacName = nitrofacName.toString()
  let nitroAddress = e.features[0].properties.Match_addr
  nitroAddress = nitroAddress.toString()
  let nittotalrele = e.features[0].properties.Total_Rele
  nittotalrele = nittotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + nitroName + '</strong>' + "<br>" + nitrofacName + "<br>" + nitroAddress + "<br><i>" + "Amount of chemical released to the environment: " + nittotalrele + " kg" + "</i><br>" + "<b> To learn more about Nitrogen Oxides and its impacts, please visit: </br>" + '<a href="https://toxtown.nlm.nih.gov/chemicals-and-contaminants/nitrogen-oxides"> NIH - Nitrogen Oxides </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'nitrogenoxidesCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for particulate matter facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'particulatematterCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let parName = e.features[0].properties.Chemical_N
  parName = parName.toString();
  let parfacName = e.features[0].properties.Facility_N
  parfacName = parfacName.toString()
  let parAddress = e.features[0].properties.Match_addr
  parAddress = parAddress.toString()
  let partotalrele = e.features[0].properties.Total_Rele
  partotalrele = partotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + parName + '</strong>' + "<br>" + parfacName + "<br>" + parAddress + "<br><i>" + "Amount of chemical released to the environment: " + partotalrele + " kg" + "</i><br>" + "<b> To learn more about Particulate Matter 2.5 and its impacts, please visit: </br>" + '<a href="https://toxtown.nlm.nih.gov/chemicals-and-contaminants/particulate-matter"> NIH - Particulate Matter 2.5 </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'particulatematterCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for tetrachloroethylene facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'tetrachloroethlyleneCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let tetraName = e.features[0].properties.Chemical_N
  tetraName = tetraName.toString();
  let tetrafacName = e.features[0].properties.Facility_N
  tetrafacName = tetrafacName.toString()
  let tetraAddress = e.features[0].properties.Match_addr
  tetraAddress = tetraAddress.toString()
  let tetratotalrele = e.features[0].properties.Total_Rele
  tetratotalrele = tetratotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + tetraName + '</strong>' + "<br>" + tetrafacName + "<br>" + tetraAddress + "<br><i>" + "Amount of chemical released to the environment: " + tetratotalrele + " kg" + "</i><br>" + "<b> To learn more about Tetrachloroethylene (Perchloroethylene) and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Tetrachloroethylene"> NIH - Tetrachloroethylene (Perchloroethylene) </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'tetrachloroethlyleneCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for trichloroethylene facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'trichloroethlyeneCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let triName = e.features[0].properties.Chemical_N
  triName = triName.toString();
  let trifacName = e.features[0].properties.Facility_N
  trifacName = trifacName.toString()
  let triAddress = e.features[0].properties.Match_addr
  triAddress = triAddress.toString()
  let tritotalrele = e.features[0].properties.Total_Rele
  tritotalrele = tritotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + triName + '</strong>' + "<br>" + trifacName + "<br>" + triAddress + "<br><i>" + "Amount of chemical released to the environment: " + tritotalrele + " kg" + "</i><br>" + "<b> To learn more about Trichloroethylene and its impacts, please visit: </br>" + '<a href="https://pubchem.ncbi.nlm.nih.gov/compound/Trichloroethylene"> NIH - Trichloroethylene </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'trichloroethlyeneCircle', function(e) {
  map.getCanvas().style.cursor = '';
});

// popup for tetrachloroethylene facilities
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mouseenter', 'volatileorganiccompoundsCircle', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  let volfacName = e.features[0].properties.Facility_N
  volfacName = volfacName.toString()
  let volAddress = e.features[0].properties.Match_addr
  volAddress = volAddress.toString()
  let voltotalrele = e.features[0].properties.Total_Rele
  voltotalrele = voltotalrele.toString()

  popup.setLngLat(e.lngLat)
  popup.setHTML("<strong>" + "Volatile Organic Compounds (VOCs)" + '</strong>' + "<br>" + volfacName + "<br>" + volAddress + "<br><i>" + "Amount of chemical released to the environment: " + voltotalrele + " kg" + "</i><br>" + "<b> To learn more about Volatile Organic Compounds and its impacts, please visit: </br>" + '<a href="https://toxtown.nlm.nih.gov/chemicals-and-contaminants/volatile-organic-compounds-vocs"> NIH - Volatile Organic Compounds </a>')
  popup.addTo(map);
});

map.on('mouseleave', 'volatileorganiccompoundsCircle', function() {
  map.getCanvas().style.cursor = '';
});

// insert geocoder search bar
var nav = new mapboxgl.NavigationControl();
map.addControl(nav);

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  }), 'bottom-left');

// creat toggle function to display unique chemical maps
function toggleMap(chem) {
  if (chem === 'all') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'visible');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'visible');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'visible');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'visible');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'visible');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'visible');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'visible');
    map.setLayoutProperty('leadCircle', 'visibility', 'visible');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'visible');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'visible');
    map.setLayoutProperty('nickelCircle', 'visibility', 'visible');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'visible');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'visible');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'visible');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'visible');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'visible');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "hidden";
  } else if (chem === 'acetaldehyde') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'visible');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'visible');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'cadmium') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'visible');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'visible');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'chloroform') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'visible');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'visible');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'chromiumhexavalent') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'visible');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'visible');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'chromiumnonhexavalent') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'visible');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'visible');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'dichloromethane') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'visible');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'visible');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'formaldehyde') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'visible');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'visible');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'lead') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'visible');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'visible');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'manganese') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'visible');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'visible');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'mercury') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'visible');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'visible');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'nickel') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'visible');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'visible');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'nitrogenoxides') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'visible');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'visible');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'particulatematter') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'visible');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'visible');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'tetrachloroethlylene') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'visible');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'visible');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'trichloroethlyene') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'visible');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'visible');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "visible";
  } else if (chem === 'volatileorganiccompounds') {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'visible');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'visible');
    document.getElementById("legend").style.visibility = "visible";
  } else {
    map.setLayoutProperty('acetaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('cadmiumCircle', 'visibility', 'none');
    map.setLayoutProperty('chloroformCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentCircle', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneCircle', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeCircle', 'visibility', 'none');
    map.setLayoutProperty('leadCircle', 'visibility', 'none');
    map.setLayoutProperty('manganeseCircle', 'visibility', 'none');
    map.setLayoutProperty('mercuryCircle', 'visibility', 'none');
    map.setLayoutProperty('nickelCircle', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesCircle', 'visibility', 'none');
    map.setLayoutProperty('particulatematterCircle', 'visibility', 'none');
    map.setLayoutProperty('tetrachloroethlyleneCircle', 'visibility', 'none');
    map.setLayoutProperty('trichloroethlyeneCircle', 'visibility', 'none');
    map.setLayoutProperty('volatileorganiccompoundsCircle', 'visibility', 'none');
    map.setLayoutProperty('acetaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('cadmiumFill', 'visibility', 'none');
    map.setLayoutProperty('chloroformFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('chromiumnonhexavalentFill', 'visibility', 'none');
    map.setLayoutProperty('dichloromethaneFill', 'visibility', 'none');
    map.setLayoutProperty('formaldehydeFill', 'visibility', 'none');
    map.setLayoutProperty('leadFill', 'visibility', 'none');
    map.setLayoutProperty('manganeseFill', 'visibility', 'none');
    map.setLayoutProperty('mercuryFill', 'visibility', 'none');
    map.setLayoutProperty('nickelFill', 'visibility', 'none');
    map.setLayoutProperty('nitrogenoxidesFill', 'visibility', 'none');
    map.setLayoutProperty('pmFill', 'visibility', 'none');
    map.setLayoutProperty('tetraFill', 'visibility', 'none');
    map.setLayoutProperty('trichFill', 'visibility', 'none');
    map.setLayoutProperty('vocFill', 'visibility', 'none');
    document.getElementById("legend").style.visibility = "hidden";
  }
};
