import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "select2/dist/css/select2.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// plugins styles downloaded
import "assets/vendor/nucleo/css/nucleo.css";
// core styles
import "assets/scss/nextjs-argon-dashboard-pro.scss?v1.1.0";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* * tweva dashboard v0.0.1 
=========================================================
`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
     
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>tweva</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSMvbv-wcB6YMMxGzE5ERGdt9Ke50N1sY"></script>
        </Head>
        <Layout>
     
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
