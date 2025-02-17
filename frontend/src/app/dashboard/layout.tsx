import BottomNav from "./bottom-nav";

/**
 * The main layout component for dashboard's pages.
 * It renders the passed children in a full-height flexbox column,
 * and a bottom navigation bar at the bottom of the screen.
 *
 * The bottom navigation bar is always visible, and is positioned
 * absolutely at the bottom of the screen.
 *
 * @param children The content of the page.
 * @returns The layout component.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen flex flex-col w-dvw max-w-screen-sm justify-self-center">
            <div className="flex-grow">{children}</div>
            <div className="absolute bottom-0  text-white p-4 w-full h-[12.5dvh]">
                <BottomNav />
            </div>
        </div>
    );
}
