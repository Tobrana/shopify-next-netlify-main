module.exports = {
 env: {
  SHOPIFY_STOREFRONT_API_TOKEN: process.env.local.SHOPIFY_STOREFRONT_API_TOKEN,
  SHOPIFY_API_ENDPOINT: process.env.local.SHOPIFY_API_ENDPOINT,
 },
 images: {
  domains: ['cdn.shopify.com']
 }
}