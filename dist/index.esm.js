import React,{createContext,useId,useRef,useState,useEffect,useMemo,useCallback,useLayoutEffect,useContext}from'react';import {useTheme,styled,Box,Icon,Dialog as Dialog$1,DialogTitle,IconButton,DialogContent,DialogActions,Button}from'@mui/material';import {useAutoUpdateLayoutRef,useAutoUpdateState,useForwardRef}from'@pdg/react-hook';import {withErrorBoundary,useErrorBoundary}from'react-use-error-boundary';/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};const DialogContextDefaultValue = {
    pushDialog() { },
    alertDialog() { },
    confirmDialog() { },
};const DialogContext = createContext(DialogContextDefaultValue);let __disableEnforceFocusListeners = [];
const Dialog = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { content, contentProps, color = 'primary', titleIcon: initTitleIcon, title, titleProps, subTitle, actions, margin = 32, hideClose, autoClose, backdropClose, escapeClose, fullHeight, disableEnforceFocus: initDisableEnforceFocus, onShow, onRequestClose: initOnRequestClose, onClose: initOnClose, onCommands } = _a, otherProps = __rest(_a, ["content", "contentProps", "color", "titleIcon", "title", "titleProps", "subTitle", "actions", "margin", "hideClose", "autoClose", "backdropClose", "escapeClose", "fullHeight", "disableEnforceFocus", "onShow", "onRequestClose", "onClose", "onCommands"]);
    const id = useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const theme = useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const contentRef = useRef(null);
    const onRequestCloseRef = useAutoUpdateLayoutRef(initOnRequestClose);
    const onCloseRef = useAutoUpdateLayoutRef(initOnClose);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [open, setOpen] = useState(true);
    const [disableEnforceFocus, setDisableEnforceFocus] = useAutoUpdateState(initDisableEnforceFocus);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const titleIcon = initTitleIcon === null || initTitleIcon === void 0 ? void 0 : initTitleIcon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        if (onShow)
            onShow();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (initDisableEnforceFocus === undefined) {
            const handler = (disabled) => {
                setDisableEnforceFocus(disabled);
            };
            __disableEnforceFocusListeners.push(handler);
            return () => {
                __disableEnforceFocusListeners = __disableEnforceFocusListeners.filter((l) => l !== handler);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initDisableEnforceFocus]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const finalContentProps = useMemo(() => {
        const newContentProps = contentProps || {};
        if (actions) {
            newContentProps.style = Object.assign({ paddingBottom: 15 }, newContentProps.style);
        }
        return newContentProps;
    }, [contentProps, actions]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const close = useCallback(() => {
        setOpen(false);
        setTimeout(() => {
            onCloseRef.current && onCloseRef.current();
        }, theme.transitions.duration.leavingScreen);
    }, [onCloseRef, theme.transitions.duration.leavingScreen]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = useMemo(() => ({
        getId: () => id,
        close,
        scrollToTop: () => { var _a; return (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: 0 }); },
    }), [id, close]);
    useForwardRef(ref, commands);
    useLayoutEffect(() => {
        onCommands && onCommands(commands);
    }, [commands, onCommands]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClose = useCallback((_, reason) => {
        switch (reason) {
            case 'backdropClick':
                if (backdropClose) {
                    if (autoClose) {
                        close();
                    }
                    else {
                        onRequestCloseRef.current && onRequestCloseRef.current();
                    }
                }
                break;
            case 'escapeKeyDown':
                if (escapeClose) {
                    if (autoClose) {
                        close();
                    }
                    else {
                        onRequestCloseRef.current && onRequestCloseRef.current();
                    }
                }
                break;
        }
    }, [backdropClose, escapeClose, autoClose, close, onRequestCloseRef]);
    const handleCloseClick = useCallback(() => {
        if (autoClose) {
            close();
        }
        else {
            onRequestCloseRef.current && onRequestCloseRef.current();
        }
    }, [autoClose, close, onRequestCloseRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledDialog, Object.assign({ className: `color-${color} ${fullHeight ? 'Dialog-full-height' : ''}`, open: open, "data-margin": margin, "aria-labelledby": `dialog-title-${id}`, disableEnforceFocus: disableEnforceFocus, onClose: handleClose }, otherProps),
        title && (React.createElement(StyledDialogTitle, Object.assign({}, titleProps),
            (titleIcon || title) && (React.createElement(Box, { display: 'flex', fontSize: 17 },
                titleIcon && (React.createElement(Box, { display: 'flex', alignItems: 'center', marginRight: '7px' },
                    React.createElement(Icon, { style: { fontSize: '22px' } }, titleIcon))),
                title && (React.createElement(Box, { display: 'flex', alignItems: 'center' },
                    title,
                    subTitle && React.createElement("div", { className: 'Dialog-SubTitle' },
                        "\u00A0-\u00A0",
                        subTitle))))),
            !hideClose && (React.createElement(StyleDialogTitleCloseButton, { className: 'dialog-close-btn', "aria-label": 'close', style: { color: theme.palette[color || 'primary'].contrastText }, onClick: handleCloseClick },
                React.createElement(Icon, null, "close"))))),
        React.createElement(StyledDialogContent, Object.assign({ ref: contentRef }, finalContentProps), content),
        actions && React.createElement(StyledDialogActions, null, actions)));
});
Dialog.displayName = 'Dialog';
Dialog.setDisableEnforceFocus = (disabled) => {
    __disableEnforceFocusListeners.forEach((listener) => listener(disabled));
};
/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/
const StyledDialog = styled(Dialog$1) `
  &.Dialog-full-height {
    > .MuiDialog-container > .MuiDialog-paper {
      height: 100vh;
    }
  }
  > .MuiDialog-container > .MuiDialog-paper:not(.MuiDialog-paperFullScreen) {
    width: calc(100% - ${(props) => props['data-margin'] * 2}px);
    max-height: calc(100% - ${(props) => props['data-margin'] * 2}px);
    margin: 0;
  }
`;
const StyledDialogTitle = styled(DialogTitle)(() => ({
    position: 'relative',
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
}));
const StyleDialogTitleCloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    right: 8,
    top: 5,
    color: theme.palette.grey[500],
}));
const StyledDialogContent = styled(DialogContent) `
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const StyledDialogActions = styled(DialogActions) `
  padding-left: 20px;
  padding-right: 15px;
`;const DialogActionButton$1 = (_a) => {
    var { variant } = _a, otherProps = __rest(_a, ["variant"]);
    return React.createElement(StyledButton, Object.assign({ variant: variant || 'text' }, otherProps));
};
var DialogActionButton = React.memo(DialogActionButton$1);
/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/
const StyledButton = styled(Button) `
  padding-left: 15px;
  padding-right: 15px;
  min-width: 0;
`;const AlertDialog = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var { color = 'primary', style, maxWidth = 'xs', confirmButtonLabel = '확인', confirmButtonProps, onCommands } = _a, props = __rest(_a, ["color", "style", "maxWidth", "confirmButtonLabel", "confirmButtonProps", "onCommands"]);
    const dialogRef = useRef(null);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = useMemo(() => ({
        getId: () => { var _a; return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || ''; },
        close: () => { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close(); },
    }), []);
    useForwardRef(ref, commands);
    useLayoutEffect(() => {
        onCommands && onCommands(commands);
    }, [commands, onCommands]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Dialog, Object.assign({ ref: dialogRef, color: color, autoClose: true, escapeClose: true, maxWidth: maxWidth, style: Object.assign({ zIndex: 1399 }, style) }, props, { actions: React.createElement(DialogActionButton, Object.assign({ variant: 'text' }, confirmButtonProps, { onClick: () => { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close(); } }), confirmButtonLabel) })));
});
AlertDialog.displayName = 'AlertDialog';const ConfirmDialog = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var { type = 'default', content, style: initStyle, maxWidth = 'xs', confirmButtonLabel = '확인', confirmButtonProps, cancelButtonLabel = '취소', cancelButtonProps, onShow, onClose, onConfirm, onCancel, onCommands } = _a, props = __rest(_a, ["type", "content", "style", "maxWidth", "confirmButtonLabel", "confirmButtonProps", "cancelButtonLabel", "cancelButtonProps", "onShow", "onClose", "onConfirm", "onCancel", "onCommands"]);
    const theme = useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const dialogRef = useRef(null);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const { color, textColor } = useMemo(() => {
        let newColor;
        let newTextColor;
        switch (type) {
            case 'primary':
                newColor = 'info';
                newTextColor = theme.palette.primary.main;
                break;
            case 'secondary':
                newColor = 'secondary';
                newTextColor = theme.palette.secondary.main;
                break;
            case 'info':
                newColor = 'info';
                newTextColor = theme.palette.info.main;
                break;
            case 'success':
                newColor = 'success';
                newTextColor = theme.palette.success.main;
                break;
            case 'warning':
                newColor = 'warning';
                newTextColor = theme.palette.warning.main;
                break;
            case 'error':
                newColor = 'error';
                newTextColor = theme.palette.error.main;
                break;
            default:
                newColor = 'primary';
                newTextColor = theme.palette.text.primary;
        }
        return { color: newColor, textColor: newTextColor };
    }, [
        theme.palette.error.main,
        theme.palette.info.main,
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.success.main,
        theme.palette.text.primary,
        theme.palette.warning.main,
        type,
    ]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = useMemo(() => ({
        getId: () => { var _a; return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || ''; },
        close: () => { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close(); },
    }), []);
    useForwardRef(ref, commands);
    useLayoutEffect(() => {
        onCommands && onCommands(commands);
    }, [commands, onCommands]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Dialog, Object.assign({ ref: dialogRef, maxWidth: maxWidth, color: color, escapeClose: true, style: Object.assign({ zIndex: 1399 }, initStyle), onShow: () => onShow && onShow(), onClose: () => onClose && onClose(), onRequestClose: () => onCancel && onCancel(commands) }, props, { content: React.createElement(Box, { textAlign: 'center', py: 2, fontSize: 14, color: textColor }, content), actions: React.createElement(React.Fragment, null,
            React.createElement(DialogActionButton, Object.assign({ variant: 'contained', size: 'large', style: { flex: 1, color: '#fff', backgroundColor: '#9f9f9f' } }, cancelButtonProps, { onClick: () => onCancel && onCancel(commands) }), cancelButtonLabel),
            React.createElement(DialogActionButton, Object.assign({ variant: 'contained', size: 'large', color: color, style: { flex: 1 } }, confirmButtonProps, { onClick: () => onConfirm && onConfirm(commands) }), confirmButtonLabel)) })));
});
ConfirmDialog.displayName = 'ConfirmDialog';const ErrorCatcher = withErrorBoundary(({ children, onError }) => {
    useErrorBoundary((error, errorInfo) => {
        onError && onError(error, errorInfo);
    });
    return children;
});
const DialogErrorBoundary = ({ onError, children }) => {
    return React.createElement(ErrorCatcher, { onError: onError }, children);
};
DialogErrorBoundary.displayName = 'DialogErrorBoundary';const DialogContextProvider = ({ children }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const dialogKeyRef = useRef(0);
    const dialogIdsRef = useRef({});
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [dialogs, setDialogs] = useState([]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleShow = useCallback((dialog, id, onShow) => {
        dialogIdsRef.current[id] = dialog;
        if (onShow)
            onShow(id);
    }, []);
    const handleClose = useCallback((id, onClose) => {
        const dialog = dialogIdsRef.current[id];
        if (dialog) {
            setDialogs((dialogs) => {
                const idx = dialogs.indexOf(dialog);
                if (idx > -1) {
                    const newDialogs = [...dialogs];
                    newDialogs.splice(idx, 1);
                    return newDialogs;
                }
                else {
                    return dialogs;
                }
            });
            delete dialogIdsRef.current[id];
        }
        if (onClose)
            onClose(id);
    }, []);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const alertDialog = useCallback((props) => {
        dialogKeyRef.current += 1;
        const { onShow, onClose } = props, otherProps = __rest(props, ["onShow", "onClose"]);
        let dialogId;
        const dialog = (React.createElement(AlertDialog, Object.assign({ ref: (commands) => {
                if (commands) {
                    dialogId = commands.getId();
                }
            }, key: dialogKeyRef.current }, otherProps, { onShow: () => {
                handleShow(dialog, dialogId, onShow);
            }, onClose: () => {
                handleClose(dialogId, onClose);
            } })));
        setDialogs((dialogs) => {
            return [...dialogs, dialog];
        });
    }, [handleClose, handleShow]);
    const confirmDialog = useCallback((props) => {
        dialogKeyRef.current += 1;
        const { onShow, onClose } = props, otherProps = __rest(props, ["onShow", "onClose"]);
        let dialogId;
        const dialog = (React.createElement(ConfirmDialog, Object.assign({ ref: (commands) => {
                if (commands) {
                    dialogId = commands.getId();
                }
            }, key: dialogKeyRef.current }, otherProps, { onShow: () => handleShow(dialog, dialogId, onShow), onClose: () => handleClose(dialogId, onClose) })));
        setDialogs((dialogs) => {
            return [...dialogs, dialog];
        });
    }, [handleClose, handleShow]);
    const pushDialog = useCallback((dialogComponent, props, onErrorBoundary) => {
        dialogKeyRef.current += 1;
        const dialogId = `dig_${dialogKeyRef.current}`;
        const dialog = (React.createElement(DialogErrorBoundary, { key: dialogKeyRef.current, onError: onErrorBoundary }, React.createElement(dialogComponent, Object.assign(Object.assign({}, props), { onShow: () => {
                handleShow(dialog, dialogId, props === null || props === void 0 ? void 0 : props.onShow);
            }, onClose: () => {
                handleClose(dialogId, props === null || props === void 0 ? void 0 : props.onClose);
            } }))));
        setDialogs((dialogs) => {
            return [...dialogs, dialog];
        });
    }, [handleClose, handleShow]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(DialogContext.Provider, { value: { pushDialog, alertDialog, confirmDialog } },
        children,
        dialogs));
};let _default = {};
function setDialogDefault(value) {
    _default = value;
}
function getDialogDefault() {
    return _default;
}function useDialog(dialogComponent) {
    const value = useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useDialog should be used within DialogContext.Provider');
    }
    const pushDialog = value.pushDialog;
    return useCallback((props, onErrorBoundary) => {
        const dialogDefault = getDialogDefault();
        pushDialog(dialogComponent, props, onErrorBoundary || dialogDefault.onBoundaryError);
    }, [pushDialog, dialogComponent]);
}function useAlertDialog() {
    const value = useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useAlertDialog should be used within DialogContext.Provider');
    }
    return value.alertDialog;
}function useConfirmDialog() {
    const value = useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useConfirmDialog should be used within DialogContext.Provider');
    }
    return value.confirmDialog;
}export{Dialog,DialogActionButton,DialogContextProvider,getDialogDefault,setDialogDefault,useAlertDialog,useConfirmDialog,useDialog};