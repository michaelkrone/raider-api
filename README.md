## raider API

A simple api server for [raider](https://github.com/michaelkrone/raider).

Install dependencies with `npm i`, start with `[PORT={PORTNUMBER}] npm start`.
Default port is 4001.

### API
All parameters are optional.

#### /api
Generate a sprint name

`/api?[char={CHAR}][&mood={utopic|realistic}][&adverb={0|1}]`

#### /version
Get the current used raider version
