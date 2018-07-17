import React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

const SharedSnackbar = () => (
  <SharedSnackbarConsumer>
    {({ snackbarIsOpen, message, closeSnackbar }) => (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarIsOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={message}
        action={[
          <IconButton key="close" color="inherit" onClick={closeSnackbar}>
            <Close />
          </IconButton>
        ]}
      />
    )}
  </SharedSnackbarConsumer>
);

export default SharedSnackbar;
