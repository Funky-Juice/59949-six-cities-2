import leaflet from 'leaflet';

export default (offersList, container) => {
  const city = [52.38333, 4.9];
  const zoom = 12;

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const map = leaflet.map(container, {
    center: city,
    zoom,
    zoomControl: false,
    marker: true
  });

  map.setView(city, zoom);

  leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `\
      &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
      contributors &copy; 
      <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);


  if (!offersList) {
    return;
  }

  offersList.map((offer) => {
    const {latitude: x, longitude: y} = offer.location;

    leaflet
      .marker([x, y], {icon})
      .addTo(map);
  });
};
