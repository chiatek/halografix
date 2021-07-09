import Image from "next/image";

function Project(props) {
    const { image, title, alt, featured } = props.fields;

    return (
        <div className={featured === 1 ? "item featured" : "item"} onClick={() => props.handleShow(props.fields)}>
            <div className="item-container">
                <div className="overlay"></div>
                <div className="image-container">
                    <Image src={image} className="image" alt={alt} layout="fill" />
                    {featured === 1 ? <h4>{title} | <span>featured project</span></h4> : <h4>{title}</h4>}
                </div>
            </div>
        </div>
    );
}

export default Project;