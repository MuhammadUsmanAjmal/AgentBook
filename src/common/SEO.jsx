import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ title, desc, route, keywords = 'real state, react, nodejs, mongodb, nextjs', noIndex }) {
    const baseUrl = 'https://www.google.com';
    const description = 'AgentBook - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s';
    const ogImage = { 
        url: "/images/hero.png", 
        alt: "AgentBook - Find the perfect real state agent",
        width: 1200,
        height: 630,
    };
    return (
        <Head>
            <title>{title}</title>
            {noIndex && (
                <meta name="robots" content="noindex, nofollow" />
            )}
            <meta name="description" content={desc} />
            <link rel="canonical" href={`${baseUrl}${route}`} />
            <meta name="keywords" content={keywords} />

            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${baseUrl}${route}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc || description} />
            <meta property="og:image" content={ogImage.url} />
            <meta property="og:image:alt" content={ogImage.alt} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="agigo.io"/>

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${baseUrl}${route}`} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={ogImage.url} />
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500&display=swap" rel="stylesheet" />  
        </Head>
    );
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    route: PropTypes.string.isRequired,
    keywords: PropTypes.array,
    noIndex: PropTypes.bool,
};

export default SEO;
