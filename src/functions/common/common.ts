export function getDefaultAvatarInitials(name: string | undefined | null): string {
  if (!name) return 'NN';
  const words = name.trim().split(' ');

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  } else {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
}
