import HeaderAlpaca from "@/app/ui/header-alpaca";

export default function Dashboard() {
    return (
        <main className="flex flex-col h-screen w-screen max-w-screen-sm text-black bg-pink-300">
            <HeaderAlpaca />
            <div className="flex-[5] bg-white">Contenuto</div>
            <div className="flex-1 bg-pink-500">Nav</div>
        </main>
    );
}
