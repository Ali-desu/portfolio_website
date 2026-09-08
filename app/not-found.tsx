import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col justify-center py-24">
      <p className="meta">404</p>
      <h1 className="display mt-6 text-[clamp(2.5rem,8vw,6rem)]">
        This page does not exist.
      </h1>
      <p className="lead mt-6 max-w-md">
        The link may be out of date, or the page may have moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-accent">
          Back home
        </Link>
        <Link href="/work" className="btn">
          See the work
        </Link>
      </div>
    </section>
  );
}
