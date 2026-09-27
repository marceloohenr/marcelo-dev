import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import SiteHead from './SiteHead';
import { getSeo } from '../data/seo';
import { siteMetadata } from '../data/site';

describe('SiteHead', () => {
  it('syncs document metadata from the central site config', async () => {
    const seo = getSeo('pt');
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
      seo.meta.find(item => item.property === 'og:title')?.content
    );
    expect(document.head.querySelector('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://marcelodev.online/og-cover.png?v=2'
    );
  });
});
