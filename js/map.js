var map = L.map('map', {
    zoomControl: false
}).setView([-13.812975, -53.101993], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

fetch('archives/limite_brasil_json.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: '#03A9F4',
                weight: 3,
                fillOpacity: 0
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo GeoJSON:', error);
    });


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-details');
    const itemsContainers = document.querySelectorAll('.items__container');

    toggleButton.addEventListener('click', () => {
        itemsContainers.forEach(container => {
            container.classList.toggle('show');
        });

        if (itemsContainers[0].classList.contains('show')){
            toggleButton.textContent = 'Ver menos';
        } else{
            toggleButton.textContent = 'Ver mais';
        }
    });
});