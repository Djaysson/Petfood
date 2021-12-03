import "./styles.css";
import GoogleMapReact from "google-map-react";
import Marker from "../marker/index";
const Map = () => {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        center={{
          lat: -3.776798,
          lng: -38.5619116,
        }}
        defaultZoom={16}
      >
        <Marker lat={-3.776798} lng={-38.5619116} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
