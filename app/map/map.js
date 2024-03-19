"use client"

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function map() {
    return (
        <div>
            <h1>aaaa</h1>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}
