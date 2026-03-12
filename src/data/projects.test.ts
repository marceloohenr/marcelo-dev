import { describe, expect, it } from 'vitest';
import { getAvailableProjectCategories, projects } from './projects';

describe('projects data helpers', () => {
  it('returns only categories with published projects', () => {
    expect(getAvailableProjectCategories(projects)).toEqual(['Portfólio', 'Catálogos']);
  });
});
