import React, { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { useTheme, Icon, Box } from '@mui/material';
import { DialogProps as Props, DialogDefaultProps, DialogCommands } from './Dialog.types';
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
      color,
      titleIcon: initTitleIcon,
      title,
      titleProps: initTitleProps,
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
      useCallback(() => {
        return initTitleIcon?.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`);
      }, [initTitleIcon])
    );
    const [backgroundColor] = useAutoUpdateState<string>(
      useCallback(() => {
        return theme.palette[color || 'primary'].main;
      }, [color])
    );

    const [textColor] = useAutoUpdateState<string>(
      useCallback(() => {
        return theme.palette[color || 'primary'].contrastText;
      }, [color])
    );

    const [titleProps] = useAutoUpdateState<Props['titleProps']>(
      useCallback(() => {
        return {
          ...initTitleProps,
          style: {
            backgroundColor,
            color: textColor,
            ...initTitleProps?.style,
          },
        };
      }, [initTitleProps, backgroundColor, textColor])
    );

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (onShow) onShow();
    }, []);

    // Function - close -------------------------------------------------------------------------------------------------

    const close = useCallback(() => {
      setOpen(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, theme.transitions.duration.leavingScreen);
    }, [onClose]);

    const scrollToTop = useCallback(() => {
      contentRef.current?.scrollTo({ top: 0 });
    }, [contentRef]);

    // State - commands ------------------------------------------------------------------------------------------------

    const [commands] = useAutoUpdateState<DialogCommands>(
      useCallback(
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
      <StyledDialog open={open} aria-labelledby={titleId} onClose={handleClose} {...otherProps}>
        {title && (
          <StyledDialogTitle {...titleProps}>
            {(titleIcon || title) && (
              <Box style={{ display: 'flex', fontSize: '17px' }}>
                {titleIcon && (
                  <Box style={{ display: 'flex', alignItems: 'center', marginRight: 7 }}>
                    <Icon style={{ fontSize: '22px' }}>{titleIcon}</Icon>
                  </Box>
                )}
                {title && <Box style={{ display: 'flex', alignItems: 'center' }}>{title}</Box>}
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
            height: fullHeight ? '100vh' : undefined,
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
Dialog.defaultProps = DialogDefaultProps;

export default Dialog;
