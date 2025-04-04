import { MetaFunction } from "@/zulu/core/Meta";
import { ColorSchemeToggle } from "~/client/components/ColorSchemeToggle/ColorSchemeToggle";
import { Welcome } from "~/client/components/Welcome/Welcome";

export default function App() {
  MetaFunction([
    { title: "Zulu Framework" },
    {
      name: "description",
      content: "This is a test",
    },
    {
      property: "og:title",
      content: "This is a test",
    },
    {
      property: "og:description",
      content: "This is a test",
    },
  ]);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
