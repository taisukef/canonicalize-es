import * as t from "https://deno.land/std/testing/asserts.ts";
import { canonicalize } from "../canonicalize.js";

JSON.canonicalize = canonicalize;

Deno.test('empty array', () => {
  const input = [];
  const expected = '[]';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('one element array', () => {
  const input = [123];
  const expected = '[123]';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('multi element array', () => {
  const input = [123, 456, 'hello'];
  const expected = '[123,456,"hello"]';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('null and undefined values in array', () => {
  const input = [null, undefined, 'hello'];
  const expected = '[null,null,"hello"]';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('empty object', () => {
  const input = {};
  const expected = '{}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('object with undefined value', () => {
  const input = { test: undefined };
  const expected = '{}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('object with null value', () => {
  const input = { test: null };
  const expected = '{"test":null}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('object with one property', () => {
  const input = { hello: 'world' };
  const expected = '{"hello":"world"}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('object with more than one property', () => {
  const input = { hello: 'world', number: 123 };
  const expected = '{"hello":"world","number":123}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('undefined', () => {
  const input = undefined;
  const expected = undefined;
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('null', () => {
  const input = null;
  const expected = 'null';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('symbol', () => {
  const input = Symbol('hello world');
  const expected = undefined;
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('object with symbol value', () => {
  const input = { test: Symbol('hello world') };
  const expected = '{}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('object with number key', () => {
  const input = { 42: 'foo' };
  const expected = '{"42":"foo"}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});

Deno.test('object with symbol key', () => {
  const input = { [Symbol('hello world')]: 'foo' };
  const expected = '{}';
  const actual = JSON.canonicalize(input);
  t.assertEquals(actual, expected);
});
