reverseGeocode({lng: 139.73225, lat: 35.66382}, MAPBOX_API_TOKEN).then(function(results) {
    // logs the address for Ippudo
    console.log(results);
});


document.querySelector("#hideMarkers").addEventListener('click', event=>{
    document.querySelectorAll('.marker').forEach(marker=>{
        marker.style.display = 'none';
    });
});

