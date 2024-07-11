import { useLoaderData } from "react-router-dom";

//  Local Storage
import { fetchData } from "../LocalStorage.jsx"

export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    )
}
export default Dashboard