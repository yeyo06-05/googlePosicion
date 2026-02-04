let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 16,
  });

  marker = new google.maps.Marker({
    map: map,
    title: "Tu ubicación",
  });

  // Verificar ubicación en tiempo real
  navigator.geolocation.watchPosition(
    posicion => {
      const lat = posicion.coords.latitude;
      const lng = posicion.coords.longitude;

      document.getElementById("lat").textContent = lat.toFixed(6);
      document.getElementById("lng").textContent = lng.toFixed(6);

      const ubicacion = { lat, lng };

      map.setCenter(ubicacion);
      marker.setPosition(ubicacion);
    },
    error => {
      alert("No se pudo obtener la ubicación");
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0
    }
  );
}
