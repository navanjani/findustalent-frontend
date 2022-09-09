import { setMessage } from '../store/appState/slice';
import { AppDispatch } from '../store';

export const apiError = (dispatch: AppDispatch, error: any) => {
  if (error.response) {
    /* eslint no-console: 0 */
    console.log(error.response.data.message);
    dispatch(
      setMessage({
        variant: 'danger',
        dismissable: true,
        text: error.response.data.message,
      }),
    );
  } else {
    /* eslint no-console: 0 */
    console.log(error.message);
    dispatch(
      setMessage({
        variant: 'danger',
        dismissable: true,
        text: error.message,
      }),
    );
  }
};
