'use strict';var compilerRuntime=require('react/compiler-runtime'),React=require('react'),material=require('@mui/material'),reactHook=require('@pdg/react-hook'),reactUseErrorBoundary=require('react-use-error-boundary');function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}var DialogContext = /*#__PURE__*/React.createContext({});var _templateObject$1, _templateObject2, _templateObject3;
var _excluded$4 = ["ref", "content", "contentProps", "color", "titleIcon", "title", "titleProps", "subTitle", "actions", "margin", "hideClose", "autoClose", "backdropClose", "escapeClose", "fullHeight", "disableEnforceFocus", "onShow", "onRequestClose", "onClose", "onCommands"];
var __disableEnforceFocusListeners = [];
var Dialog = function Dialog(t0) {
  var _titleProps$style$bac, _titleProps, _titleProps$style$col, _titleProps2, _contentProps;
  var $ = compilerRuntime.c(91);
  var actions;
  var autoClose;
  var backdropClose;
  var content;
  var contentProps;
  var escapeClose;
  var fullHeight;
  var hideClose;
  var initDisableEnforceFocus;
  var initOnClose;
  var initOnRequestClose;
  var initTitleIcon;
  var onCommands;
  var onShow;
  var otherProps;
  var ref;
  var subTitle;
  var t1;
  var t2;
  var title;
  var titleProps;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    content = _t.content;
    contentProps = _t.contentProps;
    t1 = _t.color;
    initTitleIcon = _t.titleIcon;
    title = _t.title;
    titleProps = _t.titleProps;
    subTitle = _t.subTitle;
    actions = _t.actions;
    t2 = _t.margin;
    hideClose = _t.hideClose;
    autoClose = _t.autoClose;
    backdropClose = _t.backdropClose;
    escapeClose = _t.escapeClose;
    fullHeight = _t.fullHeight;
    initDisableEnforceFocus = _t.disableEnforceFocus;
    onShow = _t.onShow;
    initOnRequestClose = _t.onRequestClose;
    initOnClose = _t.onClose;
    onCommands = _t.onCommands;
    otherProps = _objectWithoutProperties(_t, _excluded$4);
    $[0] = t0;
    $[1] = actions;
    $[2] = autoClose;
    $[3] = backdropClose;
    $[4] = content;
    $[5] = contentProps;
    $[6] = escapeClose;
    $[7] = fullHeight;
    $[8] = hideClose;
    $[9] = initDisableEnforceFocus;
    $[10] = initOnClose;
    $[11] = initOnRequestClose;
    $[12] = initTitleIcon;
    $[13] = onCommands;
    $[14] = onShow;
    $[15] = otherProps;
    $[16] = ref;
    $[17] = subTitle;
    $[18] = t1;
    $[19] = t2;
    $[20] = title;
    $[21] = titleProps;
  } else {
    actions = $[1];
    autoClose = $[2];
    backdropClose = $[3];
    content = $[4];
    contentProps = $[5];
    escapeClose = $[6];
    fullHeight = $[7];
    hideClose = $[8];
    initDisableEnforceFocus = $[9];
    initOnClose = $[10];
    initOnRequestClose = $[11];
    initTitleIcon = $[12];
    onCommands = $[13];
    onShow = $[14];
    otherProps = $[15];
    ref = $[16];
    subTitle = $[17];
    t1 = $[18];
    t2 = $[19];
    title = $[20];
    titleProps = $[21];
  }
  var color = t1 === undefined ? "primary" : t1;
  var margin = t2 === undefined ? 32 : t2;
  var id = React.useId();
  var theme = material.useTheme();
  var onShowRef = React.useRef(onShow);
  var contentRef = React.useRef(null);
  var onRequestCloseRef = reactHook.useAutoUpdateRef(initOnRequestClose);
  var onCloseRef = reactHook.useAutoUpdateRef(initOnClose);
  var _useState = React.useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useAutoUpdateState = reactHook.useAutoUpdateState(initDisableEnforceFocus),
    _useAutoUpdateState2 = _slicedToArray(_useAutoUpdateState, 2),
    disableEnforceFocus = _useAutoUpdateState2[0],
    setDisableEnforceFocus = _useAutoUpdateState2[1];
  var t3;
  if ($[22] !== initTitleIcon) {
    var _initTitleIcon;
    t3 = (_initTitleIcon = initTitleIcon) === null || _initTitleIcon === void 0 ? void 0 : _initTitleIcon.replace(/[A-Z]/g, _temp);
    $[22] = initTitleIcon;
    $[23] = t3;
  } else {
    t3 = $[23];
  }
  var titleIcon = t3;
  var t4 = (_titleProps$style$bac = (_titleProps = titleProps) === null || _titleProps === void 0 || (_titleProps = _titleProps.style) === null || _titleProps === void 0 ? void 0 : _titleProps.backgroundColor) !== null && _titleProps$style$bac !== void 0 ? _titleProps$style$bac : theme.palette[color].main;
  var t5 = (_titleProps$style$col = (_titleProps2 = titleProps) === null || _titleProps2 === void 0 || (_titleProps2 = _titleProps2.style) === null || _titleProps2 === void 0 ? void 0 : _titleProps2.color) !== null && _titleProps$style$col !== void 0 ? _titleProps$style$col : theme.palette[color].contrastText;
  var t6;
  if ($[24] !== t4 || $[25] !== t5) {
    t6 = {
      backgroundColor: t4,
      color: t5
    };
    $[24] = t4;
    $[25] = t5;
    $[26] = t6;
  } else {
    t6 = $[26];
  }
  var titleStyle = t6;
  var t7 = title ? 23 : undefined;
  var t8 = actions ? 15 : undefined;
  var t9 = (_contentProps = contentProps) === null || _contentProps === void 0 ? void 0 : _contentProps.style;
  var t10;
  if ($[27] !== t7 || $[28] !== t8 || $[29] !== t9) {
    t10 = _objectSpread2({
      paddingTop: t7,
      paddingBottom: t8
    }, t9);
    $[27] = t7;
    $[28] = t8;
    $[29] = t9;
    $[30] = t10;
  } else {
    t10 = $[30];
  }
  var t11;
  if ($[31] !== contentProps || $[32] !== t10) {
    t11 = _objectSpread2(_objectSpread2({}, contentProps), {}, {
      style: t10
    });
    $[31] = contentProps;
    $[32] = t10;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  var finalContentProps = t11;
  var t12;
  var t13;
  if ($[34] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12() {
      var _onShowRef$current;
      (_onShowRef$current = onShowRef.current) === null || _onShowRef$current === void 0 || _onShowRef$current.call(onShowRef);
    };
    t13 = [];
    $[34] = t12;
    $[35] = t13;
  } else {
    t12 = $[34];
    t13 = $[35];
  }
  React.useEffect(t12, t13);
  var t14;
  var t15;
  if ($[36] !== initDisableEnforceFocus || $[37] !== setDisableEnforceFocus) {
    t14 = function t14() {
      if (initDisableEnforceFocus === undefined) {
        var handler = function handler(disabled) {
          setDisableEnforceFocus(disabled);
        };
        __disableEnforceFocusListeners.push(handler);
        return function () {
          __disableEnforceFocusListeners = __disableEnforceFocusListeners.filter(function (l) {
            return l !== handler;
          });
        };
      }
    };
    t15 = [initDisableEnforceFocus, setDisableEnforceFocus];
    $[36] = initDisableEnforceFocus;
    $[37] = setDisableEnforceFocus;
    $[38] = t14;
    $[39] = t15;
  } else {
    t14 = $[38];
    t15 = $[39];
  }
  React.useEffect(t14, t15);
  var t16;
  if ($[40] !== onCloseRef || $[41] !== theme.transitions.duration.leavingScreen) {
    t16 = function t16() {
      setOpen(false);
      setTimeout(function () {
        onCloseRef.current && onCloseRef.current();
      }, theme.transitions.duration.leavingScreen);
    };
    $[40] = onCloseRef;
    $[41] = theme.transitions.duration.leavingScreen;
    $[42] = t16;
  } else {
    t16 = $[42];
  }
  var close = t16;
  var t17;
  if ($[43] !== id) {
    t17 = function t17() {
      return id;
    };
    $[43] = id;
    $[44] = t17;
  } else {
    t17 = $[44];
  }
  var t18;
  if ($[45] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18() {
      var _contentRef$current;
      return (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.scrollTo({
        top: 0
      });
    };
    $[45] = t18;
  } else {
    t18 = $[45];
  }
  var t19;
  if ($[46] !== close || $[47] !== t17) {
    t19 = {
      getId: t17,
      close: close,
      scrollToTop: t18
    };
    $[46] = close;
    $[47] = t17;
    $[48] = t19;
  } else {
    t19 = $[48];
  }
  var commands = t19;
  var t20;
  if ($[49] !== commands) {
    t20 = function t20() {
      return commands;
    };
    $[49] = commands;
    $[50] = t20;
  } else {
    t20 = $[50];
  }
  React.useImperativeHandle(ref, t20);
  var t21;
  var t22;
  if ($[51] !== commands || $[52] !== onCommands) {
    t21 = function t21() {
      onCommands && onCommands(commands);
    };
    t22 = [commands, onCommands];
    $[51] = commands;
    $[52] = onCommands;
    $[53] = t21;
    $[54] = t22;
  } else {
    t21 = $[53];
    t22 = $[54];
  }
  React.useLayoutEffect(t21, t22);
  var t23;
  if ($[55] !== autoClose || $[56] !== backdropClose || $[57] !== close || $[58] !== escapeClose || $[59] !== onRequestCloseRef) {
    t23 = function t23(_, reason) {
      bb96: switch (reason) {
        case "backdropClick":
          {
            if (backdropClose) {
              if (autoClose) {
                close();
              } else {
                onRequestCloseRef.current && onRequestCloseRef.current();
              }
            }
            break bb96;
          }
        case "escapeKeyDown":
          {
            if (escapeClose) {
              if (autoClose) {
                close();
              } else {
                onRequestCloseRef.current && onRequestCloseRef.current();
              }
            }
          }
      }
    };
    $[55] = autoClose;
    $[56] = backdropClose;
    $[57] = close;
    $[58] = escapeClose;
    $[59] = onRequestCloseRef;
    $[60] = t23;
  } else {
    t23 = $[60];
  }
  var handleClose = t23;
  var t24;
  if ($[61] !== autoClose || $[62] !== close || $[63] !== onRequestCloseRef) {
    t24 = function t24() {
      if (autoClose) {
        close();
      } else {
        onRequestCloseRef.current && onRequestCloseRef.current();
      }
    };
    $[61] = autoClose;
    $[62] = close;
    $[63] = onRequestCloseRef;
    $[64] = t24;
  } else {
    t24 = $[64];
  }
  var handleCloseClick = t24;
  var t25 = "".concat(fullHeight ? "Dialog-full-height" : "");
  var t26 = "dialog-title-".concat(id);
  var t27;
  if ($[65] !== color || $[66] !== handleCloseClick || $[67] !== hideClose || $[68] !== subTitle || $[69] !== theme.palette || $[70] !== title || $[71] !== titleIcon || $[72] !== titleProps || $[73] !== titleStyle) {
    t27 = title && /*#__PURE__*/React.createElement(StyledDialogTitle, _extends({
      style: titleStyle
    }, titleProps), (titleIcon || title) && /*#__PURE__*/React.createElement(material.Box, {
      display: "flex",
      fontSize: 17
    }, titleIcon && /*#__PURE__*/React.createElement(material.Box, {
      display: "flex",
      alignItems: "center",
      marginRight: "7px"
    }, /*#__PURE__*/React.createElement(material.Icon, {
      style: {
        fontSize: "22px"
      }
    }, titleIcon)), title && /*#__PURE__*/React.createElement(material.Box, {
      display: "flex",
      alignItems: "center"
    }, title, subTitle && /*#__PURE__*/React.createElement("div", {
      className: "Dialog-SubTitle"
    }, "\xA0-\xA0", subTitle))), !hideClose && /*#__PURE__*/React.createElement(StyleDialogTitleCloseButton, {
      className: "dialog-close-btn",
      "aria-label": "close",
      style: {
        color: theme.palette[color || "primary"].contrastText
      },
      onClick: handleCloseClick
    }, /*#__PURE__*/React.createElement(material.Icon, null, "close")));
    $[65] = color;
    $[66] = handleCloseClick;
    $[67] = hideClose;
    $[68] = subTitle;
    $[69] = theme.palette;
    $[70] = title;
    $[71] = titleIcon;
    $[72] = titleProps;
    $[73] = titleStyle;
    $[74] = t27;
  } else {
    t27 = $[74];
  }
  var t28;
  if ($[75] !== content || $[76] !== finalContentProps) {
    t28 = /*#__PURE__*/React.createElement(StyledDialogContent, _extends({
      ref: contentRef
    }, finalContentProps), content);
    $[75] = content;
    $[76] = finalContentProps;
    $[77] = t28;
  } else {
    t28 = $[77];
  }
  var t29;
  if ($[78] !== actions) {
    t29 = actions && /*#__PURE__*/React.createElement(StyledDialogActions, null, actions);
    $[78] = actions;
    $[79] = t29;
  } else {
    t29 = $[79];
  }
  var t30;
  if ($[80] !== disableEnforceFocus || $[81] !== handleClose || $[82] !== margin || $[83] !== open || $[84] !== otherProps || $[85] !== t25 || $[86] !== t26 || $[87] !== t27 || $[88] !== t28 || $[89] !== t29) {
    t30 = /*#__PURE__*/React.createElement(StyledDialog, _extends({
      className: t25,
      open: open,
      "data-margin": margin,
      "aria-labelledby": t26,
      disableEnforceFocus: disableEnforceFocus,
      onClose: handleClose
    }, otherProps), t27, t28, t29);
    $[80] = disableEnforceFocus;
    $[81] = handleClose;
    $[82] = margin;
    $[83] = open;
    $[84] = otherProps;
    $[85] = t25;
    $[86] = t26;
    $[87] = t27;
    $[88] = t28;
    $[89] = t29;
    $[90] = t30;
  } else {
    t30 = $[90];
  }
  return t30;
};
Dialog.setDisableEnforceFocus = function (disabled) {
  __disableEnforceFocusListeners.forEach(function (listener) {
    return listener(disabled);
  });
};

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

var StyledDialog = material.styled(material.Dialog)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  &.Dialog-full-height {\n    > .MuiDialog-container > .MuiDialog-paper {\n      height: 100vh;\n    }\n  }\n  > .MuiDialog-container > .MuiDialog-paper:not(.MuiDialog-paperFullScreen) {\n    width: calc(100% - ", "px);\n    max-height: calc(100% - ", "px);\n    margin: 0;\n  }\n"])), function (props) {
  return props['data-margin'] * 2;
}, function (props) {
  return props['data-margin'] * 2;
});
var StyledDialogTitle = material.styled(material.DialogTitle)(function () {
  return {
    position: 'relative',
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%'
  };
});
var StyleDialogTitleCloseButton = material.styled(material.IconButton)(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'absolute',
    right: 8,
    top: 5,
    color: theme.palette.grey[500]
  };
});
var StyledDialogContent = material.styled(material.DialogContent)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"])));
var StyledDialogActions = material.styled(material.DialogActions)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding-left: 20px;\n  padding-right: 15px;\n"])));
function _temp(letter, idx) {
  return "".concat(idx > 0 ? "_" : "").concat(letter.toLowerCase());
}var _templateObject;
var _excluded$3 = ["variant"];
var DialogActionButton = function DialogActionButton(t0) {
  var $ = compilerRuntime.c(6);
  var otherProps;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    variant = _t.variant;
    otherProps = _objectWithoutProperties(_t, _excluded$3);
    $[0] = t0;
    $[1] = otherProps;
    $[2] = variant;
  } else {
    otherProps = $[1];
    variant = $[2];
  }
  var t1 = variant || "text";
  var t2;
  if ($[3] !== otherProps || $[4] !== t1) {
    t2 = /*#__PURE__*/React.createElement(StyledButton, _extends({
      variant: t1
    }, otherProps));
    $[3] = otherProps;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
};

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

var StyledButton = material.styled(material.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  min-width: 0;\n"])));var _excluded$2 = ["ref", "color", "style", "maxWidth", "confirmButtonLabel", "confirmButtonProps", "onCommands"];
var AlertDialog = function AlertDialog(t0) {
  var $ = compilerRuntime.c(26);
  var confirmButtonProps;
  var onCommands;
  var props;
  var ref;
  var style;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    t1 = _t.color;
    style = _t.style;
    t2 = _t.maxWidth;
    t3 = _t.confirmButtonLabel;
    confirmButtonProps = _t.confirmButtonProps;
    onCommands = _t.onCommands;
    props = _objectWithoutProperties(_t, _excluded$2);
    $[0] = t0;
    $[1] = confirmButtonProps;
    $[2] = onCommands;
    $[3] = props;
    $[4] = ref;
    $[5] = style;
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
  } else {
    confirmButtonProps = $[1];
    onCommands = $[2];
    props = $[3];
    ref = $[4];
    style = $[5];
    t1 = $[6];
    t2 = $[7];
    t3 = $[8];
  }
  var color = t1 === undefined ? "primary" : t1;
  var maxWidth = t2 === undefined ? "xs" : t2;
  var confirmButtonLabel = t3 === undefined ? "\uD655\uC778" : t3;
  var dialogRef = React.useRef(null);
  var t4;
  if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = {
      getId: function getId() {
        var _dialogRef$current;
        return ((_dialogRef$current = dialogRef.current) === null || _dialogRef$current === void 0 ? void 0 : _dialogRef$current.getId()) || "";
      },
      close: function close() {
        var _dialogRef$current2;
        return (_dialogRef$current2 = dialogRef.current) === null || _dialogRef$current2 === void 0 ? void 0 : _dialogRef$current2.close();
      }
    };
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var commands = t4;
  var t5;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      return commands;
    };
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  React.useImperativeHandle(ref, t5);
  var t6;
  var t7;
  if ($[11] !== onCommands) {
    t6 = function t6() {
      var _onCommands;
      (_onCommands = onCommands) === null || _onCommands === void 0 || _onCommands(commands);
    };
    t7 = [commands, onCommands];
    $[11] = onCommands;
    $[12] = t6;
    $[13] = t7;
  } else {
    t6 = $[12];
    t7 = $[13];
  }
  React.useLayoutEffect(t6, t7);
  var t8;
  if ($[14] !== style) {
    t8 = _objectSpread2({
      zIndex: 1399
    }, style);
    $[14] = style;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  var t9;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9() {
      var _dialogRef$current3;
      return (_dialogRef$current3 = dialogRef.current) === null || _dialogRef$current3 === void 0 ? void 0 : _dialogRef$current3.close();
    };
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var t10;
  if ($[17] !== confirmButtonLabel || $[18] !== confirmButtonProps) {
    t10 = /*#__PURE__*/React.createElement(DialogActionButton, _extends({
      variant: "text"
    }, confirmButtonProps, {
      onClick: t9
    }), confirmButtonLabel);
    $[17] = confirmButtonLabel;
    $[18] = confirmButtonProps;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  var t11;
  if ($[20] !== color || $[21] !== maxWidth || $[22] !== props || $[23] !== t10 || $[24] !== t8) {
    t11 = /*#__PURE__*/React.createElement(Dialog, _extends({
      ref: dialogRef,
      color: color,
      autoClose: true,
      escapeClose: true,
      maxWidth: maxWidth,
      style: t8
    }, props, {
      actions: t10
    }));
    $[20] = color;
    $[21] = maxWidth;
    $[22] = props;
    $[23] = t10;
    $[24] = t8;
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  return t11;
};var _excluded$1 = ["ref", "type", "content", "style", "maxWidth", "confirmButtonLabel", "confirmButtonProps", "cancelButtonLabel", "cancelButtonProps", "onShow", "onClose", "onConfirm", "onCancel", "onCommands"];
var ConfirmDialog = function ConfirmDialog(t0) {
  var $ = compilerRuntime.c(60);
  var cancelButtonProps;
  var confirmButtonProps;
  var content;
  var initStyle;
  var onCancel;
  var onClose;
  var onCommands;
  var onConfirm;
  var onShow;
  var props;
  var ref;
  var t1;
  var t2;
  var t3;
  var t4;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    t1 = _t.type;
    content = _t.content;
    initStyle = _t.style;
    t2 = _t.maxWidth;
    t3 = _t.confirmButtonLabel;
    confirmButtonProps = _t.confirmButtonProps;
    t4 = _t.cancelButtonLabel;
    cancelButtonProps = _t.cancelButtonProps;
    onShow = _t.onShow;
    onClose = _t.onClose;
    onConfirm = _t.onConfirm;
    onCancel = _t.onCancel;
    onCommands = _t.onCommands;
    props = _objectWithoutProperties(_t, _excluded$1);
    $[0] = t0;
    $[1] = cancelButtonProps;
    $[2] = confirmButtonProps;
    $[3] = content;
    $[4] = initStyle;
    $[5] = onCancel;
    $[6] = onClose;
    $[7] = onCommands;
    $[8] = onConfirm;
    $[9] = onShow;
    $[10] = props;
    $[11] = ref;
    $[12] = t1;
    $[13] = t2;
    $[14] = t3;
    $[15] = t4;
  } else {
    cancelButtonProps = $[1];
    confirmButtonProps = $[2];
    content = $[3];
    initStyle = $[4];
    onCancel = $[5];
    onClose = $[6];
    onCommands = $[7];
    onConfirm = $[8];
    onShow = $[9];
    props = $[10];
    ref = $[11];
    t1 = $[12];
    t2 = $[13];
    t3 = $[14];
    t4 = $[15];
  }
  var type = t1 === undefined ? "default" : t1;
  var maxWidth = t2 === undefined ? "xs" : t2;
  var confirmButtonLabel = t3 === undefined ? "\uD655\uC778" : t3;
  var cancelButtonLabel = t4 === undefined ? "\uCDE8\uC18C" : t4;
  var theme = material.useTheme();
  var dialogRef = React.useRef(null);
  var color;
  var textColor;
  bb0: switch (type) {
    case "primary":
      {
        color = "info";
        textColor = theme.palette.primary.main;
        break bb0;
      }
    case "secondary":
      {
        color = "secondary";
        textColor = theme.palette.secondary.main;
        break bb0;
      }
    case "info":
      {
        color = "info";
        textColor = theme.palette.info.main;
        break bb0;
      }
    case "success":
      {
        color = "success";
        textColor = theme.palette.success.main;
        break bb0;
      }
    case "warning":
      {
        color = "warning";
        textColor = theme.palette.warning.main;
        break bb0;
      }
    case "error":
      {
        color = "error";
        textColor = theme.palette.error.main;
        break bb0;
      }
    default:
      {
        color = "primary";
        textColor = theme.palette.text.primary;
      }
  }
  var t5;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {
      getId: function getId() {
        var _dialogRef$current;
        return ((_dialogRef$current = dialogRef.current) === null || _dialogRef$current === void 0 ? void 0 : _dialogRef$current.getId()) || "";
      },
      close: function close() {
        var _dialogRef$current2;
        return (_dialogRef$current2 = dialogRef.current) === null || _dialogRef$current2 === void 0 ? void 0 : _dialogRef$current2.close();
      }
    };
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  var commands = t5;
  var t6;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6() {
      return commands;
    };
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  React.useImperativeHandle(ref, t6);
  var t7;
  var t8;
  if ($[18] !== onCommands) {
    t7 = function t7() {
      onCommands && onCommands(commands);
    };
    t8 = [commands, onCommands];
    $[18] = onCommands;
    $[19] = t7;
    $[20] = t8;
  } else {
    t7 = $[19];
    t8 = $[20];
  }
  React.useLayoutEffect(t7, t8);
  var t9;
  if ($[21] !== initStyle) {
    t9 = _objectSpread2({
      zIndex: 1399
    }, initStyle);
    $[21] = initStyle;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  var t10;
  if ($[23] !== onShow) {
    t10 = function t10() {
      return onShow && onShow();
    };
    $[23] = onShow;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  var t11;
  if ($[25] !== onClose) {
    t11 = function t11() {
      return onClose && onClose();
    };
    $[25] = onClose;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  var t12;
  if ($[27] !== onCancel) {
    t12 = function t12() {
      return onCancel && onCancel(commands);
    };
    $[27] = onCancel;
    $[28] = t12;
  } else {
    t12 = $[28];
  }
  var t13;
  if ($[29] !== content || $[30] !== textColor) {
    t13 = /*#__PURE__*/React.createElement(material.Box, {
      textAlign: "center",
      py: 2,
      fontSize: 14,
      color: textColor
    }, content);
    $[29] = content;
    $[30] = textColor;
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  var t14;
  if ($[32] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = {
      flex: 1,
      color: "#fff",
      backgroundColor: "#9f9f9f"
    };
    $[32] = t14;
  } else {
    t14 = $[32];
  }
  var t15;
  if ($[33] !== onCancel) {
    t15 = function t15() {
      return onCancel && onCancel(commands);
    };
    $[33] = onCancel;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  var t16;
  if ($[35] !== cancelButtonLabel || $[36] !== cancelButtonProps || $[37] !== t15) {
    t16 = /*#__PURE__*/React.createElement(DialogActionButton, _extends({
      variant: "contained",
      size: "large",
      style: t14
    }, cancelButtonProps, {
      onClick: t15
    }), cancelButtonLabel);
    $[35] = cancelButtonLabel;
    $[36] = cancelButtonProps;
    $[37] = t15;
    $[38] = t16;
  } else {
    t16 = $[38];
  }
  var t17;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t17 = {
      flex: 1
    };
    $[39] = t17;
  } else {
    t17 = $[39];
  }
  var t18;
  if ($[40] !== onConfirm) {
    t18 = function t18() {
      return onConfirm && onConfirm(commands);
    };
    $[40] = onConfirm;
    $[41] = t18;
  } else {
    t18 = $[41];
  }
  var t19;
  if ($[42] !== color || $[43] !== confirmButtonLabel || $[44] !== confirmButtonProps || $[45] !== t18) {
    t19 = /*#__PURE__*/React.createElement(DialogActionButton, _extends({
      variant: "contained",
      size: "large",
      color: color,
      style: t17
    }, confirmButtonProps, {
      onClick: t18
    }), confirmButtonLabel);
    $[42] = color;
    $[43] = confirmButtonLabel;
    $[44] = confirmButtonProps;
    $[45] = t18;
    $[46] = t19;
  } else {
    t19 = $[46];
  }
  var t20;
  if ($[47] !== t16 || $[48] !== t19) {
    t20 = /*#__PURE__*/React.createElement(React.Fragment, null, t16, t19);
    $[47] = t16;
    $[48] = t19;
    $[49] = t20;
  } else {
    t20 = $[49];
  }
  var t21;
  if ($[50] !== color || $[51] !== maxWidth || $[52] !== props || $[53] !== t10 || $[54] !== t11 || $[55] !== t12 || $[56] !== t13 || $[57] !== t20 || $[58] !== t9) {
    t21 = /*#__PURE__*/React.createElement(Dialog, _extends({
      ref: dialogRef,
      maxWidth: maxWidth,
      color: color,
      escapeClose: true,
      style: t9,
      onShow: t10,
      onClose: t11,
      onRequestClose: t12
    }, props, {
      content: t13,
      actions: t20
    }));
    $[50] = color;
    $[51] = maxWidth;
    $[52] = props;
    $[53] = t10;
    $[54] = t11;
    $[55] = t12;
    $[56] = t13;
    $[57] = t20;
    $[58] = t9;
    $[59] = t21;
  } else {
    t21 = $[59];
  }
  return t21;
};var ErrorCatcher = reactUseErrorBoundary.withErrorBoundary(function (_ref) {
  var children = _ref.children,
    onError = _ref.onError;
  var _useErrorBoundary = reactUseErrorBoundary.useErrorBoundary(function (error, errorInfo) {
      onError && onError(error, errorInfo);
    });
    _slicedToArray(_useErrorBoundary, 1);
  return children;
});
var DialogErrorBoundary = function DialogErrorBoundary(t0) {
  var $ = compilerRuntime.c(3);
  var onError = t0.onError,
    children = t0.children;
  var t1;
  if ($[0] !== children || $[1] !== onError) {
    t1 = /*#__PURE__*/React.createElement(ErrorCatcher, {
      onError: onError
    }, children);
    $[0] = children;
    $[1] = onError;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
};var _excluded = ["onShow", "onClose"],
  _excluded2 = ["onShow", "onClose"];
var DialogContextProvider = function DialogContextProvider(t0) {
  var $ = compilerRuntime.c(11);
  var children = t0.children;
  var dialogKeyRef = React.useRef(0);
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {};
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var dialogIdsRef = React.useRef(t1);
  var t2;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = [];
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var _useState = React.useState(t2),
    _useState2 = _slicedToArray(_useState, 2),
    dialogs = _useState2[0],
    setDialogs = _useState2[1];
  var t3;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3(dialog, id, onShow) {
      dialogIdsRef.current[id] = dialog;
      onShow === null || onShow === void 0 || onShow(id);
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  var handleShow = t3;
  var t4;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4(id_0, onClose) {
      var dialog_0 = dialogIdsRef.current[id_0];
      if (dialog_0) {
        setDialogs(function (dialogs_0) {
          var idx = dialogs_0.indexOf(dialog_0);
          if (idx > -1) {
            var newDialogs = _toConsumableArray(dialogs_0);
            newDialogs.splice(idx, 1);
            return newDialogs;
          } else {
            return dialogs_0;
          }
        });
        delete dialogIdsRef.current[id_0];
      }
      onClose === null || onClose === void 0 || onClose(id_0);
    };
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  var handleClose = t4;
  var t5;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5(props) {
      dialogKeyRef.current = dialogKeyRef.current + 1;
      var onShow_0 = props.onShow,
        onClose_0 = props.onClose,
        otherProps = _objectWithoutProperties(props, _excluded);
      var dialogId;
      var dialog_1 = /*#__PURE__*/React.createElement(AlertDialog, _extends({
        ref: function ref(commands) {
          if (commands) {
            dialogId = commands.getId();
          }
        },
        key: dialogKeyRef.current
      }, otherProps, {
        onShow: function onShow() {
          handleShow(dialog_1, dialogId, onShow_0);
        },
        onClose: function onClose() {
          handleClose(dialogId, onClose_0);
        }
      }));
      setDialogs(function (dialogs_1) {
        return [].concat(_toConsumableArray(dialogs_1), [dialog_1]);
      });
    };
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  var alertDialog = t5;
  var t6;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6(props_0) {
      dialogKeyRef.current = dialogKeyRef.current + 1;
      var onShow_1 = props_0.onShow,
        onClose_1 = props_0.onClose,
        otherProps_0 = _objectWithoutProperties(props_0, _excluded2);
      var dialogId_0;
      var dialog_2 = /*#__PURE__*/React.createElement(ConfirmDialog, _extends({
        ref: function ref(commands_0) {
          if (commands_0) {
            dialogId_0 = commands_0.getId();
          }
        },
        key: dialogKeyRef.current
      }, otherProps_0, {
        onShow: function onShow() {
          return handleShow(dialog_2, dialogId_0, onShow_1);
        },
        onClose: function onClose() {
          return handleClose(dialogId_0, onClose_1);
        }
      }));
      setDialogs(function (dialogs_2) {
        return [].concat(_toConsumableArray(dialogs_2), [dialog_2]);
      });
    };
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var confirmDialog = t6;
  var t7;
  if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7(dialogComponent, props_1, onErrorBoundary) {
      dialogKeyRef.current = dialogKeyRef.current + 1;
      var dialogId_1 = "dig_".concat(dialogKeyRef.current);
      var dialog_3 = /*#__PURE__*/React.createElement(DialogErrorBoundary, {
        key: dialogKeyRef.current,
        onError: onErrorBoundary
      }, /*#__PURE__*/React.createElement(dialogComponent, _objectSpread2(_objectSpread2({}, props_1), {}, {
        onShow: function onShow() {
          handleShow(dialog_3, dialogId_1, props_1 === null || props_1 === void 0 ? void 0 : props_1.onShow);
        },
        onClose: function onClose() {
          handleClose(dialogId_1, props_1 === null || props_1 === void 0 ? void 0 : props_1.onClose);
        }
      })));
      setDialogs(function (dialogs_3) {
        return [].concat(_toConsumableArray(dialogs_3), [dialog_3]);
      });
    };
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var pushDialog = t7;
  var t8;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = {
      pushDialog: pushDialog,
      alertDialog: alertDialog,
      confirmDialog: confirmDialog
    };
    $[7] = t8;
  } else {
    t8 = $[7];
  }
  var t9;
  if ($[8] !== children || $[9] !== dialogs) {
    t9 = /*#__PURE__*/React.createElement(DialogContext.Provider, {
      value: t8
    }, children, dialogs);
    $[8] = children;
    $[9] = dialogs;
    $[10] = t9;
  } else {
    t9 = $[10];
  }
  return t9;
};var _default = {};
function setDialogDefault(value) {
  _default = value;
}
function getDialogDefault() {
  return _default;
}function useDialog(dialogComponent) {
  var $ = compilerRuntime.c(3);
  var value = React.useContext(DialogContext);
  if (Object.keys(value).length === 0) {
    throw new Error("useDialog should be used within DialogContext.Provider");
  }
  var pushDialog = value.pushDialog;
  var t0;
  if ($[0] !== dialogComponent || $[1] !== pushDialog) {
    t0 = function t0(props, onErrorBoundary) {
      var dialogDefault = getDialogDefault();
      pushDialog(dialogComponent, props, onErrorBoundary || dialogDefault.onBoundaryError);
    };
    $[0] = dialogComponent;
    $[1] = pushDialog;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
}function useAlertDialog() {
  var value = React.useContext(DialogContext);
  if (Object.keys(value).length === 0) {
    throw new Error("useAlertDialog should be used within DialogContext.Provider");
  }
  return value.alertDialog;
}function useConfirmDialog() {
  var value = React.useContext(DialogContext);
  if (Object.keys(value).length === 0) {
    throw new Error("useConfirmDialog should be used within DialogContext.Provider");
  }
  return value.confirmDialog;
}exports.Dialog=Dialog;exports.DialogActionButton=DialogActionButton;exports.DialogContextProvider=DialogContextProvider;exports.getDialogDefault=getDialogDefault;exports.setDialogDefault=setDialogDefault;exports.useAlertDialog=useAlertDialog;exports.useConfirmDialog=useConfirmDialog;exports.useDialog=useDialog;