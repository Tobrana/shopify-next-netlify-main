export default async (request, context) => {
  const _url = new URL(request.url)
  // get shopping-cart cookie


  const cartCookie = context.cookies.get('shopping-cart')
  await context.cookies.set({
    name: 'shopping-cart',
    value: '1234',
  })
  // get visitor_testing_group cookie to see if A or B
  const visitorTestingGroup = context.cookies.get('visitor_testing_group')

  console.log('Visitor Testing Group:', visitorTestingGroup)
 
  // If not, create a new cart
  if (!cartCookie) {
    console.log('Creating a new cart...')
    // then return nothing
    return new Response(null, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  let promotion = null
  // display FREE MAT for group A
  if (visitorTestingGroup === 'A') {
    promotion = {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzI4NjQ5NjQ4MjQxMzQ=',
      title: 'Free Mat',
      description: 'Get a free mat with your treadmill purchase',
      image: {
        src: 'https://cdn.shopify.com/s/files/1/0558/2081/8959/products/club-series-plus-treadmill-1_600x600.jpg?v=1614625200',
        alt: 'Free Mat'
      }
    }
  }
  // display FREE SHIPPING for group B
  if (visitorTestingGroup === 'B') {
    promotion = {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzI4NjQ5NjQ4MjQxMzQ=',
      title: 'Free Shipping',
      description: 'Get free shipping with your treadmill purchase',
      image: {
        src: 'https://cdn.shopify.com/s/files/1/0558/2081/8959/products/club-series-plus-treadmill-1_600x600.jpg?v=1614625200',
        alt: 'Free Shipping'
      }
    }
  }

  // create a response with the promotion
  console.log('Promotion:', promotion)
  return new Response(JSON.stringify({ promotion }), {
    headers: {
      'content-type': 'application/json'
    },
  })
}
