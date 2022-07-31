import "./style.css";
import { useParams } from "react-router-dom";

export default function Seats({setFooterStatus, footerStatus}) {

    const { idSessao } = useParams();

    const[seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(obj => {
            setFooterStatus({...footerStatus});
            setSeats(obj.data);
            console.log(obj.data)
        })
    }, []);

    return(
        <div className="seats">
            Aqui tem assentos: {`${idSessao}`}
        </div>
    )
}