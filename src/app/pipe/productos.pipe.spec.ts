import { ProductosPipe } from './productos.pipe';

describe('ProductosPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductosPipe();
    expect(pipe).toBeTruthy();
  });
});
