import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const ExampleButton: FC<Props> = ({ children }) => {
  return (
    <button className="text-3xl font-bold underline bg-red-500">
      {children}
    </button>
  )
}
