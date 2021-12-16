interface LinggleQueryResult {
  query: string;
  time?: Date;
  ngrams: [[ngram: string, count: number]];
}

export default LinggleQueryResult