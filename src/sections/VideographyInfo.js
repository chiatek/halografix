import { useContext } from "react";
import { DataContext } from "../context/AppData";
import Image from "next/image";
import videography_mobile from "../assets/images/videography-mobile.jpg";

function VideographyInfo() {
    const [ context ] = useContext(DataContext);
    let videography_info = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.videography_info);
        videography_info = section[0].videography_info[0].fields;
    }

    return (
        <section className="videography-info">
            <div className="content">
                <div className="container">
                    <h2>{videography_info.heading1}</h2>
                    <p>{videography_info.heading2}</p>
                    <ul>
                        <li>{videography_info.list_item1}</li>
                        <li>{videography_info.list_item2}</li>
                        <li>{videography_info.list_item3}</li>
                        <li>{videography_info.list_item4}</li>
                    </ul>
                    <p>{videography_info.content}</p>
                </div>
                <div className="image-container">
                    <Image src={videography_mobile} className="image" alt="videography" layout="fill" />
                </div>
            </div>
        </section>
    );
}

export default VideographyInfo;