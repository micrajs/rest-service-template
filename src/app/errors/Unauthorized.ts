export class Unauthorized extends Error {
  constructor(message?: string) {
    super(message ?? 'Unauthorized');
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}
