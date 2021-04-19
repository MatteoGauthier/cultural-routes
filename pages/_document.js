import Document, {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    // regular bold extrabold regular italic medium
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;0,800;1,400&display=swap"
                        rel="stylesheet"
                    />

                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-965G1RMKM6"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-965G1RMKM6');`
                        }}
                    />
                </Head>
                <body className="bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
