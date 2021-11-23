import "./listaPortfolio.scss";

export default function ListaPortfolio(props) {
    return (
        <li className={props.active ? "listaPortfolio active" : "listaPortfolio"}
        onClick={()=>props.setSelected(props.id)}>
            {props.title}
        </li>
    )
}
