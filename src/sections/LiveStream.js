import { useContext } from "react";
import { DataContext } from "../context/AppData";
import Image from "next/image";
import videography_livestream from "../assets/images/videography-live-stream.jpg";

function LiveStream() {
    const [ context ] = useContext(DataContext);
    let livestream = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.livestream);
        livestream = section[0].livestream[0].fields;
    }

    return (
        <section className="live-stream" id="livestream">
            <div className="live-stream-container">
                <div className="image-container">
                    <Image src={videography_livestream} className="image" alt="live stream" layout="fill" />
                </div>
                <div className="container">
                    <h2>{livestream.heading}</h2>
                    <p>{livestream.content}</p>
                </div>
            </div>
        </section>
    );
}

export default LiveStream;