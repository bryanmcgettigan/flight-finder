import React, { ReactNode } from 'react'

interface ButtonProps {
    onClick: () => void
    children?: ReactNode
}

const AcceptButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button type="button" className='btn btn-primary' onClick={onClick}>
      {children || "Accept"}
    </button>
  )
}

export default AcceptButton