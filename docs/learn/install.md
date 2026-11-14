# Installation

## Requirements

- Node.js with ES Modules support
- npm

## Install

Install RayID from npm:

```bash
npm install rayid
```

## Import

RayID provides an ES Module interface with TypeScript declarations.

```javascript
import RayID from "rayid";
```

## TypeScript

TypeScript definitions are included in the package. No additional `@types` package is required.

```typescript
import RayID from "rayid";

const ray = new RayID("lower");

const id: string = ray.gen(16);
```

## Next

- [Usage](usage.md)
