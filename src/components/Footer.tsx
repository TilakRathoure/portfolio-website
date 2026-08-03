import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-16 xl:px-28 py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="font-ovo text-2xl tracking-tight">
            Tilak Rathoure
            <span className="text-accent">.</span>
          </p>
          <a
            href="mailto:tilakrathoure@gmail.com"
            className="mt-2 inline-block text-muted font-light transition-colors hover:text-accent"
          >
            tilakrathoure@gmail.com
          </a>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-sm text-muted font-light">
          <p>Made with Next.js</p>
          <a
            href="https://github.com/TilakRathoure/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            View source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
