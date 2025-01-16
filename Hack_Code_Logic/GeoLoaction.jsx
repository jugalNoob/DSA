function Mean() {
    // Open URLs
    window.open('https://www.w3schools.com/ai/ai_probability.asp', '_blank');
    window.open('https://medium.com/@hellorahulk/deeplearning-in-js-hands-on-72e4618dff7f', '_blank');
  
    console.log('Opening URLs...');
    
    // Geolocation Success Callback
    function success(position) {
      console.log('Jugal');
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
    }
  
    // Geolocation Error Callback
    function error(err) {
      console.error('Error getting location:', err.message);
    }
  
    // Request Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
 
//  <button onClick={Mean()}>onclick</button>