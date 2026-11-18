import { Suspense } from "react";
import MeetingCard from "@/app/components/MeetingCard";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";

type MeetingsPageProps = PageProps<"/meetings">;

async function MeetingsList({
  searchParams,
}: {
  searchParams: MeetingsPageProps["searchParams"];
}) {
  const params = await searchParams;
  const rawQuery = params?.query;
  const query = typeof rawQuery === "string" ? rawQuery : "";
  const currentPage = Math.max(1, Math.trunc(Number(params?.page)) || 1);

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <>
      {meetings.length === 0 ? (
        <p className="mt-6 text-sm text-muted">No meetings found.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}

      <div className="mt-6">
        <Suspense fallback={null}>
          <Pagination totalPages={totalPages} />
        </Suspense>
      </div>
    </>
  );
}

export default function MeetingsPage(props: MeetingsPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Sacrament Meetings</h1>
      <div className="mt-4 print:hidden">
        <Suspense fallback={null}>
          <MeetingSearch />
        </Suspense>
      </div>

      <Suspense
        fallback={<p className="mt-6 text-sm text-muted">Loading meetings...</p>}
      >
        <MeetingsList searchParams={props.searchParams} />
      </Suspense>
    </div>
  );
}
