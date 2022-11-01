# RayID

**RayID** is a generated code that we use to track logs, posts or events. You can generate your own rayid, but we made your job easier!

In this instructure you will learn about how to use this package in your apps.

## Table of content

- [Installation](#installation)
- [methods](#methods)
- [Development](#development)

## Installation

How to install **RayID**? To install this package, use **NPM**.

```shell
$ npm i rayid
```

## Config

So, import the package.

```javascript
// ESM 6 and higher
import RayID from "rayid";

// ESM 5 and lower
const RayID = require("rayid");
```

Now create your instance with what kind of rayid you want.

- digit: Numbers
- lower: Alphabet in lower case.
- upper: Alphabet in upper case.

> No type means all combined togather.

```javascript
const ray = new RayID("lower");
```

## Methods

Only one method! `gen()`.

### `gen()`

in **gen()** just say the length.

> There is no limit :)

```javascript
const r = ray.gen(50);
console.log(r); // zpciqivbkgoubrurrnozqhcdzlerjkllgtwbqbhllrxcremprd
```

Or do it inside.

```javascript
console.log(ray.gen(50)); // clherhvpkhwynhqhzluozionumnjqgjroeiymgqvlaknzjtdic
```

All done!

---

## Development

If you want to develop the package, it is so simple. just follow steps below.

- Clone the project
- Install dependencies by running `$ npm install`
- Start changing!
  - Link package
  - Test

> Before you start: **Remember the base or code are stored in `lib/rayid.js`**. You need to edit there.

### Cloning the project

To clone the project, you need to have git installed. Ok, now clone it same as command below.

```shell
$ git clone https://gitlab.com/BlackIQ/rayid
```

### installing dependencies

Next, install what package uses with `npm i` or `npm install`.

```shell
$ npm i
```

### Changing

To change package or anything, your need a testing environment to use linked package. Just follow steps.

#### Link package

We asoume you are in `lib` directory. Right. You can open a **tmux** or in another terminal to cd in `test` directory.

In `lib` directory enter link command:

```shell
$ npm link
```

So, in other terminal, or other tmux part, link your development package to your `test` directory. If you are in the `test` directory ok, if not, just say `cd test` and enter the linking command:

```shell
$ npm link rayid
```

Linking step is done.

#### Test

Your test app is linked. Change anything in package and test it in `test` directory.
