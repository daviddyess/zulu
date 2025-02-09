import { MetaFunction } from '@/zulu/core/Meta';
import { ColorSchemeToggle } from '~/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '~/components/Welcome/Welcome';

export default function App() {
  MetaFunction([
    { title: 'Zulu Framework' },
    {
      name: 'description',
      content: 'This is a test',
    },
    {
      property: 'og:title',
      content: 'This is a test',
    },
    {
      property: 'og:description',
      content: 'This is a test',
    },
  ]);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
