import React, { useEffect, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { GrLocationPin } from 'react-icons/gr'

// import './map.css'

const Map = () => {
  const mapRef = useRef(null)

  const position = useMemo(() => [-21.5993795, -48.3892107], [])

  useEffect(() => {
    if (mapRef.current) {
      const { current: map } = mapRef
      map.flyTo(position, 13, { duration: 2 })
    }
  }, [position])

  // Define o ícone personalizado para o marcador
  const markerIcon = new L.Icon({
    iconUrl: '/imglocal.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{
        height: '400px',
        width: '100%',
        maxHeight: '1200px',
        margin: '0 auto',
      }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Imobiliaria YourHouse</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
