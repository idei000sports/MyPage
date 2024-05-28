"use client"

import "leaflet/dist/leaflet.css";
import "./css.css"
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip, useMapEvents } from 'react-leaflet'
import { useState, useEffect, useCallback } from 'react';
import React from "react";



export default function Map(props) {

    const origins = props.origins;
    const cities = props.cities;
  

    useEffect(() => {
        表示();
    }, []);



    const [nowPosition, setNowPosition] = useState({ lat: 40.7035, lng: -73.8196 });
    const [testPopup, setTestPopup] = useState("");


    function NowCoodinates() {
        //現在地、ドラッグ終わったら発火
        const map = useMapEvents({
            dragend: (e) => {
                setNowPosition({ lat: e.target.getCenter().lat, lng: e.target.getCenter().lng });
                表示();
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

    function 表示() {
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
                })}
                key={index}
                position={[item.lattitude, item.longitude]}
            >
            </Marker>
        )))
    }


    return (
        <div style={{height: "100vh", width: "100vh"}}>
        <MapContainer
            center={[40.7035, -73.8196]}
            zoom={6}
            scrollWheelZoom={true}
            style={{ height: '100vh' }}
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
