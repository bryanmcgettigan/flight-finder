import React, { ChangeEvent } from 'react'

interface DateBoxProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const DateBox = ({ value, onChange }: DateBoxProps) => {
  return (
    <div>
      <label className="form-label">Select Date</label>
      <input
        type="date"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default DateBox