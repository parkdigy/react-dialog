import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTheme, Icon, Box } from '@mui/material';
import { DialogProps as Props, DialogCommands } from './Dialog.types';
import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyleDialogTitleCloseButton,
  StyledDialogActions,
} from './Dialog.styles';
import { useAutoUpdateState } from '@pdg/react-hook';

const Dialog = React.forwardRef<DialogCommands, Props>(
  (
    {
      commandsRef,
      content,
      color = 'primary',
      titleIcon: initTitleIcon,
      title,
      titleProps,
      subTitle,
      actions,
      hideClose,
      autoClose,
      backdropClose,
      escapeClose,
      fullHeight,
      onShow,
      onRequestClose,
      onClose,
      ...otherProps
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // Theme -----------------------------------------------------------------------------------------------------------

    const theme = useTheme();

    // Ref -------------------------------------------------------------------------------------------------------------

    const contentRef = useRef<HTMLDivElement>(null);

    // State -----------------------------------------------------------------------------------------------------------

    const [open, setOpen] = useState(true);
    const [titleId] = useState(`dialog-title-${id}`);
    const [titleIcon] = useAutoUpdateState<string | undefined>(
      useMemo(
        () => initTitleIcon?.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`),
        [initTitleIcon]
      )
    );

    const [textColor] = useAutoUpdateState<string>(
      useMemo(() => theme.palette[color || 'primary'].contrastText, [theme, color])
    );

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (onShow) onShow();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Function - close -------------------------------------------------------------------------------------------------

    const close = useCallback(() => {
      setOpen(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, theme.transitions.duration.leavingScreen);
    }, [onClose, theme]);

    const scrollToTop = useCallback(() => {
      contentRef.current?.scrollTo({ top: 0 });
    }, [contentRef]);

    // State - commands ------------------------------------------------------------------------------------------------

    const [commands] = useAutoUpdateState<DialogCommands>(
      useMemo(
        () => ({
          getId: () => id,
          close,
          scrollToTop,
        }),
        [id, close, scrollToTop]
      )
    );

    // Effect - Commands -----------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }

      if (commandsRef) {
        if (typeof commandsRef === 'function') {
          commandsRef(commands);
        } else {
          commandsRef.current = commands;
        }
      }

      return () => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        }

        if (commandsRef) {
          if (typeof commandsRef === 'function') {
            commandsRef(undefined);
          } else {
            commandsRef.current = undefined;
          }
        }
      };
    }, [ref, commandsRef, commands]);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleClose = useCallback(
      (e: object, reason: string) => {
        switch (reason) {
          case 'backdropClick':
            if (backdropClose) {
              if (autoClose) {
                close();
              } else {
                if (onRequestClose) onRequestClose();
              }
            }
            break;
          case 'escapeKeyDown':
            if (escapeClose) {
              if (autoClose) {
                close();
              } else {
                if (onRequestClose) onRequestClose();
              }
            }
            break;
        }
      },
      [close, autoClose, backdropClose, escapeClose, onRequestClose]
    );

    const handleCloseClick = useCallback(() => {
      if (autoClose) {
        close();
      } else {
        if (onRequestClose) onRequestClose();
      }
    }, [autoClose, onRequestClose, close]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <StyledDialog
        className={`color-${color} ${fullHeight ? 'Dialog-full-height' : ''}`}
        open={open}
        aria-labelledby={titleId}
        onClose={handleClose}
        {...otherProps}
      >
        {title && (
          <StyledDialogTitle {...titleProps}>
            {(titleIcon || title) && (
              <Box style={{ display: 'flex', fontSize: '17px' }}>
                {titleIcon && (
                  <Box style={{ display: 'flex', alignItems: 'center', marginRight: 7 }}>
                    <Icon style={{ fontSize: '22px' }}>{titleIcon}</Icon>
                  </Box>
                )}
                {title && (
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
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
                style={{ color: textColor }}
                onClick={handleCloseClick}
              >
                <Icon>close</Icon>
              </StyleDialogTitleCloseButton>
            )}
          </StyledDialogTitle>
        )}
        <StyledDialogContent
          ref={contentRef}
          style={{
            paddingBottom: actions ? 15 : undefined,
          }}
        >
          {content}
        </StyledDialogContent>
        {actions && <StyledDialogActions>{actions}</StyledDialogActions>}
      </StyledDialog>
    );
  }
);

Dialog.displayName = 'Dialog';

export default Dialog;
