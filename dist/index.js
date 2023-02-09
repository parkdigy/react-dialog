'use strict';Object.defineProperty(exports,'__esModule',{value:true});var React=require('react'),material=require('@mui/material');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var React__default=/*#__PURE__*/_interopDefaultLegacy(React);/******************************************************************************
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
/* eslint-enable */var DialogContext = React.createContext(DialogContextDefaultValue);function useFirstSkipEffect(effect, deps) {
    var firstRef = React.useRef(true);
    React.useEffect(function () {
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
    var _a = React.useState(0), setUpdateKey = _a[1];
    var _initState = React.useState(function () {
        return finalStateCallback ? finalStateCallback(state) : state;
    })[0];
    var _state = React.useRef(_initState);
    var forceUpdate = React.useCallback(function () {
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
    var setState = React.useCallback(function (newState) {
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
};var StyledDialog = material.styled(material.Dialog)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledDialogTitle = material.styled(material.DialogTitle)(function () { return ({
    position: 'relative',
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
}); });
var StyleDialogTitleCloseButton = material.styled(material.IconButton)(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute',
        right: 8,
        top: 5,
        color: theme.palette.grey[500],
    });
});
var StyledDialogContent = material.styled(material.DialogContent)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var StyledDialogActions = material.styled(material.DialogActions)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-left: 20px;\n  padding-right: 15px;\n"], ["\n  padding-left: 20px;\n  padding-right: 15px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;var Dialog = React__default["default"].forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var commandsRef = _a.commandsRef, content = _a.content, color = _a.color, initTitleIcon = _a.titleIcon, title = _a.title, titleProps = _a.titleProps, actions = _a.actions, hideClose = _a.hideClose, autoClose = _a.autoClose, backdropClose = _a.backdropClose, escapeClose = _a.escapeClose, fullHeight = _a.fullHeight, onShow = _a.onShow, onRequestClose = _a.onRequestClose, onClose = _a.onClose, otherProps = __rest(_a, ["commandsRef", "content", "color", "titleIcon", "title", "titleProps", "actions", "hideClose", "autoClose", "backdropClose", "escapeClose", "fullHeight", "onShow", "onRequestClose", "onClose"]);
    var id = React.useId();
    // Theme -----------------------------------------------------------------------------------------------------------
    var theme = material.useTheme();
    // Ref -------------------------------------------------------------------------------------------------------------
    var contentRef = React.useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var _b = React.useState(true), open = _b[0], setOpen = _b[1];
    var titleId = React.useState("dialog-title-".concat(id))[0];
    var titleIcon = useAutoUpdateState(React.useCallback(function () {
        return initTitleIcon === null || initTitleIcon === void 0 ? void 0 : initTitleIcon.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); });
    }, [initTitleIcon]))[0];
    var textColor = useAutoUpdateState(React.useCallback(function () {
        return theme.palette[color || 'primary'].contrastText;
    }, [color]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    React.useEffect(function () {
        if (onShow)
            onShow();
    }, []);
    // Function - close -------------------------------------------------------------------------------------------------
    var close = React.useCallback(function () {
        setOpen(false);
        setTimeout(function () {
            if (onClose)
                onClose();
        }, theme.transitions.duration.leavingScreen);
    }, [onClose]);
    var scrollToTop = React.useCallback(function () {
        var _a;
        (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: 0 });
    }, [contentRef]);
    // State - commands ------------------------------------------------------------------------------------------------
    var commands = useAutoUpdateState(React.useCallback(function () { return ({
        getId: function () { return id; },
        close: close,
        scrollToTop: scrollToTop,
    }); }, [id, close, scrollToTop]))[0];
    // Effect - Commands -----------------------------------------------------------------------------------------------
    React.useLayoutEffect(function () {
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
    var handleClose = React.useCallback(function (e, reason) {
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
    var handleCloseClick = React.useCallback(function () {
        if (autoClose) {
            close();
        }
        else {
            if (onRequestClose)
                onRequestClose();
        }
    }, [autoClose, onRequestClose, close]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default["default"].createElement(StyledDialog, __assign({ className: "color-".concat(color), open: open, "aria-labelledby": titleId, onClose: handleClose }, otherProps),
        title && (React__default["default"].createElement(StyledDialogTitle, __assign({}, titleProps),
            (titleIcon || title) && (React__default["default"].createElement(material.Box, { style: { display: 'flex', fontSize: '17px' } },
                titleIcon && (React__default["default"].createElement(material.Box, { style: { display: 'flex', alignItems: 'center', marginRight: 7 } },
                    React__default["default"].createElement(material.Icon, { style: { fontSize: '22px' } }, titleIcon))),
                title && React__default["default"].createElement(material.Box, { style: { display: 'flex', alignItems: 'center' } }, title))),
            !hideClose && (React__default["default"].createElement(StyleDialogTitleCloseButton, { className: 'dialog-close-btn', "aria-label": 'close', style: { color: textColor }, onClick: handleCloseClick },
                React__default["default"].createElement(material.Icon, null, "close"))))),
        React__default["default"].createElement(StyledDialogContent, { ref: contentRef, style: {
                height: fullHeight ? '100vh' : undefined,
                paddingBottom: actions ? 15 : undefined,
            } }, content),
        actions && React__default["default"].createElement(StyledDialogActions, null, actions)));
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
    var style = useAutoUpdateState(React.useCallback(function () {
        if (initStyle) {
            return __assign({ DEFAULT_STYLE: DEFAULT_STYLE }, initStyle);
        }
        else {
            return DEFAULT_STYLE;
        }
    }, [initStyle]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return React__default["default"].createElement(material.Button, __assign({ variant: variant || 'text', style: style }, otherProps));
};var AlertDialog = React__default["default"].forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var initStyle = _a.style, commandsRef = _a.commandsRef, confirmButtonLabel = _a.confirmButtonLabel, confirmButtonProps = _a.confirmButtonProps, onShow = _a.onShow, onClose = _a.onClose, props = __rest(_a, ["style", "commandsRef", "confirmButtonLabel", "confirmButtonProps", "onShow", "onClose"]);
    var dialogRef = React.useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState(React.useCallback(function () {
        return { zIndex: 1399, initStyle: initStyle };
    }, [initStyle]))[0];
    // Function - close --------------------------------------------------------------------------------------------------
    var getId = React.useCallback(function () {
        var _a;
        return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || '';
    }, [dialogRef]);
    var close = React.useCallback(function () {
        var _a;
        (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close();
    }, [dialogRef]);
    // State - commands --------------------------------------------------------------------------------------------------
    var commands = useAutoUpdateState(React.useCallback(function () { return ({
        getId: getId,
        close: close,
    }); }, [getId, close]))[0];
    // Commands ----------------------------------------------------------------------------------------------------------
    React.useLayoutEffect(function () {
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
    var handleShow = React.useCallback(function () {
        if (onShow)
            onShow();
    }, [onShow]);
    var handleClose = React.useCallback(function () {
        if (onClose)
            onClose();
    }, [onClose]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default["default"].createElement(Dialog, __assign({ ref: dialogRef, autoClose: true, escapeClose: true, style: style, onShow: handleShow, onClose: handleClose }, props, { actions: React__default["default"].createElement(DialogActionButton, __assign({ variant: 'text' }, confirmButtonProps, { onClick: close }), confirmButtonLabel) })));
});
AlertDialog.displayName = 'AlertDialog';
AlertDialog.defaultProps = AlertDialogDefaultProps;var ConfirmDialogDefaultProps = {
    color: 'primary',
    confirmButtonLabel: '확인',
    cancelButtonLabel: '취소',
};var ConfirmDialog = React__default["default"].forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var initStyle = _a.style, commandsRef = _a.commandsRef, color = _a.color, confirmButtonLabel = _a.confirmButtonLabel, confirmButtonProps = _a.confirmButtonProps, cancelButtonLabel = _a.cancelButtonLabel, cancelButtonProps = _a.cancelButtonProps, onShow = _a.onShow, onClose = _a.onClose, onConfirm = _a.onConfirm, onCancel = _a.onCancel, props = __rest(_a, ["style", "commandsRef", "color", "confirmButtonLabel", "confirmButtonProps", "cancelButtonLabel", "cancelButtonProps", "onShow", "onClose", "onConfirm", "onCancel"]);
    var dialogRef = React.useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState(React.useCallback(function () {
        return { zIndex: 1399, initStyle: initStyle };
    }, [initStyle]))[0];
    // Function - close --------------------------------------------------------------------------------------------------
    var getId = React.useCallback(function () {
        var _a;
        return ((_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.getId()) || '';
    }, [dialogRef]);
    var close = React.useCallback(function () {
        var _a;
        (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close();
    }, [dialogRef]);
    // State - commands --------------------------------------------------------------------------------------------------
    var commands = useAutoUpdateState(React.useCallback(function () {
        return {
            getId: getId,
            close: close,
        };
    }, [getId, close]))[0];
    // Commands ----------------------------------------------------------------------------------------------------------
    React.useLayoutEffect(function () {
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
    var handleShow = React.useCallback(function () {
        if (onShow)
            onShow();
    }, [onShow, commands]);
    var handleClose = React.useCallback(function () {
        if (onClose)
            onClose();
    }, [onClose, commands]);
    var handleCancelClick = React.useCallback(function () {
        if (onCancel)
            onCancel(commands);
    }, []);
    var handleConfirmClick = React.useCallback(function () {
        if (onConfirm)
            onConfirm(commands);
    }, [onConfirm, commands, close]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default["default"].createElement(Dialog, __assign({ ref: dialogRef, color: color, escapeClose: true, style: style, onShow: handleShow, onClose: handleClose, onRequestClose: handleCancelClick }, props, { actions: React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(DialogActionButton, __assign({ variant: 'text' }, cancelButtonProps, { onClick: handleCancelClick }),
                React__default["default"].createElement(material.Typography, { fontSize: 'inherit', style: { color: '#6f6f6f' } }, cancelButtonLabel)),
            React__default["default"].createElement(DialogActionButton, __assign({ variant: 'text', color: color }, confirmButtonProps, { onClick: handleConfirmClick }), confirmButtonLabel)) })));
});
ConfirmDialog.displayName = 'ConfirmDialog';
ConfirmDialog.defaultProps = ConfirmDialogDefaultProps;var DialogContextProvider = function (_a) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var children = _a.children;
    var dialogKeyRef = React.useRef(0);
    // State -------------------------------------------------------------------------------------------------------------
    var _b = React.useState([]), dialogs = _b[0], setDialogs = _b[1];
    var dialogIds = React.useState({})[0];
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleShow = React.useCallback(function (dialog, id, onShow) {
        dialogIds[id] = dialog;
        if (onShow)
            onShow(id);
    }, []);
    var handleClose = React.useCallback(function (id, onClose) {
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
    var alertDialog = React.useCallback(function (props) {
        dialogKeyRef.current += 1;
        var onShow = props.onShow, onClose = props.onClose, otherProps = __rest(props, ["onShow", "onClose"]);
        var dialogId;
        var dialog = (React__default["default"].createElement(AlertDialog, __assign({ ref: function (commands) {
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
    }, []);
    // Function - confirmDialog ------------------------------------------------------------------------------------------
    var confirmDialog = React.useCallback(function (props) {
        dialogKeyRef.current += 1;
        var onShow = props.onShow, onClose = props.onClose, otherProps = __rest(props, ["onShow", "onClose"]);
        var dialogId;
        var dialog = (React__default["default"].createElement(ConfirmDialog, __assign({ ref: function (commands) {
                if (commands) {
                    dialogId = commands.getId();
                }
            }, key: dialogKeyRef.current }, otherProps, { onShow: function () { return handleShow(dialog, dialogId, onShow); }, onClose: function () { return handleClose(dialogId, onClose); } })));
        setDialogs(function (dialogs) {
            return __spreadArray(__spreadArray([], dialogs, true), [dialog], false);
        });
    }, []);
    // Function - pushDialog ---------------------------------------------------------------------------------------------
    var pushDialog = React.useCallback(function (dialogComponent, props) {
        dialogKeyRef.current += 1;
        var dialogId = "dig_".concat(dialogKeyRef.current);
        var dialog = React__default["default"].createElement(dialogComponent, __assign(__assign({ key: dialogKeyRef.current }, props), { onShow: function () {
                handleShow(dialog, dialogId, props === null || props === void 0 ? void 0 : props.onShow);
            }, onClose: function () {
                handleClose(dialogId, props === null || props === void 0 ? void 0 : props.onClose);
            } }));
        setDialogs(function (dialogs) {
            return __spreadArray(__spreadArray([], dialogs, true), [dialog], false);
        });
    }, []);
    // State - value -----------------------------------------------------------------------------------------------------
    var value = useAutoUpdateState(DialogContextDefaultValue, React.useCallback(function () {
        return { pushDialog: pushDialog, alertDialog: alertDialog, confirmDialog: confirmDialog };
    }, [alertDialog]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default["default"].createElement(DialogContext.Provider, { value: value },
        children,
        dialogs));
};function useDialog(dialogComponent) {
    var value = React.useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useDialog should be used within DialogContext.Provider');
    }
    return React.useCallback(function (props) {
        value.pushDialog(dialogComponent, props);
    }, [value, dialogComponent]);
}function useAlertDialog() {
    var value = React.useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useAlertDialog should be used within DialogContext.Provider');
    }
    return value.alertDialog;
}function useConfirmDialog() {
    var value = React.useContext(DialogContext);
    if (value === undefined) {
        throw new Error('useConfirmDialog should be used within DialogContext.Provider');
    }
    return value.confirmDialog;
}exports.Dialog=Dialog;exports.DialogActionButton=DialogActionButton;exports.DialogContextProvider=DialogContextProvider;exports.DialogDefaultProps=DialogDefaultProps;exports.useAlertDialog=useAlertDialog;exports.useConfirmDialog=useConfirmDialog;exports.useDialog=useDialog;//# sourceMappingURL=index.js.map
