import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-4xl items-center gap-8 px-6 py-12 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Sunday programs
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary">
          Welcome to Sacrament Meeting
        </h1>
        <p className="text-muted">
          Find the program for this Sunday or browse past and upcoming
          meetings, including hymns, speakers, and ward business.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/meetings/current"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            This Sunday&apos;s Meeting
          </Link>
          <Link
            href="/meetings"
            className="rounded-full border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            View All Meetings
          </Link>
        </div>
      </div>

      <Image
        src="/chapel-hero.svg"
        alt="Illustration of a meetinghouse chapel with a steeple at sunrise"
        width={1200}
        height={600}
        priority
        className="w-full rounded-card border border-border shadow-sm"
      />
    </div>
  );
}
