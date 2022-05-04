import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.png" type="image/png" />
        <meta name="description" content="사실이 아닙니다! 생성기" />
        <meta property="og:title" content="사실이 아닙니다! 생성기" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="favicon.png" />
        <meta property="og:description" content="사실이 아닙니다! 생성기" />
        <meta name="twitter:image" content="favicon.png" />
        <meta name="twitter:description" content="사실이 아닙니다! 생성기" />
        <meta name="theme-color" content="#6495ED" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-52396RHR6X"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];\n" +
              "      function gtag(){dataLayer.push(arguments);}\n" +
              "      gtag('js', new Date());\n" +
              "      gtag('config', 'G-52396RHR6X');",
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
