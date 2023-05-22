export default async (request, context) => {
  const url = new URL(request.url)

  const shoppingHistory = ['item1', 'item2', 'item3']; // Replace with your actual shopping history data

  context.cookies.set({
    name: 'shoppingHistory',
    value: JSON.stringify(shoppingHistory),
  });

  return new Response('Shopping history has been set in the cookie. You can retrieve it on subsequent requests.');
}
