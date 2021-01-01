export const getCookieClient = () => ({
  get: () => use('request').headers.cookie ?? '',
  set: (value: string) => use('response').setHeader('Set-Cookie', value),
});
