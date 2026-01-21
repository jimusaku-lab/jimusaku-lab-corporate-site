import { NavItem } from '../types';

const ABSOLUTE_URL_RE = /^https?:\/\//i;

const normalizeHash = (hash?: string): string => {
  const trimmed = (hash ?? '').trim();
  if (!trimmed) {
    return '';
  }
  return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
};

const normalizeInternalPath = (path?: string): string => {
  const trimmed = (path ?? '').trim();
  if (!trimmed) {
    return '/';
  }
  if (ABSOLUTE_URL_RE.test(trimmed)) {
    return trimmed;
  }
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, '/');
  return collapsed || '/';
};

export const buildNavHref = (item: NavItem): string => {
  const rawPath = (item.path ?? '').trim();
  const rawHash = (item.hash ?? '').trim();
  if (ABSOLUTE_URL_RE.test(rawPath)) {
    return `${rawPath}${normalizeHash(rawHash)}`;
  }
  return `${normalizeInternalPath(rawPath)}${normalizeHash(rawHash)}`;
};

export const isExternalHref = (href: string): boolean => ABSOLUTE_URL_RE.test(href);

export const getInternalPath = (path?: string): string => normalizeInternalPath(path);

export const getHashTargetId = (hash?: string): string => normalizeHash(hash).replace('#', '');
