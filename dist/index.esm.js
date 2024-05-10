import React,{createContext,useId,useRef,useState,useEffect,useCallback,useMemo,useLayoutEffect,useContext,Component}from'react';import {styled,Dialog as Dialog$1,DialogTitle,IconButton,DialogContent,DialogActions,useTheme,Box,Icon,Button,Typography}from'@mui/material';import {useAutoUpdateLayoutRef,useForwardRef}from'@pdg/react-hook';/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};/* eslint-disable */
var DialogContextDefaultValue = {
    pushDialog: function () { },
    alertDialog: function () { },
    confirmDialog: function () { },
};
/* eslint-enable */var DialogContext = createContext(DialogContextDefaultValue);var StyledDialog = styled(Dialog$1)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  &.Dialog-full-height {\n    > .MuiDialog-container > .MuiDialog-paper {\n      height: 100vh;\n    }\n  }\n"], ["\n  &.Dialog-full-height {\n    > .MuiDialog-container > .MuiDialog-paper {\n      height: 100vh;\n    }\n  }\n"])));
var StyledDialogTitle = styled(DialogTitle)(function () { return ({
    position: 'relative',
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
}); });
var StyleDialogTitleCloseButton = styled(IconButton)(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute',
        right: 8,
        top: 5,
        color: theme.palette.grey[500],
    });
});
var StyledDialogContent = styled(DialogContent)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"])));
var StyledDialogActions = styled(DialogActions)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-left: 20px;\n  padding-right: 15px;\n"], ["\n  padding-left: 20px;\n  padding-right: 15px;\n"])));
var templateObject_1$1, templateObject_2, templateObject_3;var Dialog = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var content = _a.content, _b = _a.color, color = _b === void 0 ? 'primary' : _b, initTitleIcon = _a.titleIcon, title = _a.title, titleProps = _a.titleProps, subTitle = _a.subTitle, actions = _a.actions, hideClose = _a.hideClose, autoClose = _a.autoClose, backdropClose = _a.backdropClose, escapeClose = _a.escapeClose, fullHeight = _a.fullHeight, onShow = _a.onShow, initOnRequestClose = _a.onRequestClose, initOnClose = _a.onClose, onCommands = _a.onCommands, otherProps = __rest(_a, ["content", "color", "titleIcon", "title", "titleProps", "subTitle", "actions", "hideClose", "autoClose", "backdropClose", "escapeClose", "fullHeight", "onShow", "onRequestClose", "onClose", "onCommands"]);
    var id = useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var theme = useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var contentRef = useRef(null);
    var onRequestCloseRef = useAutoUpdateLayoutRef(initOnRequestClose);
    var onCloseRef = useAutoUpdateLayoutRef(initOnClose);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = useState(true), open = _c[0], setOpen = _c[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var titleIcon = initTitleIcon === null || initTitleIcon === void 0 ? void 0 : initTitleIcon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); });
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (onShow)
            onShow();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var close = useCallback(function () {
        setOpen(false);
        setTimeout(function () {
            onCloseRef.current && onCloseRef.current();
        }, theme.transitions.duration.leavingScreen);
    }, [onCloseRef, theme.transitions.duration.leavingScreen]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getId: function () { return id; },
        close: close,
        scrollToTop: function () { var _a; return (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: 0 }); },
    }); }, [id, close]);
    useForwardRef(ref, commands);
    useLayoutEffect(function () {
        onCommands && onCommands(commands);
    }, [commands, onCommands]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClose = useCallback(function (_, reason) {
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
    var handleCloseClick = useCallback(function () {
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
    return (React.createElement(StyledDialog, __assign({ className: "color-".concat(color, " ").concat(fullHeight ? 'Dialog-full-height' : ''), open: open, "aria-labelledby": "dialog-title-".concat(id), onClose: handleClose }, otherProps),
        title && (React.createElement(StyledDialogTitle, __assign({}, titleProps),
            (titleIcon || title) && (React.createElement(Box, { style: { display: 'flex', fontSize: '17px' } },
                titleIcon && (React.createElement(Box, { style: { display: 'flex', alignItems: 'center', marginRight: 7 } },
                    React.createElement(Icon, { style: { fontSize: '22px' } }, titleIcon))),
                title && (React.createElement(Box, { style: { display: 'flex', alignItems: 'center' } },
                    title,
                    subTitle && React.createElement("div", { className: 'Dialog-SubTitle' },
                        "\u00A0-\u00A0",
                        subTitle))))),
            !hideClose && (React.createElement(StyleDialogTitleCloseButton, { className: 'dialog-close-btn', "aria-label": 'close', style: { color: theme.palette[color || 'primary'].contrastText }, onClick: handleCloseClick },
                React.createElement(Icon, null, "close"))))),
        React.createElement(StyledDialogContent, { ref: contentRef, style: {
                paddingBottom: actions ? 15 : undefined,
            } }, content),
        actions && React.createElement(StyledDialogActions, null, actions)));
});
Dialog.displayName = 'Dialog';var DialogActionButton = function (_a) {
    var variant = _a.variant, otherProps = __rest(_a, ["variant"]);
    return React.createElement(StyledButton, __assign({ variant: variant || 'text' }, otherProps));
};
var DialogActionButton$1 = React.memo(DialogActionButton);
/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/
var StyledButton = styled(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: 15px;\n  padding-right: 15px;\n  min-width: 0;\n"], ["\n  padding-left: 15px;\n  padding-right: 15px;\n  min-width: 0;\n"])));
var templateObject_1;var AlertDialog = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, style = _a.style, _c = _a.confirmButtonLabel, confirmButtonLabel = _c === void 0 ? '확인' : _c, confirmButtonProps = _a.confirmButtonProps, onCommands = _a.onCommands, props = __rest(_a, ["color", "style", "confirmButtonLabel", "confirmButtonProps", "onCommands"]);
    var dialogRef = useRef(null);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getId: function () { var _a; return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || ''; },
        close: function () { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close(); },
    }); }, []);
    useForwardRef(ref, commands);
    useLayoutEffect(function () {
        onCommands && onCommands(commands);
    }, [commands, onCommands]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Dialog, __assign({ ref: dialogRef, color: color, autoClose: true, escapeClose: true, style: __assign({ zIndex: 1399 }, style) }, props, { actions: React.createElement(DialogActionButton$1, __assign({ variant: 'text' }, confirmButtonProps, { onClick: function () { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close(); } }), confirmButtonLabel) })));
});
AlertDialog.displayName = 'AlertDialog';var ConfirmDialog = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var initStyle = _a.style, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.confirmButtonLabel, confirmButtonLabel = _c === void 0 ? '확인' : _c, confirmButtonProps = _a.confirmButtonProps, _d = _a.cancelButtonLabel, cancelButtonLabel = _d === void 0 ? '취소' : _d, cancelButtonProps = _a.cancelButtonProps, onShow = _a.onShow, onClose = _a.onClose, onConfirm = _a.onConfirm, onCancel = _a.onCancel, onCommands = _a.onCommands, props = __rest(_a, ["style", "color", "confirmButtonLabel", "confirmButtonProps", "cancelButtonLabel", "cancelButtonProps", "onShow", "onClose", "onConfirm", "onCancel", "onCommands"]);
    var dialogRef = useRef(null);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () {
        return ({
            getId: function () { var _a; return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || ''; },
            close: function () { var _a; return (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close(); },
        });
    }, []);
    useForwardRef(ref, commands);
    useLayoutEffect(function () {
        onCommands && onCommands(commands);
    }, [commands, onCommands]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Dialog, __assign({ ref: dialogRef, color: color, escapeClose: true, style: __assign({ zIndex: 1399 }, initStyle), onShow: function () { return onShow && onShow(); }, onClose: function () { return onClose && onClose(); }, onRequestClose: function () { return onCancel && onCancel(commands); } }, props, { actions: React.createElement(React.Fragment, null,
            React.createElement(DialogActionButton$1, __assign({ variant: 'text' }, cancelButtonProps, { onClick: function () { return onCancel && onCancel(commands); } }),
                React.createElement(Typography, { fontSize: 'inherit', style: { color: '#6f6f6f' } }, cancelButtonLabel)),
            React.createElement(DialogActionButton$1, __assign({ variant: 'text', color: color }, confirmButtonProps, { onClick: function () { return onConfirm && onConfirm(commands); } }), confirmButtonLabel)) })));
});
ConfirmDialog.displayName = 'ConfirmDialog';class ErrorBoundary extends Component {
    displayName = "ReactUseErrorBoundary";
    componentDidCatch(...args) {
        this.setState({});
        this.props.onError(...args);
    }
    render() {
        return this.props.children;
    }
}
const noop = () => false;
const errorBoundaryContext = createContext({
    componentDidCatch: { current: undefined },
    error: undefined,
    setError: noop,
});
function ErrorBoundaryContext({ children, }) {
    const [error, setError] = useState();
    const componentDidCatch = useRef();
    const ctx = useMemo(() => ({
        componentDidCatch,
        error,
        setError,
    }), [error]);
    return (React.createElement(errorBoundaryContext.Provider, { value: ctx },
        React.createElement(ErrorBoundary, { error: error, onError: (error, errorInfo) => {
                setError(error);
                componentDidCatch.current?.(error, errorInfo);
            } }, children)));
}
ErrorBoundaryContext.displayName = "ReactUseErrorBoundaryContext";
function withErrorBoundary(WrappedComponent) {
    function WithErrorBoundary(props) {
        return (React.createElement(ErrorBoundaryContext, null,
            React.createElement(WrappedComponent, { key: "WrappedComponent", ...props })));
    }
    WithErrorBoundary.displayName = `WithErrorBoundary(${WrappedComponent.displayName ?? WrappedComponent.name ?? "Component"})`;
    return WithErrorBoundary;
}
function useErrorBoundary(componentDidCatch) {
    const ctx = useContext(errorBoundaryContext);
    ctx.componentDidCatch.current = componentDidCatch;
    const resetError = useCallback(() => {
        ctx.setError(undefined);
    }, []);
    return [ctx.error, resetError];
}var ErrorCatcher = withErrorBoundary(function (_a) {
    var children = _a.children, onError = _a.onError;
    useErrorBoundary(function (error, errorInfo) {
        onError && onError(error, errorInfo);
    });
    return children;
});
var DialogErrorBoundary = function (_a) {
    var onError = _a.onError, children = _a.children;
    return React.createElement(ErrorCatcher, { onError: onError }, children);
};
DialogErrorBoundary.displayName = 'DialogErrorBoundary';var DialogContextProvider = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var children = _a.children;
    var dialogKeyRef = useRef(0);
    var dialogIdsRef = useRef({});
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState([]), dialogs = _b[0], setDialogs = _b[1];
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleShow = useCallback(function (dialog, id, onShow) {
        dialogIdsRef.current[id] = dialog;
        if (onShow)
            onShow(id);
    }, []);
    var handleClose = useCallback(function (id, onClose) {
        var dialog = dialogIdsRef.current[id];
        if (dialog) {
            setDialogs(function (dialogs) {
                var idx = dialogs.indexOf(dialog);
                if (idx > -1) {
                    var newDialogs = __spreadArray([], dialogs, true);
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
    var alertDialog = useCallback(function (props) {
        dialogKeyRef.current += 1;
        var onShow = props.onShow, onClose = props.onClose, otherProps = __rest(props, ["onShow", "onClose"]);
        var dialogId;
        var dialog = (React.createElement(AlertDialog, __assign({ ref: function (commands) {
                if (commands) {
                    dialogId = commands.getId();
                }
            }, key: dialogKeyRef.current }, otherProps, { onShow: function () {
                handleShow(dialog, dialogId, onShow);
            }, onClose: function () {
                handleClose(dialogId, onClose);
            } })));
        setDialogs(function (dialogs) {
            return __spreadArray(__spreadArray([], dialogs, true), [dialog], false);
        });
    }, [handleClose, handleShow]);
    var confirmDialog = useCallback(function (props) {
        dialogKeyRef.current += 1;
        var onShow = props.onShow, onClose = props.onClose, otherProps = __rest(props, ["onShow", "onClose"]);
        var dialogId;
        var dialog = (React.createElement(ConfirmDialog, __assign({ ref: function (commands) {
                if (commands) {
                    dialogId = commands.getId();
                }
            }, key: dialogKeyRef.current }, otherProps, { onShow: function () { return handleShow(dialog, dialogId, onShow); }, onClose: function () { return handleClose(dialogId, onClose); } })));
        setDialogs(function (dialogs) {
            return __spreadArray(__spreadArray([], dialogs, true), [dialog], false);
        });
    }, [handleClose, handleShow]);
    var pushDialog = useCallback(function (dialogComponent, props, onErrorBoundary) {
        dialogKeyRef.current += 1;
        var dialogId = "dig_".concat(dialogKeyRef.current);
        var dialog = (React.createElement(DialogErrorBoundary, { key: dialogKeyRef.current, onError: onErrorBoundary }, React.createElement(dialogComponent, __assign(__assign({}, props), { onShow: function () {
                handleShow(dialog, dialogId, props === null || props === void 0 ? void 0 : props.onShow);
            }, onClose: function () {
                handleClose(dialogId, props === null || props === void 0 ? void 0 : props.onClose);
            } }))));
        setDialogs(function (dialogs) {
            return __spreadArray(__spreadArray([], dialogs, true), [dialog], false);
        });
    }, [handleClose, handleShow]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(DialogContext.Provider, { value: { pushDialog: pushDialog, alertDialog: alertDialog, confirmDialog: confirmDialog } },
        children,
        dialogs));
};var _default = {};
function setDialogDefault(value) {
    _default = value;
}
function getDialogDefault() {
    return _default;
}function useDialog(dialogComponent) {
    var value = useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useDialog should be used within DialogContext.Provider');
    }
    return useCallback(function (props, onErrorBoundary) {
        var dialogDefault = getDialogDefault();
        value.pushDialog(dialogComponent, props, onErrorBoundary || dialogDefault.onBoundaryError);
    }, [value, dialogComponent]);
}function useAlertDialog() {
    var value = useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useAlertDialog should be used within DialogContext.Provider');
    }
    return value.alertDialog;
}function useConfirmDialog() {
    var value = useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useConfirmDialog should be used within DialogContext.Provider');
    }
    return value.confirmDialog;
}export{Dialog,DialogActionButton$1 as DialogActionButton,DialogContextProvider,getDialogDefault,setDialogDefault,useAlertDialog,useConfirmDialog,useDialog};