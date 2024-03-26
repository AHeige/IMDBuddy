//Mui
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

//Context
import { useFeedbackContext } from '../../hooks/useFeedbackContext'

const FeedbackMessage: React.FC = () => {
  const { setSuccessMessage, successMessage, setErrorMessage, errorMessage } =
    useFeedbackContext()

  return (
    <Snackbar
      open={Boolean(errorMessage || successMessage)}
      autoHideDuration={3000}
      onClose={() => {
        if (errorMessage) {
          setErrorMessage(undefined)
        } else if (successMessage) {
          setSuccessMessage(undefined)
        }
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={errorMessage ? 'error' : 'success'}>
        {errorMessage || successMessage}
      </Alert>
    </Snackbar>
  )
}

export default FeedbackMessage
