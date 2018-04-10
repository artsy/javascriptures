## First compilation

```
$ ./node_modules/.bin/tsc ./exercises/1_first-compilation.ts
$ cat ./exercises/1_first-compilation.js
```

What are the differences between the input and output files? (Ignore first 2 lines.)

1. `let` changed to `var`, because TypeScript is an ES2015 (ES6) version of JS
2. the `string` type annotation is gone, because types are a compile-time only thing

## First error

```
$ ./node_modules/.bin/tsc ./exercises/2_first-error.ts
```

1. What does the error mean? The compiler complains about assigning a number to a variable that’s typed to only hold a string.
2. Notice that `./exercises/2_first-error.js` is still emitted. TypeScript will never *not* build your project.

## Multiple types

```
$ code ./exercises/3_multiple-types.ts
```

1. The `any` type basically reverts to default JavaScript behaviour, which is that a variable can hold anything.
2. Improve the typing by changing the type annotation to a union of `string` and `number`.

## Type assertion

```
$ code ./exercises/4_type-assertion.ts
```

Sometimes you know better than the compiler, for instance when data comes in from external input.

## Overview of basic types

```
$ code ./exercises/5_basic-types.ts
```

## Interface

```
$ code ./exercises/6_interface.ts
```

## Type that parameter

```
$ code ./exercises/7_type-that-parameter.ts
```

Write the implementation of the `Input` interface that satisfies the compiler.

```ts
interface Input {
  hasFlag: boolean
  data: { x: number, y: number }
  callback: (arg: number) => string
}
```

## Generics

```
$ code ./exercises/8_generics.ts
```

Generics uses variables at compile time to hold type information. The `T` token is really just a variable, using the letter ‘t’ is just a shorthand convention, such as `i` in a loop, but it could really be anything.

## React component

```
$ code ./exercises/9_react-component.ts
```

We’ve copied the component from yesterday’s execrise verbatim.

1. Type those props (hint: look at the `this.props` usage)
2. Why does the callsite that uses the `ArtistItem` component remain red? Because there’s actually a bug, `href` is not being passed in.
