import { Component } from "react";
import { DataContext } from "../context/AppData";
import Image from "next/image";
import ScrollTo from "../components/ScrollTo";
import halografix_sign from "../assets/images/halografix-sign.jpg";

class About extends Component {
    static contextType = DataContext;

    handleClick = (event) => {
        let section = document.querySelector(event.target.name);
        ScrollTo(section, 1250, 150);
    };

    render() {
        const [ context ] = this.context;
        let about = [];

        if (context.data !== undefined) {
            let section = context.data.filter(item => item.about);
            about = section[0].about[0].fields;
        }

        return (
            <section className="about" id="about">
                <div className="container">
                    <div className="container-left">
                        <h2>{about.heading}</h2>
                        <p>{about.content}</p>
                    </div>
                </div>
                <div className="image-container">
                    <Image src={halografix_sign} className="image" alt="halografix sign" layout="fill" />
                </div>
            </section>
        );
    }
}

export default About;