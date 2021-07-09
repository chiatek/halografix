import Head from 'next/head';
import { useContext } from "react";
import { DataContext } from "../context/AppData";

function Meta() {
    const [ context ] = useContext(DataContext);
    let meta = [];

    if (context.data !== undefined) {
        let section = context.data.filter(item => item.meta);
        meta = section[0].meta[0].fields;
    }

    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href={meta.favicon} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <link rel="apple-touch-icon" href={meta.apple_touch_icon} />
            <title>{meta.site_title}</title>
                      
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${meta.analytics_id}`}
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${meta.analytics_id}', {
                    page_path: window.location.pathname,
                    });`,
                }}
            />
        </Head>
    );
}

export default Meta;