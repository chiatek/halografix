import Image from "next/image";

function ListItem(props) {
    return (
        <li>
            <div className="image-container">
                <Image src={props.image} className="image" alt={props.alt} layout="fill" />
            </div>
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </li>
    );
}

export default ListItem;