import { OpenProductsDirective } from './open-products.directive';

describe('OpenProductsDirective', () => {
  // it('should create an instance', inject([], (elementRef: ElementRef) => {
  //   const directive = new OpenProductsDirective(elementRef);
  //   expect(directive).toBeTruthy();
  // }));
  it('should create an instance', () => {
    const directive = new OpenProductsDirective();
    expect(directive).toBeTruthy();
  });
});
