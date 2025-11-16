"use client";

import * as React from "react";

type SearchInputProps = {
  placeholder?: string;
  className?: string;
};

export default function SearchInput({
  placeholder = "Search models",
  className,
}: SearchInputProps) {
  const [value, setValue] = React.useState("");

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-zinc-500 dark:text-zinc-400">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="6" />
          <path d="M20 20L16.65 16.65" />
        </svg>
      </span>
      <input
        type="search"
        inputMode="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Search models"
        className="h-10 w-full rounded-md border border-zinc-200/60 bg-white pl-9 pr-3 text-sm text-zinc-900 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-black dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-100"
      />
    </div>
  );
}
