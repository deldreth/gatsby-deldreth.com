---
title: Publish TypeScript module delcarations with rollup
date: '2018-09-09T00:00:00.284Z'
tags: ['typescript', 'npm', 'rollup']
published: true
---

It seems there's some tightly guarded industry secrets around publishing TypeScript module declarations effectively. Let's break it down.

<!-- end -->

Here I was, one day, coding away on a shared internal module for our npm registry when I realized that, despite having used modules with TypeScript delcarations, I had never written any on my own. Little did I know that I was about to embark on a deep journey riddled with vague "just do this" remarks.

All it all it ends up being relatively simple with a bit of nuance for slightly complicated setups. Really, this could apply to any bundler (webpack, parcel, or rollup). I picked rollup because this all came about from a project in which I was... using rollup.

The best thing to day away from this when publishing modules:

> Publish for the future but don't forget about yesterday.

## tsconfig

Firstly, structure your tsconfig like you're shipping a package that you as an affluent TypeScript developer would use.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "outDir": "dist",
    "lib": ["es2015"]
  }
}
```

I generally continue to target es5 for my modules. Your use case may vary. The `declaration` setting here instructs the compiler to emit declarations to your outDir. There are a number of other compiler options that can come in handy for more complicated setups.

```
declarationDir - Specify directory for declarations
declarationMap - Source maps
emitDeclarationOnly
```

### Running tsc on some sample modules

This example is contrived. It's important instructing npm, and any future consumer of your module, that you actually have modules.

In this project two files sit in a `src` directory.

```
src/index.ts
src/Module1.ts
```

`src/Module1.ts` defines an interface and a simple class:

```typescript
export interface Response {
  loading: boolean;
  error: boolean;
}

export default class ModuleOne {
  request(): Response {
    return {
      loading: true,
      error: false,
    };
  }
}
```

`src/index.ts` imports the module and creates an instance

```typescript
import Module1 from './Module1';

const foo = new Module1();
```

Simple, but we've outlined enough to setup our modules.
