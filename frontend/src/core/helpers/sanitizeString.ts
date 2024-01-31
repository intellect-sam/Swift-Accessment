export function sanitizeString(path: string): string {
  const sanitizer = path.replace(/[\/-]/g, ' ');
  const str = sanitizer
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return str;
}
