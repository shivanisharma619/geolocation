import React, { useState } from 'react';
import { 
	Map, 
	GoogleApiWrapper, 
	Marker,
	InfoWindow,  
} from 'google-maps-react';
import 'styles/content.scss';


function Content({
	google,
	loaded,
}){


  if(!loaded) {
  	return <div>Loading...</div>
  }

  return(
    <div className="row content p-4">
      <div className="col-12 d-flex justify-content-center p-4">
	      <Map
	        google={google}
	        zoom={12}
	        className="google-map"
	        initialCenter={{ lat: 19.0760, lng: 72.8777}}
	      >
	        <Marker
	          name={'Mumbai'}
	        />
	      </Map>
	      </div>
    </div>
  );
};


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(Content);
