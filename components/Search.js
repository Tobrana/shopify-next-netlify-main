import React, { memo } from 'react'
import Script from 'next/script'

const Search = () => {
 return <>
   <div id="search"></div>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
   <Script src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js" />
   <Script
     strategy="lazyOnload"
     dangerouslySetInnerHTML={{
       __html: `
     algoliasearchNetlify({
       appId: 'E9A3W2O17D',
       apiKey: 'b7af3955ee1ffeff4c0ec6d6fb626b67',
       siteId: '344ab120-5710-433c-883d-b4624b17c45d',
       branch: 'master',
       selector: 'div#search',
     });`}}
   />
  </>
}

export default memo(Search)