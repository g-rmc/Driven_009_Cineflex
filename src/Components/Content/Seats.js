import "./style.css";
import { useParams } from "react-router-dom";

export default function Seats() {

    const { idSessao } = useParams();

    return(
        <div className="seats">
            Aqui tem assentos: {`${idSessao}`}
        </div>
    )
}