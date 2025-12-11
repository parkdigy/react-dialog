import { DialogRequireProps } from '../../../../src';
import { ReactNode } from 'react';

export interface TestDialogProps extends DialogRequireProps {
  content: ReactNode;
}
