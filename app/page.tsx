import { GlobeAltIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SwsLogo from "./ui/sws-logo";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SwsLogo width={300} className="self-center" />
        <h1 className="text-2xl font-bold antialiased self-center">Verbindungsmanager</h1>
        <div className="items-center justify-center w-full">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/login"
          >
            <UserCircleIcon className="w-6" />
            Anmelden
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.sw-sundern.de/datenschutz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DocumentTextIcon className="w-6" />
          Datenschutz
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.sw-sundern.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobeAltIcon className="w-6" />
          Gehe zu sw-sundern.de
        </a>
        
      </footer>
      <p className="row-start-4 flex items-center text-xs">Version: {process.env.REACT_APP_VERSION}</p>
    </div>
  );
}
