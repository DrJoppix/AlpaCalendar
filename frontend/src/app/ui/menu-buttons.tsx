import Image from 'next/image';
import Link from "next/link";
import { Icon, IconifyIcon } from "@iconify/react";
import timer from "@iconify-icons/majesticons/timer";
import calendar from "@iconify-icons/majesticons/calendar";
import testtubefilled from "@iconify-icons/majesticons/test-tube-filled";

export default function MenuButtons() {
    return (
        <div className="flex-[5] bg-white grid text-4xl font-bold">
            <div className="grid grid-cols-3 gap-4 content-evenly justify-center justify-items-center">
                {singleButton('bg-pink-200', 'text-pink-700', timer, 'Focus!', '/timer')}
                {singleButton('bg-blue-200', 'text-white', calendar, 'Your Calendar', '/calendar')}
                {singleButton('bg-pink-200', 'text-pink-600', testtubefilled, 'Need to Rest?', '/rest')}
            </div>
            <div className="px-4">
                {centralButton()}
            </div>
            <div className="px-4">
                {bottomButton()}
            </div>
        </div>
    );
}

const singleButton = (bgClass?: string, textClass?: string, icon?: IconifyIcon, text?: string, page?: string) => {
    return (
        <Link
            key={text}
            href={page || '/'}
            className={`${bgClass} h-32 w-24 rounded-2xl flex flex-col justify-evenly items-center p-1 shadow-xl`}
        >
            {icon && <Icon icon={icon} className={`w-9 h-9 ${textClass}`} />}
            <h1 className={`text-sm font-light text-center ${textClass}`}>{text}</h1>
        </Link>
    );
}

const centralButton = () => {
    return (
        <>
            <div className='flex justify-between px-4'>
                <div className='bg-blue-500 h-10 rounded-t-2xl px-2 py-3'>
                    <Image
                        src="/cloud.svg"
                        width={75}
                        height={75}
                        className="drop-shadow-2xl animate-floating_y"
                        alt="A cloud" />
                </div>
                <div className='bg-blue-200 h-10 w-24 rounded-t-2xl'></div>
                <div className='bg-blue-500 h-10 rounded-t-2xl px-2 py-3'>
                    <Image
                        src="/cloud.svg"
                        width={75}
                        height={75}
                        className="drop-shadow-2xl animate-floating_y"
                        alt="A cloud" />
                </div>
            </div>
            <Link
                key='Lessons'
                href='/lessons'
                className="text-pink-700 bg-pink-200 h-24 w-full rounded-2xl px-4 flex flex-col justify-center items-center p-1 shadow-xl"
            >
                <h1>Lessons</h1>
            </Link>
        </>
    );
}

const bottomButton = () => {
    return (
        <Link
            key='Progress Tracking'
            href='/progress'
            className="text-slate-100 bg-blue-500 h-24 w-full rounded-2xl px-4 flex justify-evenly items-center p-1 shadow-xl"
        >
            <Image
                src="/flower.svg"
                width={40}
                height={40}
                className="scale-x-[-1]"
                alt="A flower" />
            <h1>Progress Tracking</h1>
            <Image
                src="/flower.svg"
                width={40}
                height={40}
                className=""
                alt="A flower" />
        </Link>
    );
}