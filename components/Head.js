import Head from "next/head"
export default function Heads(){
    return(
        <>
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="" />
        <meta name="theme-color" content="#e33324" />
        <meta name="description" content="Real Estate HTML Template" />
        <meta
        name="keywords"
        content="Apartment, Estate Agency, Housing, Real Estate, Real Estate Broker, Real Estate Property, Single Property"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Homelet.pk | Property Listing</title>
        {/*  Favicon */}
        <link rel="shortcut icon" href="favicon.ico" />
        {/* CSS */}
        <link rel="stylesheet" href="css/stylesheet.css" />
        <link rel="stylesheet" href="css/addpropertycss1.css" />
        <link rel="stylesheet" href="css/addpropertycss2.css" />
        {/* Google Fonts */}
        <link
        href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap"
        rel="stylesheet"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap"
        rel="stylesheet"
        />
        </Head>
        </>
    )
}