import { Component } from "react";
import { DataContext } from "../context/AppData";
import Loading from "../components/Loading";

class Contact extends Component {
    static contextType = DataContext;

    url = process.env.FORM_API_URL;
    database = process.env.API_DATABASE;
    user = process.env.API_USER;

    constructor() {
        super();
        this.state = {
            loading: false,
            iframe: false,
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.setState({ loading: true }, () => {  
            setTimeout(() => {
               this.setState({ 
                   iframe: true,
                   loading: false 
                });
             }, 3000);
        });
    }

    render() {
        const [ context ] = this.context;
        let contact = [];

        if (context.data !== undefined) {
            let section = context.data.filter(item => item.contact);
            contact = section[0].contact[0].fields;
        }

        return (
            <section className="contact" id="contact">
                <div className="container">
                    <form id="contact-form" action={this.url} target="iframe" method="post" onSubmit={this.handleSubmit}>
                        <div style={this.state.iframe === false ? {display: "block"} : {display: "none"}}>
                            <div className="fields">
                                <div className="form-left">
                                    <h2>{contact.title}</h2>
                                    <p>{contact.content}</p>
                                    <ul>
                                        <li>Phone: {contact.phone}</li>
                                        <li>Email: {contact.email}</li>
                                    </ul>
                                    <div className="form-group">
                                        <label htmlFor="first_name">first name</label><br />
                                        <input 
                                            type="text" 
                                            name="first_name" 
                                            placeholder="first name here..."
                                            value={this.state.first_name}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name">last name</label><br />
                                        <input 
                                            type="text" 
                                            name="last_name" 
                                            placeholder="last name here..."
                                            value={this.state.last_name}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">email</label><br />
                                        <input 
                                            type="text" 
                                            name="email" 
                                            placeholder="email here..." 
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-right">
                                    <div className="form-group">
                                        <label htmlFor="subject">subject</label><br />
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            placeholder="subject here..." 
                                            value={this.state.subject}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">message</label><br />
                                        <textarea 
                                            name="message"
                                            id="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    <input type="hidden" name="database" value={this.database} />
                                    <input type="hidden" name="user" value={this.user} />
                                    <button type="submit" className="btn-primary">submit</button>
                                </div>
                            </div>
                        </div>
                        {this.state.loading === true ? <Loading /> : null}
                        <div style={this.state.iframe === true ? {display: "block"} : {display: "none"}}>
                            <iframe 
                                className="iframe"
                                title="iframe"
                                name="iframe" 
                                scrolling="no"
                                src={this.url}>
                            </iframe>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;