import { useState } from "react";
import { DataContext } from "../context/AppData";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Videography from "../sections/Videography";
import VideographyInfo from "../sections/VideographyInfo";
import VideographyFeatures from "../sections/VideographyFeatures";
//import VideographyWork from "../sections/VideographyWork";
import VideographyCTA from "../sections/VideographyCTA";
import LiveStream from "../sections/LiveStream";
import LiveStreamCTA from "../sections/LiveStreamCTA";
import AddonWebDesign from "../sections/AddonWebDesign";
import AddonPromo1 from "../sections/AddonPromo1";
import AddonPromo2 from "../sections/AddonPromo2";
import AddonCTA from "../sections/AddonCTA";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Index(data) {
    const [ context, setContext ] = useState(data);

    return (
        <DataContext.Provider value={[context, setContext]}>
            <Meta />
            <Navbar />
            <Hero />
            <About />
            <Videography />
            <VideographyInfo />
            <VideographyFeatures />
            <VideographyCTA />
            <LiveStream />
            <LiveStreamCTA />
            <AddonWebDesign />
            <AddonPromo1 />
            <AddonPromo2 />
            <AddonCTA />
            <Contact />
            <Footer />
        </DataContext.Provider>
    )
}

export async function getStaticProps() {

    const res = await fetch(process.env.JSON_API_PATH);
    const data = await res.json();
    
    return {
        props: {
            data,
        },
    }
}

export default Index;