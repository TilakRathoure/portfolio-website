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
        <p className="text-sm text-muted font-light">Made with Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
