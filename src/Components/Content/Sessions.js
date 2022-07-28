import "./style.css";
import { useParams } from "react-router-dom";

export default function Sessions() {

    const { idFilme } = useParams();

    return (
        <div className="sessions">
            Aqui tem sessões: {idFilme}
        </div>
    )
}