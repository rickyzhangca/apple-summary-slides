export const encodeUrl = (str: string): string => {
  return (
    str
      .toLowerCase()
      // Replace special characters with their encoded versions
      .replace(/\[/g, '-lb-')
      .replace(/\]/g, '-rb-')
      .replace(/\(/g, '-lp-')
      .replace(/\)/g, '-rp-')
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '') // Remove remaining non-alphanumeric characters except hyphens
      .replace(/-+/g, '-') // Replace multiple consecutive hyphens with a single one
      .replace(/^-|-$/g, '')
  ); // Remove leading and trailing hyphens
};

export const decodeUrl = (str: string): string => {
  return (
    str
      .replace(/-lb-/g, '[')
      .replace(/-rb-/g, ']')
      .replace(/-lp-/g, '(')
      .replace(/-rp-/g, ')')
      .split('-')
      .map(word => {
        // Don't capitalize special character markers
        if (['lb', 'rb', 'lp', 'rp'].includes(word)) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ')
      // Clean up any artifacts from the encoding process
      .replace(/\s*([\[\]\(\)])\s*/g, '$1')
  );
};
