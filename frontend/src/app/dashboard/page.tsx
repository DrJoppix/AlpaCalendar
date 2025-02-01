import HeaderAlpaca from "@/app/ui/header-alpaca";

/**
 * The dashboard page render.
 * 
 */
export default function Dashboard() {
    return (
        <main className="flex flex-col h-dvh w-dvw max-w-screen-sm text-black bg-pink-300">
            <HeaderAlpaca />
            <div className="flex-[5] bg-white"></div>
            <div className="flex-1 bg-pink-500"></div>
        </main>
    );
}
