import { ErrorInfo } from 'react';
export interface DialogDefault {
    onBoundaryError?(error: unknown, errorInfo: ErrorInfo): void;
}
export declare function setDialogDefault(value: DialogDefault): void;
export declare function getDialogDefault(): DialogDefault;
