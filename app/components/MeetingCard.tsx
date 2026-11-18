import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";
import { MEETING_TYPE_LABELS, formatDate } from "@/lib/format";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const speakerCount = meeting.speakers.filter((s) => s.type === "speaker").length;

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-card border border-border border-l-4 border-l-primary bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        {MEETING_TYPE_LABELS[meeting.meetingType] ?? meeting.meetingType}
      </span>
      <h3 className="mt-3 font-heading text-lg font-semibold">
        {formatDate(meeting.date)}
      </h3>
      <p className="mt-1 text-sm text-muted">Presiding: {meeting.presiding}</p>
      {speakerCount > 0 && (
        <p className="text-sm text-muted">
          {speakerCount} speaker{speakerCount === 1 ? "" : "s"}
        </p>
      )}
    </Link>
  );
}
