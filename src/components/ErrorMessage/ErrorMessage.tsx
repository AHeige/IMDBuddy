//Mui
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useSearchContext } from '../../hooks/useSearchContext'

const ErrorMessage: React.FC = () => {
  const { errorMsg, setErrorMsg } = useSearchContext()

  return (
    errorMsg && (
      <Snackbar
        open
        autoHideDuration={3000}
        onClose={() => setErrorMsg(undefined)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity='warning'>{errorMsg}</Alert>
      </Snackbar>
    )
  )
}

export default ErrorMessage
