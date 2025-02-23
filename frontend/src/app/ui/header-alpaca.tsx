import Image from 'next/image';

/**
 * Header component for the dashboard.
 * Show an alpaca, clouds and flowers.
 */
export default function HeaderAlpaca() {
    return (
        <div className="flex-[2] flex justify-center items-end relative overflow-hidden bg-pink-200">
            {sideRenderer()}
            <div>
                <Image
                    src="/staring-alpaca.svg"
                    layout="fill"
                    objectFit="contain"
                    className="z-0 drop-shadow-2xl"
                    alt="Happy toon alpaca drawing"
                />
                <h1 className="bg-white py-1 px-12 rounded-full mb-1 border-pink-600 border-2 relative z-10 shadow-2xl">You can do it!</h1>
            </div>
        </div>
    );
}

/**
 * Render the clouds and flowers on the side.
 * There are two groups, one on the left, one on the right.
 * They are mirrored.
 */
function sideRenderer() {
    return (
        <>
            <div className="absolute left-0 flex flex-col items-center space-y-4 px-4 max-h-[75%] scale-x-[-1]">
                {sideImages()}
            </div>
            <div className="absolute right-0 flex flex-col items-center space-y-4 px-4 max-h-[75%]">
                {sideImages()}
            </div>
        </>
    );
}

/**
 * Render the clouds and flowers on the side.
 */
function sideImages() {
    return (
        <>
            <div className="relative w-20 h-20">
                <Image
                    src="/cloud.svg"
                    layout="fill"
                    objectFit="contain"
                    className="drop-shadow-2xl animate-floating_x"
                    alt="A cloud" />
            </div>
            <div className="relative w-28 h-28">
                <Image
                    src="/flower.svg"
                    layout="fill"
                    objectFit="contain"
                    className="drop-shadow-2xl animate-wiggle"
                    alt="A flower" />
            </div>
        </>
    )
}