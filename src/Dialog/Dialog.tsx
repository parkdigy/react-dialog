import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Dialog as MuiDialog,
  useTheme,
  Icon,
  Box,
  styled,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { DialogCommands, DialogProps as Props } from './Dialog.types';
import { useAutoUpdateRef, useAutoUpdateState } from '@pdg/react-hook';

let __disableEnforceFocusListeners: ((disabled: boolean) => void)[] = [];

type DialogType = typeof Dialog & {
  readonly setDisableEnforceFocus: (disabled: boolean) => void;
};

const Dialog = ({
  ref,
  content,
  contentProps,
  color = 'primary',
  titleIcon: initTitleIcon,
  title,
  titleProps,
  subTitle,
  actions,
  margin = 32,
  hideClose,
  autoClose,
  backdropClose,
  escapeClose,
  fullHeight,
  disableEnforceFocus: initDisableEnforceFocus,
  onShow,
  onRequestClose: initOnRequestClose,
  onClose: initOnClose,
  onCommands,
  ...otherProps
}: Props) => {
  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();

  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onShowRef = useRef(onShow);
  const contentRef = useRef<HTMLDivElement>(null);
  const onRequestCloseRef = useAutoUpdateRef(initOnRequestClose);
  const onCloseRef = useAutoUpdateRef(initOnClose);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [open, setOpen] = useState(true);
  const [disableEnforceFocus, setDisableEnforceFocus] = useAutoUpdateState(initDisableEnforceFocus);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const titleIcon = initTitleIcon?.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`);

  const titleStyle: CSSProperties = {
    backgroundColor: titleProps?.style?.backgroundColor ?? theme.palette[color].main,
    color: titleProps?.style?.color ?? theme.palette[color].contrastText,
  };

  const finalContentProps = {
    ...contentProps,
    style: {
      paddingTop: title ? 23 : undefined,
      paddingBottom: actions ? 15 : undefined,
      ...contentProps?.style,
    },
  };

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    onShowRef.current?.();
  }, []);

  useEffect(() => {
    if (initDisableEnforceFocus === undefined) {
      const handler = (disabled: boolean) => {
        setDisableEnforceFocus(disabled);
      };

      __disableEnforceFocusListeners.push(handler);

      return () => {
        __disableEnforceFocusListeners = __disableEnforceFocusListeners.filter((l) => l !== handler);
      };
    }
  }, [initDisableEnforceFocus, setDisableEnforceFocus]);

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

  const commands = useMemo(
    (): DialogCommands => ({
      getId: () => id,
      close,
      scrollToTop: () => contentRef.current?.scrollTo({ top: 0 }),
    }),
    [id, close]
  );

  useImperativeHandle(ref, () => commands);

  useLayoutEffect(() => {
    onCommands && onCommands(commands);
  }, [commands, onCommands]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClose = (_: object, reason: string) => {
    switch (reason) {
      case 'backdropClick':
        if (backdropClose) {
          if (autoClose) {
            close();
          } else {
            onRequestCloseRef.current && onRequestCloseRef.current();
          }
        }
        break;
      case 'escapeKeyDown':
        if (escapeClose) {
          if (autoClose) {
            close();
          } else {
            onRequestCloseRef.current && onRequestCloseRef.current();
          }
        }
        break;
    }
  };

  const handleCloseClick = () => {
    if (autoClose) {
      close();
    } else {
      onRequestCloseRef.current && onRequestCloseRef.current();
    }
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledDialog
      className={`${fullHeight ? 'Dialog-full-height' : ''}`}
      open={open}
      data-margin={margin}
      aria-labelledby={`dialog-title-${id}`}
      disableEnforceFocus={disableEnforceFocus}
      onClose={handleClose}
      {...otherProps}
    >
      {title && (
        <StyledDialogTitle style={titleStyle} {...titleProps}>
          {(titleIcon || title) && (
            <Box display='flex' fontSize={17}>
              {titleIcon && (
                <Box display='flex' alignItems='center' marginRight='7px'>
                  <Icon style={{ fontSize: '22px' }}>{titleIcon}</Icon>
                </Box>
              )}
              {title && (
                <Box display='flex' alignItems='center'>
                  {title}
                  {subTitle && <div className='Dialog-SubTitle'>&nbsp;-&nbsp;{subTitle}</div>}
                </Box>
              )}
            </Box>
          )}
          {!hideClose && (
            <StyleDialogTitleCloseButton
              className='dialog-close-btn'
              aria-label='close'
              style={{ color: theme.palette[color || 'primary'].contrastText }}
              onClick={handleCloseClick}
            >
              <Icon>close</Icon>
            </StyleDialogTitleCloseButton>
          )}
        </StyledDialogTitle>
      )}
      <StyledDialogContent ref={contentRef} {...finalContentProps}>
        {content}
      </StyledDialogContent>
      {actions && <StyledDialogActions>{actions}</StyledDialogActions>}
    </StyledDialog>
  );
};

(Dialog as any).setDisableEnforceFocus = (disabled: boolean) => {
  __disableEnforceFocusListeners.forEach((listener) => listener(disabled));
};

export default Dialog as DialogType;

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const StyledDialog = styled(MuiDialog)`
  &.Dialog-full-height {
    > .MuiDialog-container > .MuiDialog-paper {
      height: 100vh;
    }
  }
  > .MuiDialog-container > .MuiDialog-paper:not(.MuiDialog-paperFullScreen) {
    width: calc(100% - ${(props: { ['data-margin']: number }) => props['data-margin'] * 2}px);
    max-height: calc(100% - ${(props: { ['data-margin']: number }) => props['data-margin'] * 2}px);
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

const StyledDialogContent = styled(DialogContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledDialogActions = styled(DialogActions)`
  padding-left: 20px;
  padding-right: 15px;
`;
