import { getAllMenus } from "@/lib/apollo/menu";
import NavItem from "@components/navbar/NavItem";
import axios from "axios";
import { useEffect, useState } from 'react'

async function fetchData() {
    const response = await getAllMenus()
    return response
}


const Navbar = (props) => {
    const [dateTime, setDateTime] = useState(false);

    useEffect(() => {
        axios
            .get('https://worldtimeapi.org/api/ip')
            .then((res) => {
                setDateTime(res.data.datetime);
            })
            .catch((error) => console.error(error));
    }, []);

    console.log('dateTime', dateTime)
    return (
        <div className="hidden sm:block">
            {/*{data.map((link) => (*/}
            {/*    <NavItem menu={link} key={link.name}/>*/}
            {/*))}*/}
        </div>
    )
}


export default Navbar