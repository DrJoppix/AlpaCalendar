import NavLinks from "./navlinks";

/**
 * The bottom nav bar of the app.
 *
 * It contains the same links as the main nav bar.
 *
 * @returns The bottom nav bar.
 */
export default function BottomNav() {
    return (
        <div className="flex-[3]">
            <NavLinks />
        </div>
    );
}