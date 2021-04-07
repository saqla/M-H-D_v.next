import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  url = '/'
  title = 'M-H-D'
  description = 'Final Fantasy XIV FC Page Next.js_Version'

  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* `<Head>` の内容は必要に応じて変更 */}
          <meta name="description" content={this.description} />
          <meta name="theme-color" content="#333" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:image" content={`${this.url}/ogp.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument