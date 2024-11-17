import { render } from '@testing-library/react';

import  from './grid';

describe('', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(< />);
    expect(baseElement).toBeTruthy();
  });
  
});
