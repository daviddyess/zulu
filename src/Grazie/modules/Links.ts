const linksMap = new Map();

export function LinksFunction(linksArray) {
  return linksArray.map((link) => {
    const key = link.href;
    linksMap.set(key, link);
  });
}

export const links = () => linksMap.values();
