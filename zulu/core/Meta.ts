const metaMap = new Map();

export function MetaFunction(metaArray) {
  return metaArray.map((m) => {
    let key = '';
    if (m?.name) {
      key = `name:${m.name}`;
    } else if (m?.property) {
      key = `property:${m.property}`;
    } else if (m?.title) {
      key = 'title';
    } else {
      key = JSON.stringify(Object.keys(m));
    }

    metaMap.set(key, m);
  });
}

export const meta = () => metaMap.values();
