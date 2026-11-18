import { WARD_NAME } from "@/lib/config";
import { getToday } from "@/lib/today";

export default async function Footer() {
  const year = (await getToday()).slice(0, 4);

  return (
    <footer className="border-t border-border bg-surface print:hidden">
      <div className="mx-auto max-w-4xl px-6 py-6 text-center text-sm text-muted">
        &copy; {year} {WARD_NAME}. All are welcome to attend.
      </div>
    </footer>
  );
}
