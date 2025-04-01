import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import SwsLogo from "../../sws-logo";

export default function SideNav()
{
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-30 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-900 p-4 md:h-30"
                href="/"
            >
                <div className="w-32 md:w-40">
                    <SwsLogo width={150} />
                    <h1 className="font-bold text-neutral-800 dark:text-neutral-400 mt-2">Verbindungsmanager</h1>
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-gray-900 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 button-design p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Abmelden</div>
                    </button>
                </form>
            </div>
        </div>
    );
}