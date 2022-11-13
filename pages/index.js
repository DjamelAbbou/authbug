import {signIn} from 'next-auth/react'

export default function Home() {
  return (
    <div className>
      <div
        className="border-sky-800 border-2 rounded-lg w-1/3 flex justify-center items-center text-xl cursor-pointer"
        onClick={() => signIn()}
      >
        click here to use the next-auth sign in function
      </div>
    </div>
  )
}
