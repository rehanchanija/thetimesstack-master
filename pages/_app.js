import Footer from "../components/Footer";
import NavbarPage from "../components/NavbarPage";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BreadcrumbJsonLd, FAQPageJsonLd, NextSeo } from "next-seo";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Digital Technological Solutions
        The Time Stack"
        description="Transforming businesses into Brands through web & mobile app development,E-commerce Website design and SEO"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://thetimestack.com/_next/image?url=%2Fbanner1.png&w=1080&q=75",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://thetimestack.com/_next/image?url=%2Fbanner1.png&w=1080&q=75",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "The Time Stack",
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "The Time Stack",
            item: "https://thetimestack.com/",
          },
        ]}
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "What services do you offer??",
            acceptedAnswerText:
              "We Offer Services of software developent ,webdevelopment and Solution",
          },
          {
            questionName:
              "Do you offer ongoing maintenance and support for your solutions?",
            acceptedAnswerText: "Yes , we provide online support",
          },
          {
            questionName: "Which Technology you use?",
            acceptedAnswerText:
              "We use the current latest technology that will make the web experience more secure",
          },
          {
            questionName: "How to contact TheTimeStack ?",
            acceptedAnswerText:
              "You can Find our Contact detail at our ContactUS page",
          },
        ]}
      />

      <div className="font-inter bg-[#192645]">
        <NavbarPage />
            
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3DE2MRYMDL"
        />
            
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3DE2MRYMDL', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
