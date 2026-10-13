/**
 * Helpers for serving responsive images straight from the Unsplash CDN.
 * Unsplash runs on imgix, so resizing / format negotiation happens at the edge.
 * Docs: https://unsplash.com/documentation#dynamically-resizable-images
 */
const UNSPLASH_CDN = 'https://images.unsplash.com';

export interface UnsplashOptions {
  width: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'jpg' | 'webp';
}

export function unsplashUrl(
  id: string,
  { width, height, quality = 70, format = 'auto' }: UnsplashOptions,
): string {
  const params = new URLSearchParams({
    w: String(width),
    q: String(quality),
    fit: 'crop',
    crop: 'entropy',
  });
  if (height) params.set('h', String(height));
  if (format === 'auto') params.set('auto', 'format');
  else params.set('fm', format);

  return `${UNSPLASH_CDN}/${id}?${params.toString()}`;
}

/** Build a `srcset` for the given widths, keeping the aspect ratio constant. */
export function unsplashSrcset(id: string, widths: number[], aspectRatio?: number): string {
  return widths
    .map((width) => {
      const height = aspectRatio ? Math.round(width / aspectRatio) : undefined;
      return `${unsplashUrl(id, { width, height })} ${width}w`;
    })
    .join(', ');
}
