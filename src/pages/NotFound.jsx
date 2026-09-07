import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 text-center w-full">
          <p className="font-data-num text-maroon text-sm font-semibold tracking-wide">404</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-3">
            This page doesn't exist
          </h1>
          <p className="text-steel mt-4 max-w-md mx-auto">
            The page you're looking for may have moved. Head back to the
            homepage or explore our services.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/" className="bg-maroon text-white font-semibold px-7 py-4">
              Back to Home
            </Link>
            <Link to="/services" className="border border-ink font-semibold px-7 py-4">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
