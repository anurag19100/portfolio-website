import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <meta name="description" content="Anurag Gupta - DevOps Engineer | AWS, Kubernetes, Terraform, CI/CD" />
        <meta name="keywords" content="DevOps, Cloud Engineer, AWS, Kubernetes, Terraform, Jenkins, Docker, CI/CD" />
        <meta property="og:title" content="Anurag Gupta - DevOps Engineer" />
        <meta property="og:description" content="Sr. DevOps Engineer with ~4 years building infrastructure at scale — Blackduck, BigBasket. 5x Cloud Certified." />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://assets.calendly.com/assets/external/widget.js" async />
      </body>
    </Html>
  )
}
