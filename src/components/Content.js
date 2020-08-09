import React, { useState } from 'react';
import { 
	Map, 
	GoogleApiWrapper, 
	Marker,
	InfoWindow,
	Polygon,
} from 'google-maps-react';
import 'styles/content.scss';

const triangleCoords = [
  { lat: 19.07366956, lng: 72.84749221 },
  { lat: 19.05400526, lng: 72.88481138 },
  { lat: 19.09602431, lng: 72.88378142 },
  { lat: 19.07366956, lng: 72.84749221 }
];

function Content({
	google,
	loaded,
}) {

  if(!loaded) {
  	return <div>Loading...</div>
  }

  return (
    <div className="row content p-4">
      <div className="col-12 d-flex justify-content-center p-4">
	      <Map
	        google={google}
	        zoom={13}
	        className="google-map"
	        initialCenter={{ lat: 19.0760, lng: 72.8777 }}
	      >
	        <Marker
	          name={'Mumbai'}
	        />
	        <Polygon
	          paths={triangleCoords}
	          strokeColor="#FF0000"
	          strokeOpacity={0.8}
	          strokeWeight={2}
	          fillColor="#FF0000"
	          fillOpacity={0.35} 
	        />
	      </Map>
	      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(Content);
