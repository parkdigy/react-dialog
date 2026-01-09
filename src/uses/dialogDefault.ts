import { type ErrorInfo } from 'react';

export interface DialogDefault {
  onBoundaryError?(error: unknown, errorInfo: ErrorInfo): void;
}

let _default: DialogDefault = {};

export function setDialogDefault(value: DialogDefault) {
  _default = value;
}

export function getDialogDefault(): DialogDefault {
  return _default;
}
