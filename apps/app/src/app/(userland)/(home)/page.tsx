import ToggleMode from '@/components/ToggleMode'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Standkreis
      </h1>
      <p className="text-black dark:text-white">
        This is going to be the standkreis website
      </p>

      <ToggleMode />

      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-950">
        <div className="shrink-0">
          <Image
            className="h-12 w-12"
            src="/img/logo.svg"
            alt="ChitChat Logo"
            width={60}
            height={60}
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}
