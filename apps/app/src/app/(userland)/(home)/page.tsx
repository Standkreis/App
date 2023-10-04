import ToggleMode from '@/components/ToggleMode'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-default">
      <h1 className="text-primary text-3xl font-bold">Standkreis</h1>
      <p className="text-secondary">
        This is going to be the standkreis website
      </p>

      <ToggleMode />

      <div className="bg-paper mx-auto flex max-w-sm items-center space-x-4 rounded-xl p-6 shadow-lg ">
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
          <div className="text-primary text-xl font-medium">ChitChat</div>
          <p className="text-hint">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}
