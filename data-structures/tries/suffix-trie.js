class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstring(i, string);
    }
  }

  insertSubstring(i, string) {
    let node = this.root;

    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }

    node[this.endSymbol] = true;
  }

  contains(string) {
    let node = this.root;

    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }

    return this.endSymbol in node;
  }
}