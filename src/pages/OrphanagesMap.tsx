import React from 'react';
import mapMakerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
    iconUrl: mapMakerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>SP</span>
                </footer>
            </aside>
 
            <Map center={[-23.4444954,-46.5812401]} zoom={15} style={{width: '100%', height: '100%'}}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker position={[-23.4444954,-46.5812401]} icon={mapIcon}>
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das Meninas

                        <Link to="/orphanages/1"><FiArrowRight size={20} color="#fff" /></Link>
                    </Popup>    
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap