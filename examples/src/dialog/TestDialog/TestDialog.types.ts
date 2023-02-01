import { DialogRequireProps } from '@pdg/react-dialog';
import { ReactNode } from 'react';

export interface TestDialogProps extends Partial<DialogRequireProps> {
  content: ReactNode;
}
