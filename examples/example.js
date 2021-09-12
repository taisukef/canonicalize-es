import { canonicalize } from "../canonicalize.js";

JSON.canonicalize = canonicalize;

const json = {
  '1': {'f': {'f': 'hi', 'F': 5}, '\n': 56.0},
  '10': {},
  '': 'empty',
  'a': {},
  '111': [
    {
      'e': 'yes',
      'E': 'no'
    }
  ],
  'A': {}
};

console.log(JSON.canonicalize(json));
