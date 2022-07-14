import { SnackbarProgrammatic as Snackbar } from 'buefy';

export const notifyError = (message: string): void => {
  Snackbar.open({
    message,
    type: 'is-danger',
    position: 'is-top-right',
  });
};

export const notifySuccess = (message: string): void => {
  Snackbar.open({
    message,
    type: 'is-success',
    position: 'is-top-right',
  });
};

export const notifyWarning = (message: string): void => {
  Snackbar.open({
    message,
    type: 'is-warning',
    position: 'is-top-right',
  });
};
