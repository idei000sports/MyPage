"use client"
import dynamic from "next/dynamic";
import React from "react";
import Add from "./add"

export default function Home() {

    //const [map, setMap] = useState(null)



    const Map = React.useMemo(
        () =>
            dynamic(() => import("./map"), {
                loading: () => <p>A map is loading</p>,
                ssr: false
            }),
        []
    );


    return (
        <div>

            <Map />


        </div>
    )
}
/*



*/
