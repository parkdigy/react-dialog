import React, { CSSProperties, useCallback } from 'react';
import { Button } from '@mui/material';
import { DialogActionButtonProps } from './DialogActionButton.types';
import { useAutoUpdateState } from '@pdg/react-hook';

const DEFAULT_STYLE: CSSProperties = {
  paddingLeft: 15,
  paddingRight: 15,
  minWidth: 0,
};

const DialogActionButton: React.FC<DialogActionButtonProps> = ({ variant, style: initStyle, ...otherProps }) => {
  // State -----------------------------------------------------------------------------------------------------------

  const [style] = useAutoUpdateState<CSSProperties>(
    useCallback(() => {
      if (initStyle) {
        return { DEFAULT_STYLE, ...initStyle };
      } else {
        return DEFAULT_STYLE;
      }
    }, [initStyle])
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return <Button variant={variant || 'text'} style={style} {...otherProps} />;
};

export default DialogActionButton;
