//Mui
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { SetStateAction } from 'react'

interface ErrorMessageProps {
  setErrorMsg: React.Dispatch<SetStateAction<string | undefined>>
  errorMsg: string | undefined
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  setErrorMsg,
  errorMsg,
}) => {
  return (
    <Snackbar
      open
      autoHideDuration={3000}
      onClose={() => setErrorMsg(undefined)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity='warning'>{errorMsg}</Alert>
    </Snackbar>
  )
}

export default ErrorMessage
