import * as t from "https://deno.land/std/testing/asserts.ts";
import { canonicalize } from "../canonicalize.js";

JSON.canonicalize = canonicalize;
const jsonfile = {
  readFileSync: (fn) => JSON.parse(Deno.readTextFileSync(fn)),
};
const fs = {
  readFileSync: (fn) => Deno.readTextFileSync(fn),
};

Deno.test('arrays', () => {
  const input = jsonfile.readFileSync('test/testdata/input/arrays.json');
  const expected = fs.readFileSync('test/testdata/output/arrays.json', 'utf8').trim();
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('french', () => {
  const input = jsonfile.readFileSync('test/testdata/input/french.json');
  const expected = fs.readFileSync('test/testdata/output/french.json', 'utf8').trim();
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('structures', () => {
  const input = jsonfile.readFileSync('test/testdata/input/structures.json');
  const expected = fs.readFileSync('test/testdata/output/structures.json', 'utf8').trim();
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('values', () => {
  const input = jsonfile.readFileSync('test/testdata/input/values.json');
  const expected = fs.readFileSync('test/testdata/output/values.json', 'utf8').trim();
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('weird', () => {
  const input = jsonfile.readFileSync('test/testdata/input/weird.json');
  const expected = fs.readFileSync('test/testdata/output/weird.json', 'utf8').trim();
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});
