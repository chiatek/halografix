import { useContext } from "react";
import { DataContext } from "../context/AppData";
import Image from "next/image";
import webdesign_left from "../assets/images/webdesign-left.jpg";
import webdesign_right from "../assets/images/webdesign-right.jpg";

function AddonWebDesign() {
    const [ context ] = useContext(DataContext);
    let webdesign = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.addon_webdesign);
        webdesign = section[0].addon_webdesign[0].fields;
    }

    return (
        <section className="web-design" id="addons">
            <div className="display-container">
                <div className="image-container web-design-left">
                    <Image src={webdesign_left} className="image" alt="web design" layout="fill" />
                </div>
                <div className="web-design-center">
                    <h2>Event Website</h2>
                    <div className="image-container">
                        <Image src={webdesign_right} className="image" alt="web design" layout="fill" />
                    </div>
                </div>
            </div>
            <div className="web-design-right">
                <div className="container">
                    <h3>{webdesign.heading1}</h3>
                    <p>{webdesign.heading2}</p>
                    <ul>
                        <li>{webdesign.list_item1}</li>
                        <li>{webdesign.list_item2}</li>
                        <li>{webdesign.list_item3}</li>
                        <li>{webdesign.list_item4}</li>
                    </ul>
                    <p>{webdesign.content}</p>
                </div>
            </div>
        </section>
    );
}

export default AddonWebDesign;