import { scripts } from '@/zulu/core/Scripts';
import { Fragment } from 'react/jsx-runtime';

type Script = {
  src: string;
};

export function Scripts() {
  return Array.from(scripts()).map((script: Script, idx: number) => (
    <Fragment key={`script-id-${idx + 1}`}>
      <script src={script.src} defer />
    </Fragment>
  ));
}
