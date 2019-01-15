export function toRna(dna) {
    if( dna == 'U') {
        throw "Invalid input DNA."
    }
    let i;
    let rna = '';
    for( i=0; i < dna.length; i++ ) {
        if (dna[i] === 'A' || dna[i] === 'C' || dna[i] === 'G' || dna[i] === 'T') {
            rna = rna + getComplement(dna[i])
        }
        else {
            throw "Invalid input DNA."
        }
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
