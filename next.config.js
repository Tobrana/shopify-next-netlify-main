module.exports = {
 images: {
  domains: ['cdn.shopify.com']
 }, 
 head: {
  link: [{
   rel: 'stylesheet',
   href: 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css',
  }], 
  script: [{
   src: "https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
  },
  {
   innerHTML: `algoliasearchNetlify({
     appId: 'E9A3W2O17D',
     apiKey: 'b7af3955ee1ffeff4c0ec6d6fb626b67',
     siteId: '344ab120-5710-433c-883d-b4624b17c45d',
     branch: 'master',
     selector: 'div#search',
   })`
  }
  ], 
 
 }

}