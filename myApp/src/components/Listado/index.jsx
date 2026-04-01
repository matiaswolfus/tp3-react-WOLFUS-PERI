import Elemento from "../Elemento";

const Listado = ({nombres}) => {
    return (
        <ul>
            { nombres.map(n=> <Elemento nombre={n} />) }
        </ul>
    );
}

export default Listado;