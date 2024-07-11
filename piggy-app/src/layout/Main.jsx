
import { Outlet, useLoaderData } from "react-router-dom";
import baner from "../assets/baner.svg";
import Nav from "../components/Nav";
import { fetchData } from "../LocalStorage.jsx"

export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()

    return (
        <div className="layout">
            <Nav userName={userName} />
            <main>
                <Outlet />
            </main>
            <img src={baner} alt="" />
        </div>
    )
}
export default Main