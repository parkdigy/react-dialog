import React from 'react';
import { DialogProps as Props } from './Dialog.types';
type DialogType = typeof Dialog & {
    readonly setDisableEnforceFocus: (disabled: boolean) => void;
};
declare const Dialog: ({ ref, content, contentProps, color, titleIcon: initTitleIcon, title, titleProps, subTitle, actions, margin, hideClose, autoClose, backdropClose, escapeClose, fullHeight, disableEnforceFocus: initDisableEnforceFocus, onShow, onRequestClose: initOnRequestClose, onClose: initOnClose, onCommands, ...otherProps }: Props) => React.JSX.Element;
declare const _default: DialogType;
export default _default;
