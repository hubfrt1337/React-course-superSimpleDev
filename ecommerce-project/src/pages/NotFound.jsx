import {Header} from "../components/Header";
import './NotFound.css'
export function NotFound({cart}) {
    return (
        <>
            <Header cart={cart}/>
            <h1 className="text"><i>404 - Page Not Found</i></h1>
        </>
    )
}