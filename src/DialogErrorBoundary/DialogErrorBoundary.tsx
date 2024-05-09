import React, { ErrorInfo, ReactElement } from 'react';
import { DialogErrorBoundaryProps as Props } from './DialogErrorBoundary.types';
import { useErrorBoundary, withErrorBoundary } from 'react-use-error-boundary';

const ErrorCatcher = withErrorBoundary(
  ({ children, onError }: { children: ReactElement; onError?(error: unknown, errorInfo: ErrorInfo): void }) => {
    const [,] = useErrorBoundary((error, errorInfo) => {
      onError && onError(error, errorInfo);
    });

    return children;
  }
);

const DialogErrorBoundary = ({ onError, children }: Props) => {
  return <ErrorCatcher onError={onError}>{children}</ErrorCatcher>;
};

DialogErrorBoundary.displayName = 'DialogErrorBoundary';

export default DialogErrorBoundary;
