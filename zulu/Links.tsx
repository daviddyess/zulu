import { links } from '@/zulu/core/Links';
import { Fragment } from 'react/jsx-runtime';

type Link = {
  rel: string;
  href: string;
  type?: string;
  title?: string;
  crossOrigin?: string;
};

export function Links() {
  return Array.from(links()).map((link: Link, idx: number) => (
    <Fragment key={`link-id-${idx + 1}`}>
      <link
        rel={link.rel}
        href={link.href}
        type={link?.type ? link.type : undefined}
        title={link?.title ? link.title : undefined}
        crossOrigin={link?.crossOrigin ? link.crossOrigin : undefined}
      />
    </Fragment>
  ));
}
