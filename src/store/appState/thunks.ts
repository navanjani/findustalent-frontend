import { DEFAULT_MESSAGE_TIMEOUT } from '../../config/constants';
import { setMessage, clearMessage } from './slice';
import { AppDispatch } from '../index';

export const showMessageWithTimeout =
  (variant: string, dismissable: boolean, text: string, timeOutMilliSeconds?: number) =>
  (dispatch: AppDispatch) => {
    dispatch(setMessage({ variant, dismissable, text }));
    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;
    setTimeout(() => dispatch(clearMessage()), timeout);
  };

export const dummy = () => {};
