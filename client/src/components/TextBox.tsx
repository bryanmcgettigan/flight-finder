import React, { ReactNode, ChangeEvent } from 'react'

interface Props {
    children: ReactNode
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextBox = ({ children, value, onChange }: Props) => {
  return (
    <div>
      {children && <label className="form-label" style={{ marginRight: '12px' }}>{children}</label>}
      <input
        type="text"
        className="form-control"
        placeholder="Enter airport"
        style={{ marginBottom: '12px' }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextBox