"use client"

import "leaflet/dist/leaflet.css";
import "./css.css"
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip, useMapEvents } from 'react-leaflet'
import { useState, useEffect, useCallback } from 'react';
import React from "react";

import useSWR from "swr";


const fetcher = url => fetch(url).then(res => res.json())

function GetOrigins(){
    const { data, error } = useSWR('/api/origin', fetcher);
	if (error)return <div>failed to load</div>
	if (!data)return <div>loading...</div>

	return <div><p>呼んだ</p></div>
}




export default function Map() {



    const [map, setMap] = useState(null)
    const [zoom, setZoom] = useState(6);
    const [center, setCenter] = useState([40.7035, -73.8196]);

    const [popups, setPopups] = useState([]);
    const [cityPopups, setCityPopups] = useState([]);

    const [origins, setOrigins] = useState([]);

    const [cities, setCities] = useState([{ county: "dummy", lattitude: 0, longitude: 0 }]);

    //const [position, setPosition] = useState("");

    const [nowPosition, setNowPosition] = useState({ lat: 40.7035, lng: -73.8196 });

    const [testPopup, setTestPopup] = useState("");




    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/origin');
            const json = await response.json();
            setOrigins(json);
            console.log("origin 読み込んだ")
        };
        fetchNotes();
    }, []);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/county');
            const json = await response.json();
            setCities(json);
            console.log("city 読み込んだ")
        };
        fetchNotes();
    }, []);



    function NowCoodinates() {
        //現在地、ドラッグ終わったら発火
        const map = useMapEvents({
            dragend: (e) => {
                setNowPosition({ lat: e.target.getCenter().lat, lng: e.target.getCenter().lng });
            }
        });
        return null;
    }

    function make現在地周辺のcities() {

        let 現在地周辺 = []
        for (let city in cities) {
            let latの差 = nowPosition.lat - cities[city].lattitude;
            let lngの差 = nowPosition.lng - cities[city].longitude;
            let 最小範囲 = -10;
            let 最大範囲 = 10;
            if (最小範囲 < latの差 && latの差 < 最大範囲 && 最小範囲 < lngの差 && lngの差 < 最大範囲) {
                現在地周辺.push(
                    cities[city]
                );
            }
        }

        //console.log(現在地周辺);
        return 現在地周辺;
    }

    function make表示したいcounty(現在地周辺) {
        let 表示したいcounty = []
        for (let city in 現在地周辺) {

            //郡のオブジェクト
            let county = {
                county: 現在地周辺[city].county,
                lattitude: 現在地周辺[city].lattitude,
                longitude: 現在地周辺[city].longitude,
                bandsArr: [],
                bandNames: [],
            }

            //郡のオブジェクトのリストにその群のバンドを入れる
            for (let origin in origins) {

                //console.log(現在地周辺[city].id);
                if (現在地周辺[city].county_code == origins[origin].county_code) {
                    county.bandsArr.push(origins[origin]);
                    county.bandNames.push(origins[origin].name)
                }
                

            }

            //郡にバンドの情報が一つでもあれば表示するリストにその群を入れる。0なら表示リストに入れない。
            if (county.bandsArr.length != 0) {
                表示したいcounty.push(county);
            }

        }

        return 表示したいcounty;
    }

    useEffect(() => {
        //現在地変わったら

        let 現在地周辺 = make現在地周辺のcities();
        let 表示したいcounty = make表示したいcounty(現在地周辺)

        for (let i = 0; i < 表示したいcounty.length; i++) {
            表示したいcounty[i].names = 表示したいcounty[i].bandNames.join();
        }


        setTestPopup(表示したいcounty.map((item, index) => (

            <Marker
                icon={L.divIcon({
                    html: `${item.names}`,
                    className: 'divicon1',
                    iconSize: [150, 10],
                    //iconSize: [80, 30],
                    //iconAnchor: [0, 0],
                    //popupAnchor: [0, -10]
                })}
                key={index}
                position={[item.lattitude, item.longitude]}
            >
            </Marker>
        )))
    }, [nowPosition]);

    //<p>lat: {nowPosition.lat} lng : {nowPosition.lng}</p>

    return (
        <div>

            <GetOrigins />
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                ref={setMap}
                style={{ height: '98vh' }}
            >
                <TileLayer
                    attribution='Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
                    url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />

                {testPopup}
                <NowCoodinates />
            </MapContainer>


        </div>
    )
}

/*


            <MapContainer center={center} zoom={4} scrollWheelZoom={true} style={{ height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {popups.map((item, index) => (
                    <Popup
                        key={index}
                        position={[parseFloat(item.緯度), parseFloat(item.経度)]}
                        autoClose={false}
                        closeOnClick={false}
                        closeButton={false}
                        closeOnEscapeKey={false}
                    >{item.name}</Popup>
                ))}

                {cityPopups.map((item, index) => (
                    <Popup
                        key={index}
                        position={[parseFloat(item.lattitude), parseFloat(item.longitude)]}
                        autoClose={false}
                        closeOnClick={false}
                        closeButton={false}
                        closeOnEscapeKey={false}
                    >{item.county}</Popup>
                ))}


            </MapContainer>



                {cityPopups.map((item, index) => (
                    <Popup
                        key={index}
                        position={[item.lattitude, item.longitude]}
                        autoClose={false}
                        closeOnClick={false}
                        closeButton={false}
                        closeOnEscapeKey={false}
                    >{item.county}</Popup>
                ))}


{cityPopups.map((item, index) => (
    <Popup
        key={index}
        position={[parseFloat(item.緯度), parseFloat(item.経度)]}
        autoClose={false}
        closeOnClick={false}
        closeButton={false}
        closeOnEscapeKey={false}
    >{item.county}</Popup>
))}
*/