export function toRna(dna) {
    let i;
    let rna = '';
    for( i=0; i < dna.length; i++ ){
        rna = rna + getComplement(dna[i])
    }
    return rna;
}

function getComplement(nucleotides) {
  if (nucleotides === 'C') {
      return 'G';
  }
  if (nucleotides === 'G') {
     return 'C';
  }
  if (nucleotides === 'A') {
    return 'U';
  }
  if (nucleotides === 'T'){
    return 'A';
  }
  return '';
}
