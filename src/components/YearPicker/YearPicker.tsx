//Mui
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Grid } from '@mui/material'

//Date Library
import dayjs from 'dayjs'

interface YearPickerProps {
  onChange: (newYear: number | null) => void
  value: number | null
}

const YearPicker: React.FC<YearPickerProps> = ({ value, onChange }) => {
  return (
    <Grid item xs={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          aria-label='Select year'
          sx={{ zIndex: 1000 }}
          disableFuture
          views={['year']}
          label={'Year'}
          onChange={(newYear) => onChange(newYear ? newYear.year() : null)}
          closeOnSelect
          value={value ? dayjs(value.toString()) : null}
          slotProps={{
            actionBar: {
              actions: ['clear', 'today'],
            },
            field: {
              clearable: true,
              onClear: () => onChange(null),
            },
          }}
        />
      </LocalizationProvider>
    </Grid>
  )
}

export default YearPicker
