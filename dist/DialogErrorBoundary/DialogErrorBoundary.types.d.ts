import { ErrorInfo, ReactElement } from 'react';
export interface DialogErrorBoundaryProps {
    children: ReactElement;
    onError?(error: unknown, errorInfo: ErrorInfo): void;
}
export declare const DialogErrorBoundaryDefaultProps: {};
