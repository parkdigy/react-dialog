import { type ErrorInfo, type ReactElement } from 'react';
export interface DialogErrorBoundaryProps {
    children: ReactElement;
    onError?: (error: unknown, errorInfo: ErrorInfo) => void;
}
