# RayID (JavaScript)

Generate short IDs for logs, events, and traces.

```bash
npm install rayid
```

```javascript
import RayID from "rayid";

const ray = new RayID("lower");

console.log(ray.gen(16));
```

**Types:** `digit` · `lower` · `upper` · `symbol` · (default = all)

## Docs

Full documentation: [rayid-js.docs.amirhossein.info](https://rayid-js.docs.amirhossein.info)

## Links

|                      |                                               |
| -------------------- | --------------------------------------------- |
| npm                  | https://www.npmjs.com/package/rayid           |
| Source               | https://gitlab.com/blackiq-packages/npm/rayid |
| **RayID for Python** | https://pypi.org/project/rayid/               |

## License

MIT
