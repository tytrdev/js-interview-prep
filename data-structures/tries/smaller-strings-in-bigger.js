class SuffixTrie {
  constructor() {
    this.root = {};
    this.endSymbol = '**';
  }

  insert(word) {
    for (let i = 0; i < word.length; i++) {
      this._insertSubstring(i, word);
    }
  }

  _insertSubstring(i, string) {
    let node = this.root;

    for (const char of string.slice(i)) {
      if (!(char in node)) {
        node[char] = {};
      }

      node = node[char];
    }

    node[this.endSymbol] = true;
  }

  contains(word) {
    console.log('Checking word: ', word);
    let node = this.root;

    for (const letter of word) {
      if (!(letter in node)) return false;
      node = node[letter];
    }

    return !!node;
  }
}

function multiStringSearch(bigString, smallStrings) {
  const suffixTrie = new SuffixTrie();
  bigString.split(/\s+/).map(s => suffixTrie.insert(s));

  return smallStrings.map(s => suffixTrie.contains(s));
}