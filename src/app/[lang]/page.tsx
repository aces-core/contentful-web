import { Button } from "@maverick/ui";
import { TestComponents } from "./test-components";

export default function Home() {
  return (
    <div>
      <main>
        <ol>
          <li>ACES: Maverick</li>
          <li>Save and see your changes instantly.</li>
          <Button variant="contained" color="primary">
            Button
          </Button>
          <TestComponents />
        </ol>
      </main>
    </div>
  );
}
