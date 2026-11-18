import { Suspense } from "react";
import NavLinks from "@/app/components/NavLinks";

const MEETINGS_NAV = [
  { href: "/meetings", label: "All Meetings" },
  { href: "/meetings/current", label: "Current Sunday" },
];

export default function MeetingsLayout({ children }: LayoutProps<"/meetings">) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <Suspense fallback={null}>
        <NavLinks links={MEETINGS_NAV} className="mb-6 print:hidden" />
      </Suspense>
      {children}
    </div>
  );
}
