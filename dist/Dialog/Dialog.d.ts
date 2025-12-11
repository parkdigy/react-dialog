import React from 'react';
import { DialogProps as Props, DialogCommands } from './Dialog.types';
type DialogType = typeof Dialog & {
    readonly setDisableEnforceFocus: (disabled: boolean) => void;
};
declare const Dialog: React.ForwardRefExoticComponent<Props & React.RefAttributes<DialogCommands>>;
declare const _default: DialogType;
export default _default;
