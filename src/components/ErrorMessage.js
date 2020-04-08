// NPM imports

import React from 'react';
import { ErrorMessage } from 'formik';
import InlineMessage from '@atlaskit/inline-message';

// Styled components

// Component

function CLErrorMessage(props) {
  return (
    <ErrorMessage {...props}>
      {message => (
        <div>
          <InlineMessage title={message} type="error" />
        </div>
      )}
    </ErrorMessage>
  );
}

export default CLErrorMessage;
