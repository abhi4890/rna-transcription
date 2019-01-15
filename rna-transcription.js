export function toRna(dna) {
  if (dna === 'C') {
      return 'G';
  }
  if (dna === 'G') {
      return 'C';
  }
  return '';
}
