import React, { ErrorInfo, ReactElement } from 'react';
import { DialogErrorBoundaryProps as Props, DialogErrorBoundaryDefaultProps } from './DialogErrorBoundary.types';
import { useErrorBoundary, withErrorBoundary } from 'react-use-error-boundary';

const ErrorCatcher = withErrorBoundary(
  ({ children, onError }: { children: ReactElement; onError?(error: unknown, errorInfo: ErrorInfo): void }) => {
    const [,] = useErrorBoundary((error, errorInfo) => {
      onError && onError(error, errorInfo);
    });

    return children;
  }
);

const DialogErrorBoundary: React.FC<Props> = ({ onError, children }) => {
  return <ErrorCatcher onError={onError}>{children}</ErrorCatcher>;
};

DialogErrorBoundary.displayName = 'DialogErrorBoundary';
DialogErrorBoundary.defaultProps = DialogErrorBoundaryDefaultProps;

export default DialogErrorBoundary;
