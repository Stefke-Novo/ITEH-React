import React,{useState} from 'react';
import './Pocetna.css';
import Kartica from "./../../Elementi/Kartica/Kartica";
function Pocetna() {
    const [kartice,promeniKrtice] = useState([
        {
            key:1,
            slika:"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            naslov:"Naslov 1",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            key:2,
            slika:"https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            naslov:"Naslov 2",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            key:3,
            slika:"https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80",
            naslov:"Naslov 3",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            key:4,
            slika:"https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            naslov:"Naslov 4",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            key:5,
            slika:"https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
            naslov:"Naslov 5",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            key:6,
            slika:"https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            naslov:"Naslov 6",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            key:7,
            slika:"https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            naslov:"Naslov 7",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            key:8,
            slika:"https://images.unsplash.com/photo-1563402963297-b23872a8187c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=790&q=80",
            naslov:"Naslov 8",
            opis:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
    ]); 
    return (
        <div id='pocetna'>
            <div id="pocetna1">
                <h1>Pocetna</h1>
            </div>
            <div id='container'>
                {kartice.map((kartica)=>{
                    return(
                        <Kartica key={kartica.key} slika={kartica.slika} naslov={kartica.naslov} opis={kartica.opis} />
                    );
                })}
            </div>
        </div>
    )
}

export default Pocetna
