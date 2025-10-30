import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
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
import { DialogProps as Props, DialogCommands } from './Dialog.types';
import { useAutoUpdateLayoutRef, useAutoUpdateState, useForwardRef } from '@pdg/react-hook';

let __disableEnforceFocusListeners: ((disabled: boolean) => void)[] = [];

type DialogType = typeof Dialog & {
  readonly setDisableEnforceFocus: (disabled: boolean) => void;
};

const Dialog = React.forwardRef<DialogCommands, Props>(
  (
    {
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
    },
    ref
  ) => {
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

    const contentRef = useRef<HTMLDivElement>(null);
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

    const titleIcon = initTitleIcon?.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (onShow) onShow();
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initDisableEnforceFocus]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const finalContentProps = useMemo(() => {
      const newContentProps = contentProps || {};
      if (actions) {
        newContentProps.style = {
          paddingBottom: 15,
          ...newContentProps.style,
        };
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

    const commands = useMemo(
      () => ({
        getId: () => id,
        close,
        scrollToTop: () => contentRef.current?.scrollTo({ top: 0 }),
      }),
      [id, close]
    );

    useForwardRef(ref, commands);

    useLayoutEffect(() => {
      onCommands && onCommands(commands);
    }, [commands, onCommands]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleClose = useCallback(
      (_: object, reason: string) => {
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
      },
      [backdropClose, escapeClose, autoClose, close, onRequestCloseRef]
    );

    const handleCloseClick = useCallback(() => {
      if (autoClose) {
        close();
      } else {
        onRequestCloseRef.current && onRequestCloseRef.current();
      }
    }, [autoClose, close, onRequestCloseRef]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <StyledDialog
        className={`color-${color} ${fullHeight ? 'Dialog-full-height' : ''}`}
        open={open}
        data-margin={margin}
        aria-labelledby={`dialog-title-${id}`}
        disableEnforceFocus={disableEnforceFocus}
        onClose={handleClose}
        {...otherProps}
      >
        {title && (
          <StyledDialogTitle {...titleProps}>
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
  }
);

Dialog.displayName = 'Dialog';

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
