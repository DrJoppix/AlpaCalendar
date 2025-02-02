import { Icon, IconifyIcon } from "@iconify/react";
import timer from "@iconify-icons/majesticons/timer";
import calendar from "@iconify-icons/majesticons/calendar";
import testtubefilled from "@iconify-icons/majesticons/test-tube-filled";

export default function MenuButtons() {
    return (
        <div className="flex-[5] bg-white grid">
            <div className="text-4xl font-bold grid grid-cols-3 gap-4 content-evenly justify-center justify-items-center">
                {singleButton('bg-pink-200', 'text-pink-700', timer, 'Focus!')}
                {singleButton('bg-blue-200', 'text-white', calendar, 'Your Calendar')}
                {singleButton('bg-pink-200', 'text-pink-600', testtubefilled, 'Need to Rest?')}
            </div>
            <h1 className="text-4xl font-bold">
                {'riga'}
            </h1>
            <h1 className="text-4xl font-bold">
                {'riga'}
            </h1>
        </div>
    );
}

const singleButton = (bgClass?: string, textClass?: string, icon?: IconifyIcon, text?: string) => {
    return (
        <div className={`flex-[1] ${bgClass} h-32 w-24 rounded-2xl flex flex-col justify-evenly items-center p-1 shadow-xl`}>
            {icon && <Icon icon={icon} className={`w-9 h-9 ${textClass}`} />}
            <h1 className={`text-sm font-light text-center ${textClass}`}>{text}</h1>
        </div>
    );
}