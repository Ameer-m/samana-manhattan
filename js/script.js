// Initialize the map
function initMap() {
    // Set the coordinates for the map center 25.063274144699857, 55.20915224346558
  
    var center = { lat: 25.0464806, lng: 55.2055847 };
  
    // Create the map instance
    var map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 13,
      styles: [
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [
            {
              color: "#878787",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
            {
              saturation: "-99",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f9f5ed",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c9c9c9",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#aee0f4",
            },
          ],
        },
      ],
    });
  
    // Create a marker for the location
    var marker = new google.maps.Marker({
      position: center,
      map: map,
    });
  
    // Create an info window for the marker
    var infowindow = new google.maps.InfoWindow({
      content: "This is the info window content",
    });
  
    // // Open the info window when the marker is clicked
    // marker.addListener("click", function () {
    //   infowindow.open(map, marker);
    // });
  
    // // Create an info window for the marker
    // var infowindow = new google.maps.InfoWindow({
    //   content: "This is the info window content",
    // });
  
    // // Open the info window
    // infowindow.open(map, marker);
  }
  initMap();

  function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 20;
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  }