interface IVector {
  strokes: string[];
  medians: string[] | string[][];
}

/**
 * Get a hanzi's vector for consumption by `hanzi-writer`
 * @param hanzi Hanzi to get vector for
 */
const getVectorForHanzi = async (hanzi: string): Promise<IVector> =>
  import(`hanzi-writer-data/${hanzi}`);

export { getVectorForHanzi };
