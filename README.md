# canonicalize-es

JSON canonicalize function as ES module. Creates crypto safe predictable canocalization of
JSON as defined by [RFC8785](https://tools.ietf.org/html/rfc8785)
## Usage
### Normal Example
```js
import { canonicalize } from "https://taisukef.github.io/canonicalize-es/canonicalize.js";
const  json = {
	"from_account": "543 232 625-3",
	"to_account": "321 567 636-4",
	"amount": 500,
	"currency": "USD"
}
console.log(canonicalize(json));
// output: {"amount":500,"currency":"USD","from_account":"543 232 625-3","to_account":"321 567 636-4"}
```
### Crazy Example
```js
import { canonicalize } from "https://taisukef.github.io/canonicalize-es/canonicalize.js";
const  json = {
	"1": {"f": {"f":  "hi","F":  5} ,"\n":  56.0},
	"10": { },
	"":  "empty",
	"a": { },
	"111": [ {"e":  "yes","E":  "no" } ],
	"A": { }
}
console.log(canonicalize(json));
// output: {"":"empty","1":{"\n":56,"f":{"F":5,"f":"hi"}},"10":{},"111":[{"E":"no","e":"yes"}],"A":{},"a":{}}
```

## Test
```
deno test -A
```
