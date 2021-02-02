const router = use('router');

router.get('/', async (_req, res) => {
  const cookies = use('storage/cookie');
  console.log(cookies.get('cookie'))
  cookies.set('cookie', '123');
  return res.send('Hello World');
});
