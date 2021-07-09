import { Component } from "react";
import { DataContext } from "../context/AppData";
import Project from "../components/Project";
import Pagination from "../components/Pagination";

class VideographyWork extends Component {
    static contextType = DataContext;

    position = 0;

    constructor() {
        super();
        this.state = {
            category: "videography",
            videoModal: "none",
            fields: [],
            currentPage: 1,
            itemsPerPage: 3
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleShow = (fields) => {
        this.position = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';

        this.setState({
            videoModal: "block",
            fields: fields
        });
    }

    handleClose = () => {
        document.body.style.position = '';
        window.scrollTo(0, this.position);

        this.setState({
            videoModal: "none",
            fields: []
        });
    }

    handleClickOutside = (event) => {
        if (event.target.id === "modal") {
            document.body.style.position = '';
            window.scrollTo(0, this.position);

            this.setState({
                videoModal: "none",
                fields: []
            });
        }
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        });
    }

    render() {
        const [ context ] = this.context;
        let work = [];
        let currentItems = [];

        if (context.data !== undefined) {
            const section = context.data.filter(item => item.work);
            
            if (section[0] !== undefined) {
                work = section[0].work;
                work = work.filter(item => item.fields.category === this.state.category)
                work.sort(function(a,b) { return a.fields.id - b.fields.id; });
    
                // Set pagination variables
                const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage;
                const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
                currentItems = work.slice(indexOfFirstPost, indexOfLastPost);
            }
        }

        return (
            <section className="work videography-work">
                <div className="container">
                    <div className="projects">
                        {currentItems.map(item => {
                            return <Project key={item.primary_key} fields={item.fields} handleShow={this.handleShow} />
                        })}
                    </div>
                    <Pagination itemsPerPage={this.state.itemsPerPage} totalItems={work.length} currentPage={this.state.currentPage} paginate={this.paginate} />
                </div>

                <div id="modal" className="modal modal-iframe" style={{display: this.state.videoModal}}>
                    <span className="iframe-close" onClick={this.handleClose}>&times;</span>
                    <iframe title={this.state.fields.title} src={this.state.fields.url}></iframe>
                    <h3>{this.state.fields.title}</h3>
                </div>
            </section>
        );
    }
}

export default VideographyWork;