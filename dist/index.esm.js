import React,{createContext,useState,useRef,useCallback,useEffect,useId,useLayoutEffect,useContext,useMemo,Component}from'react';import {styled,Dialog as Dialog$1,DialogTitle,IconButton,DialogContent,DialogActions,useTheme,Box,Icon,Button,Typography}from'@mui/material';/******************************************************************************
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
}/* eslint-disable */
var DialogContextDefaultValue = {
    pushDialog: function () { },
    alertDialog: function () { },
    confirmDialog: function () { },
};
/* eslint-enable */var DialogContext = createContext(DialogContextDefaultValue);function useFirstSkipEffect(effect, deps) {
    var firstRef = useRef(true);
    useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}var isSame = function (v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i += 1) {
            if (v1[i] !== v2[i])
                return false;
        }
    }
    else {
        return v1 === v2;
    }
    return true;
};function useAutoUpdateState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(0), setUpdateKey = _a[1];
    var _initState = useState(function () {
        return finalStateCallback ? finalStateCallback(state) : state;
    })[0];
    var _state = useRef(_initState);
    var forceUpdate = useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}var AlertDialogDefaultProps = {
    color: 'primary',
    confirmButtonLabel: '확인',
};var DialogDefaultProps = {
    color: 'primary',
};var StyledDialog = styled(Dialog$1)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
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
var StyledDialogContent = styled(DialogContent)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var StyledDialogActions = styled(DialogActions)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-left: 20px;\n  padding-right: 15px;\n"], ["\n  padding-left: 20px;\n  padding-right: 15px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;var Dialog = React.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var commandsRef = _a.commandsRef, content = _a.content, color = _a.color, initTitleIcon = _a.titleIcon, title = _a.title, titleProps = _a.titleProps, actions = _a.actions, hideClose = _a.hideClose, autoClose = _a.autoClose, backdropClose = _a.backdropClose, escapeClose = _a.escapeClose, fullHeight = _a.fullHeight, onShow = _a.onShow, onRequestClose = _a.onRequestClose, onClose = _a.onClose, otherProps = __rest(_a, ["commandsRef", "content", "color", "titleIcon", "title", "titleProps", "actions", "hideClose", "autoClose", "backdropClose", "escapeClose", "fullHeight", "onShow", "onRequestClose", "onClose"]);
    var id = useId();
    // Theme -----------------------------------------------------------------------------------------------------------
    var theme = useTheme();
    // Ref -------------------------------------------------------------------------------------------------------------
    var contentRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var _b = useState(true), open = _b[0], setOpen = _b[1];
    var titleId = useState("dialog-title-".concat(id))[0];
    var titleIcon = useAutoUpdateState(useCallback(function () {
        return initTitleIcon === null || initTitleIcon === void 0 ? void 0 : initTitleIcon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); });
    }, [initTitleIcon]))[0];
    var textColor = useAutoUpdateState(useCallback(function () {
        return theme.palette[color || 'primary'].contrastText;
    }, [theme, color]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (onShow)
            onShow();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Function - close -------------------------------------------------------------------------------------------------
    var close = useCallback(function () {
        setOpen(false);
        setTimeout(function () {
            if (onClose)
                onClose();
        }, theme.transitions.duration.leavingScreen);
    }, [onClose, theme]);
    var scrollToTop = useCallback(function () {
        var _a;
        (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: 0 });
    }, [contentRef]);
    // State - commands ------------------------------------------------------------------------------------------------
    var commands = useAutoUpdateState(useCallback(function () { return ({
        getId: function () { return id; },
        close: close,
        scrollToTop: scrollToTop,
    }); }, [id, close, scrollToTop]))[0];
    // Effect - Commands -----------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        if (commandsRef) {
            if (typeof commandsRef === 'function') {
                commandsRef(commands);
            }
            else {
                commandsRef.current = commands;
            }
        }
        return function () {
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
            if (commandsRef) {
                if (typeof commandsRef === 'function') {
                    commandsRef(undefined);
                }
                else {
                    commandsRef.current = undefined;
                }
            }
        };
    }, [ref, commandsRef, commands]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleClose = useCallback(function (e, reason) {
        switch (reason) {
            case 'backdropClick':
                if (backdropClose) {
                    if (autoClose) {
                        close();
                    }
                    else {
                        if (onRequestClose)
                            onRequestClose();
                    }
                }
                break;
            case 'escapeKeyDown':
                if (escapeClose) {
                    if (autoClose) {
                        close();
                    }
                    else {
                        if (onRequestClose)
                            onRequestClose();
                    }
                }
                break;
        }
    }, [close, autoClose, backdropClose, escapeClose, onRequestClose]);
    var handleCloseClick = useCallback(function () {
        if (autoClose) {
            close();
        }
        else {
            if (onRequestClose)
                onRequestClose();
        }
    }, [autoClose, onRequestClose, close]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React.createElement(StyledDialog, __assign({ className: "color-".concat(color), open: open, "aria-labelledby": titleId, onClose: handleClose }, otherProps),
        title && (React.createElement(StyledDialogTitle, __assign({}, titleProps),
            (titleIcon || title) && (React.createElement(Box, { style: { display: 'flex', fontSize: '17px' } },
                titleIcon && (React.createElement(Box, { style: { display: 'flex', alignItems: 'center', marginRight: 7 } },
                    React.createElement(Icon, { style: { fontSize: '22px' } }, titleIcon))),
                title && React.createElement(Box, { style: { display: 'flex', alignItems: 'center' } }, title))),
            !hideClose && (React.createElement(StyleDialogTitleCloseButton, { className: 'dialog-close-btn', "aria-label": 'close', style: { color: textColor }, onClick: handleCloseClick },
                React.createElement(Icon, null, "close"))))),
        React.createElement(StyledDialogContent, { ref: contentRef, style: {
                height: fullHeight ? '100vh' : undefined,
                paddingBottom: actions ? 15 : undefined,
            } }, content),
        actions && React.createElement(StyledDialogActions, null, actions)));
});
Dialog.displayName = 'Dialog';
Dialog.defaultProps = DialogDefaultProps;var DEFAULT_STYLE = {
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: 0,
};
var DialogActionButton = function (_a) {
    // State -----------------------------------------------------------------------------------------------------------
    var variant = _a.variant, initStyle = _a.style, otherProps = __rest(_a, ["variant", "style"]);
    var style = useAutoUpdateState(useCallback(function () {
        if (initStyle) {
            return __assign({ DEFAULT_STYLE: DEFAULT_STYLE }, initStyle);
        }
        else {
            return DEFAULT_STYLE;
        }
    }, [initStyle]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return React.createElement(Button, __assign({ variant: variant || 'text', style: style }, otherProps));
};var AlertDialog = React.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var initStyle = _a.style, commandsRef = _a.commandsRef, confirmButtonLabel = _a.confirmButtonLabel, confirmButtonProps = _a.confirmButtonProps, onShow = _a.onShow, onClose = _a.onClose, props = __rest(_a, ["style", "commandsRef", "confirmButtonLabel", "confirmButtonProps", "onShow", "onClose"]);
    var dialogRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState(useCallback(function () {
        return { zIndex: 1399, initStyle: initStyle };
    }, [initStyle]))[0];
    // Function - close --------------------------------------------------------------------------------------------------
    var getId = useCallback(function () {
        var _a;
        return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || '';
    }, [dialogRef]);
    var close = useCallback(function () {
        var _a;
        (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close();
    }, [dialogRef]);
    // State - commands --------------------------------------------------------------------------------------------------
    var commands = useAutoUpdateState(useCallback(function () { return ({
        getId: getId,
        close: close,
    }); }, [getId, close]))[0];
    // Commands ----------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands || null);
            }
            else {
                ref.current = commands || null;
            }
        }
        if (commandsRef) {
            if (typeof commandsRef === 'function') {
                commandsRef(commands);
            }
            else {
                commandsRef.current = commands;
            }
        }
        return function () {
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
            if (commandsRef) {
                if (typeof commandsRef === 'function') {
                    commandsRef(undefined);
                }
                else {
                    commandsRef.current = undefined;
                }
            }
        };
    }, [ref, commandsRef, commands]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleShow = useCallback(function () {
        if (onShow)
            onShow();
    }, [onShow]);
    var handleClose = useCallback(function () {
        if (onClose)
            onClose();
    }, [onClose]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React.createElement(Dialog, __assign({ ref: dialogRef, autoClose: true, escapeClose: true, style: style, onShow: handleShow, onClose: handleClose }, props, { actions: React.createElement(DialogActionButton, __assign({ variant: 'text' }, confirmButtonProps, { onClick: close }), confirmButtonLabel) })));
});
AlertDialog.displayName = 'AlertDialog';
AlertDialog.defaultProps = AlertDialogDefaultProps;var ConfirmDialogDefaultProps = {
    color: 'primary',
    confirmButtonLabel: '확인',
    cancelButtonLabel: '취소',
};var ConfirmDialog = React.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var initStyle = _a.style, commandsRef = _a.commandsRef, color = _a.color, confirmButtonLabel = _a.confirmButtonLabel, confirmButtonProps = _a.confirmButtonProps, cancelButtonLabel = _a.cancelButtonLabel, cancelButtonProps = _a.cancelButtonProps, onShow = _a.onShow, onClose = _a.onClose, onConfirm = _a.onConfirm, onCancel = _a.onCancel, props = __rest(_a, ["style", "commandsRef", "color", "confirmButtonLabel", "confirmButtonProps", "cancelButtonLabel", "cancelButtonProps", "onShow", "onClose", "onConfirm", "onCancel"]);
    var dialogRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState(useCallback(function () {
        return { zIndex: 1399, initStyle: initStyle };
    }, [initStyle]))[0];
    // Function - close --------------------------------------------------------------------------------------------------
    var getId = useCallback(function () {
        var _a;
        return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || '';
    }, [dialogRef]);
    var close = useCallback(function () {
        var _a;
        (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close();
    }, [dialogRef]);
    // State - commands --------------------------------------------------------------------------------------------------
    var commands = useAutoUpdateState(useCallback(function () {
        return {
            getId: getId,
            close: close,
        };
    }, [getId, close]))[0];
    // Commands ----------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands || null);
            }
            else {
                ref.current = commands || null;
            }
        }
        if (commandsRef) {
            if (typeof commandsRef === 'function') {
                commandsRef(commands);
            }
            else {
                commandsRef.current = commands;
            }
        }
        return function () {
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
            if (commandsRef) {
                if (typeof commandsRef === 'function') {
                    commandsRef(undefined);
                }
                else {
                    commandsRef.current = undefined;
                }
            }
        };
    }, [ref, commandsRef, commands]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleShow = useCallback(function () {
        if (onShow)
            onShow();
    }, [onShow]);
    var handleClose = useCallback(function () {
        if (onClose)
            onClose();
    }, [onClose]);
    var handleCancelClick = useCallback(function () {
        if (onCancel)
            onCancel(commands);
    }, [commands, onCancel]);
    var handleConfirmClick = useCallback(function () {
        if (onConfirm)
            onConfirm(commands);
    }, [onConfirm, commands]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React.createElement(Dialog, __assign({ ref: dialogRef, color: color, escapeClose: true, style: style, onShow: handleShow, onClose: handleClose, onRequestClose: handleCancelClick }, props, { actions: React.createElement(React.Fragment, null,
            React.createElement(DialogActionButton, __assign({ variant: 'text' }, cancelButtonProps, { onClick: handleCancelClick }),
                React.createElement(Typography, { fontSize: 'inherit', style: { color: '#6f6f6f' } }, cancelButtonLabel)),
            React.createElement(DialogActionButton, __assign({ variant: 'text', color: color }, confirmButtonProps, { onClick: handleConfirmClick }), confirmButtonLabel)) })));
});
ConfirmDialog.displayName = 'ConfirmDialog';
ConfirmDialog.defaultProps = ConfirmDialogDefaultProps;var DialogErrorBoundaryDefaultProps = {};class ErrorBoundary extends Component {
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
DialogErrorBoundary.displayName = 'DialogErrorBoundary';
DialogErrorBoundary.defaultProps = DialogErrorBoundaryDefaultProps;var DialogContextProvider = function (_a) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var children = _a.children;
    var dialogKeyRef = useRef(0);
    // State -------------------------------------------------------------------------------------------------------------
    var _b = useState([]), dialogs = _b[0], setDialogs = _b[1];
    var dialogIds = useState({})[0];
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleShow = useCallback(function (dialog, id, onShow) {
        dialogIds[id] = dialog;
        if (onShow)
            onShow(id);
    }, [dialogIds]);
    var handleClose = useCallback(function (id, onClose) {
        var dialog = dialogIds[id];
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
            delete dialogIds[id];
        }
        if (onClose)
            onClose(id);
    }, [dialogIds]);
    // Function - alertDialog --------------------------------------------------------------------------------------------
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
    // Function - confirmDialog ------------------------------------------------------------------------------------------
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
    // Function - pushDialog ---------------------------------------------------------------------------------------------
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
    // State - value -----------------------------------------------------------------------------------------------------
    var value = useAutoUpdateState(DialogContextDefaultValue, useCallback(function () {
        return { pushDialog: pushDialog, alertDialog: alertDialog, confirmDialog: confirmDialog };
    }, [alertDialog, confirmDialog, pushDialog]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React.createElement(DialogContext.Provider, { value: value },
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
}export{Dialog,DialogActionButton,DialogContextProvider,DialogDefaultProps,getDialogDefault,setDialogDefault,useAlertDialog,useConfirmDialog,useDialog};//# sourceMappingURL=index.esm.js.map
