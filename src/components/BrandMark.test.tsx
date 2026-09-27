import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import BrandMark from './BrandMark';
import transparentLogo from '../assets/mh-logo-transparent.webp';

afterEach(cleanup);

describe('BrandMark', () => {
  it('uses the transparent asset without changing the decorative logo dimensions', () => {
    const { container } = render(<BrandMark />);
    expect(container.querySelector('.brand-symbol')).toHaveAttribute('aria-hidden', 'true');
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', transparentLogo);
    expect(image).toHaveAttribute('width', '384');
    expect(image).toHaveAttribute('height', '384');
    expect(image).toHaveAttribute('alt', '');
  });
});
