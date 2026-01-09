import { createContext } from 'react';
import { type DialogContextValue } from './DialogContext.types';

const DialogContext = createContext<DialogContextValue>({} as DialogContextValue);

export default DialogContext;
