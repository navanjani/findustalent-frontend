import { toast } from 'react-toastify';
import { setMessage } from '../store/appState/slice';
import { AppDispatch } from '../store';

export const apiError = (dispatch: AppDispatch, error: any) => {
  if (error.response) {
    /* eslint no-console: 0 */
    console.log(error.response);
    if (error.response.data) {
      toast.error(error.response.data.message);
      dispatch(
        setMessage({
          variant: 'danger',
          dismissable: true,
          text: error.response.data.message,
        }),
      );
    } else {
      toast.error('Something went wrong!');
    }
  } else {
    /* eslint no-console: 0 */
    console.log(error.message);
    toast.error(error.message);
    dispatch(
      setMessage({
        variant: 'danger',
        dismissable: true,
        text: error.message,
      }),
    );
  }
};
