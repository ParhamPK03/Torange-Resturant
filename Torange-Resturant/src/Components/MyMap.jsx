import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => {
    return (
        <MapContainer 
            center={[35.6892, 51.3890]} 
            zoom={13} 
            scrollWheelZoom={false} 
            className="h-screen w-screen"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[35.6892, 51.3890]}>
                <Popup>
                    یک پیام اینجا نمایش داده می‌شود.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;