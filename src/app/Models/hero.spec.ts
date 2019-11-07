import { Hero } from './hero';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero(18,'test','test')).toBeTruthy();
  });
});
