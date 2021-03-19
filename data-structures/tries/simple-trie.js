class Node {
  constructor(data) {
    this.data = data;
    this.isTerminal = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node(char);
      }

      node = node.children[char];
    }

    node.isTerminal = true;
  }

  search(word) {
    let node = this.root;

    for (const char of word) {
      node = node.children[char];
      if (!node) return false;
    }

    return !!node && node.isTerminal;
  }
}

const trie = new Trie();
trie.insert('aqua');
trie.insert('blue');
trie.insert('purple');
trie.insert('red');
trie.insert('orange');
trie.insert('pink');

console.log(trie);
console.log('aqua? ', trie.search('aqua'));
console.log('pink? ', trie.search('pink'));
console.log('blue? ', trie.search('blue'));
console.log('purple? ', trie.search('purple'));
console.log('xyz? ', trie.search('xyz'));
console.log('abc? ', trie.search('abc'));
console.log('red? ', trie.search('red'));
console.log('re? ', trie.search('re'));
console.log('ed? ', trie.search('ed'));