const scriptsMap = new Map();

export function ScriptsFunction(scriptsArray) {
  return scriptsArray.map((script) => {
    const key = script.src;
    scriptsMap.set(key, script);
  });
}

export const scripts = () => scriptsMap.values();
