import React, { ChangeEvent } from 'react'
import 'devextreme/dist/css/dx.light.css';
import { DateBox } from 'devextreme-react/date-box';



interface DateBoxLocalProps {
  value: string;
  onChange: (value: string) => void;
}

const DateBoxLocal = ({ value, onChange }: DateBoxLocalProps) => {
  const now = new Date();
  const maxDate = new Date();
  maxDate.setMonth(now.getMonth() + 3); //Set for three months ahead


  return (
    <div>
      <label className="form-label">Select Date</label>
      <DateBox
        min={now}
        max={maxDate}
        value={value}
        type="date"
        onValueChanged={(e: { value: Date | string | null }) => {
          if (e.value) {
            if (e.value instanceof Date) {
              // Format as yyyy-mm-dd in local time
              const year = e.value.getFullYear();
              const month = String(e.value.getMonth() + 1).padStart(2, '0');
              const day = String(e.value.getDate()).padStart(2, '0');
              const formatted = `${year}-${month}-${day}`;
              onChange(formatted);
            } else if (typeof e.value === "string") {
              onChange(e.value);
            }
          }
        }}
      />
    </div>
  );
}

export default DateBoxLocal