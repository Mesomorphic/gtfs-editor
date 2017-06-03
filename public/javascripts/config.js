var GtfsEditor = GtfsEditor || {};

(function(G, $) {

  G.config = {
  	mapboxKey: 'pk.eyJ1IjoibGFpZGlnIiwiYSI6ImNqM2hsb216ZjAwaG8ycW15eDQ4amZvNHIifQ.AFQ1Fvljbppie7lLMVl1pQ',
  	mapboxSatelliteKey: 'conveyal.map-a3mk3jug',
    agencyId: 1,
    mapCenter: [38.923092, -77.038879],
    mapZoom: 15, 
    showMajorStops: true,
    showStandardStops: true,
    baseUrl: '/'
  };

})(GtfsEditor, jQuery);
