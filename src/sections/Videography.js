import { useContext } from "react";
import { DataContext } from "../context/AppData";
import Image from "next/image";
import videography_alt from "../assets/images/videography-alt.jpg";

function Videography() {
    const [ context ] = useContext(DataContext);
    let videography = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.videography)
        videography = section[0].videography[0].fields;
    }

    return (
        <section className="videography" id="videography">
            <div className="container">
                <div className="container-right">
                    <h2>{videography.heading}</h2>
                    <p>{videography.content}</p>
                </div>
            </div>
            <div className="image-container">
                <Image src={videography_alt} className="image" alt="videography" layout="fill" />
            </div>
        </section>
    );
}

export default Videography;