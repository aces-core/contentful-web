import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export default async function DraftApp() {
  const { isEnabled } = await draftMode();

  if (!isEnabled) {
    notFound();
  }

  return <></>;
}
