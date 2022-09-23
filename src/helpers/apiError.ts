import { toast } from 'react-toastify';
import { AppDispatch } from '../store';
import { setMessage } from '../store/appState/slice';

export const apiError = (dispatch: AppDispatch, error: any, showToast: boolean = false) => {
  let errorMessage = 'Something went wrong!';
  if (error.response && error.response.data) {
    /* eslint no-console: 0 */
    console.log(error.response);
    errorMessage = error.response.data.message;
  } else {
    /* eslint no-console: 0 */
    console.log(error.message);
    errorMessage = error.message;
  }
  if (showToast) {
    toast.error(errorMessage);
  }
  dispatch(
    setMessage({
      variant: 'danger',
      dismissable: true,
      text: errorMessage,
    }),
  );
};
