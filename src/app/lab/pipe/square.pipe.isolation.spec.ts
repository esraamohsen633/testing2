import { SquarePipeForLab } from './square.pipe'; // Replace with the correct path to your SquarePipeForLab

describe('SquarePipeForLab', () => {
  let pipe: SquarePipeForLab;

  beforeEach(() => {
    pipe = new SquarePipeForLab();
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 16 when passing 4', () => {
    const result = pipe.transform(4);
    expect(result).toBe(16);
  });

  it('should return "Not a number" when passing a non-numeric value', () => {
    const result = pipe.transform('string'); // Pass a non-numeric value
    expect(result).toBe('Not a number');
  });
});
