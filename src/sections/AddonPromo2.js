import { Fragment } from "react";
import { useContext } from "react";
import { DataContext } from "../context/AppData";
import Image from "next/image";
import halografix_flyer_mobile from "../assets/images/halografix-flyer-mobile.jpg";

function AddonPromo2() {
    const [ context ] = useContext(DataContext);
    const items = [];
    let promo = [];
    let addons = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.services);
        promo = section[0].services;
        addons = promo.filter(item => item.fields.addon === 1 && item.fields.featured === 1);
        
        for (let i = 3; i < 6; i++) {
            items.push(
                <Fragment key={addons[i].fields.id}>
                    <h3 key={i}>{addons[i].fields.description}</h3>
                    <p key={i+1}>{addons[i].fields.details}</p>
                </Fragment>
            );
        }
    }

    return (
        <section className="promo-2">
            <div className="container">
                <div className="content">
                    <div className="image-container">
                        <Image src={halografix_flyer_mobile} className="image" alt="Halografix Flyer" layout="fill" />
                    </div>
                    <div className="overlay">
                        {items}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddonPromo2;