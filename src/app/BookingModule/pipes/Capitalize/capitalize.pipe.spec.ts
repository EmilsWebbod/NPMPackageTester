import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should uppercase the first character', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('test')).toEqual('Test');
  })
});
