import { meta as metaMap } from './modules/Meta';

type MetaTag = {
  charSet?: string;
  content?: string;
  httpEquiv?: string;
  keywords?: string;
  media?: string;
  name?: string;
  property?: string;
  title?: string;
};

export function Meta() {
  const metaData = Array.from(metaMap());

  return (
    <>
      {metaData.map((meta: MetaTag, index: number) => {
        // If the meta object has a title property, render a title tag
        if ('title' in meta) {
          return <title key={`title-${index}`}>{meta.title}</title>;
        }

        // Filter out null/undefined values and create meta tags
        const validAttributes = Object.entries(meta).reduce(
          (acc, [key, value]) => {
            if (value != null) {
              acc[key] = value;
            }
            return acc;
          },
          {},
        );

        return <meta key={`meta-${index}`} {...validAttributes} />;
      })}
    </>
  );
}
