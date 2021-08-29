import { Component } from "react";
import { DataContext } from "../context/AppData";
import FormWizard from "../forms/FormWizard";
import Faq from "../components/Faq";
import ScrollTo from "../components/ScrollTo";

class AddonCTA extends Component {
    static contextType = DataContext;

    position = 0;

    constructor() {
        super();
        this.state = {
            faq: "none",
            form: "none"
        }
    }

    componentDidMount() {
        document.getElementById("addon-faq-modal").addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.getElementById("addon-faq-modal").removeEventListener('click', this.handleClickOutside, true);
    }

    handleShow = (event) => {
        this.position = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        if (event.target.id === "addon-cta-faq") {
            this.setState({
                faq: "block"
            });
        }
        else {
            this.setState({
                form: "block"
            });
        }
    }

    handleClose = () => {
        document.body.style.position = '';
        window.scrollTo(0, this.position);

        this.setState({
            faq: "none",
            form: "none"
        });
    }

    handleClickOutside = (event) => {
        if (event.target.id === "addon-faq") {
            document.body.style.position = '';
            window.scrollTo(0, this.position);

            this.setState({
                faq: "none"
            });
        }
    }

    handleClick = (event) => {
        let section = document.querySelector(event.target.name);
        ScrollTo(section, 1250, 65);
    };

    render() {
        const [ context ] = this.context;
        let addon_cta = [];

        if (context.data !== undefined) {
            let section = context.data.filter(item => item.addon_cta);
            addon_cta = section[0].addon_cta[0].fields;
        }
        
        return (
            <section className="addon-cta cta">
                <div className="container">
                    <h2>{addon_cta.heading}</h2>
                    <p>{addon_cta.content} <button className="link" id="addon-cta-faq" onClick={this.handleShow}>{addon_cta.link}</button></p>
                    <button className="btn-primary" name={addon_cta.button_url} onClick={this.handleClick}>{addon_cta.button_text}</button>
                </div>

                <div className="modal" style={{display: this.state.form}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-form" id="addon-modal">
                                <span className="close" onClick={this.handleClose}>&times;</span>
                                <FormWizard type="videography" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="addon-faq-modal" className="modal" style={{display: this.state.faq}}>
                    <div className="modal-dialog" id="addon-faq">
                        <div className="modal-content">
                            <div className="modal-form">
                                <span className="close" onClick={this.handleClose}>&times;</span>
                                <Faq type="videography" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AddonCTA;