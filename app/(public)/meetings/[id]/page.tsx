import { Suspense } from "react";
import { notFound } from "next/navigation";
import MeetingDetail from "@/app/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";

async function MeetingContent({
  params,
}: {
  params: PageProps<"/meetings/[id]">["params"];
}) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}

export default function MeetingPage({
  params,
}: PageProps<"/meetings/[id]">) {
  return (
    <Suspense
      fallback={<p className="text-sm text-muted">Loading meeting...</p>}
    >
      <MeetingContent params={params} />
    </Suspense>
  );
}
