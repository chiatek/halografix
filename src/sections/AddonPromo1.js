import { Fragment } from "react";
import { useContext } from "react";
import { DataContext } from "../context/AppData";
import Image from "next/image";
import halografix_productions from "../assets/images/halografix-productions.jpg";

function AddonPromo1() {
    const [ context ] = useContext(DataContext);
    const items = [];
    let promo = [];
    let addons = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.services);
        promo = section[0].services;
        addons = promo.filter(item => item.fields.addon === 1 && item.fields.featured === 1);
        
        for (let i = 0; i < 3; i++) {
            items.push(
                <Fragment key={addons[i].fields.id}>
                    <h3 key={i}>{addons[i].fields.description}</h3>
                    <p>{addons[i].fields.details}</p>
                </Fragment>
            );
        }
    }

    return (
        <section className="promo-1">
            <div className="content">
                <div className="image-container">
                    <Image src={halografix_productions} className="image" alt="Halografix Productions" layout="fill" />
                </div>
                <div className="container">
                    {items}
                </div>
            </div>
        </section>
    );
}

export default AddonPromo1;