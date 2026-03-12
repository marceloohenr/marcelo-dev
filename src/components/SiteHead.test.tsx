import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import SiteHead from './SiteHead';
import { siteMetadata } from '../data/site';

describe('SiteHead', () => {
  it('syncs document metadata from the central site config', async () => {
    render(<SiteHead />);

    await waitFor(() => {
      expect(document.title).toBe(siteMetadata.title);
    });

    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      siteMetadata.description
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      siteMetadata.canonicalUrl
    );
    expect(document.head.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      siteMetadata.title
    );
  });
});
