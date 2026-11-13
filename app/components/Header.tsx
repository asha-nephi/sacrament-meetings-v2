import { Suspense } from "react";
import { WARD_NAME } from "@/lib/config";
import { formatDate } from "@/lib/format";
import { getToday } from "@/lib/today";
import NavLinks from "./NavLinks";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
];

export default async function Header() {
  const today = await getToday();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/90 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        <div>
          <p className="font-heading text-lg font-semibold leading-tight text-primary">
            {WARD_NAME}
          </p>
          <p className="text-xs text-muted">{formatDate(today)}</p>
        </div>
        <Suspense fallback={null}>
          <NavLinks links={NAV_LINKS} />
        </Suspense>
      </div>
    </header>
  );
}
