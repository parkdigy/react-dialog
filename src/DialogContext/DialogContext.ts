import { createContext } from 'react';
import { DialogContextDefaultValue, DialogContextValue } from './DialogContext.types';

const DialogContext = createContext<DialogContextValue>(DialogContextDefaultValue);

export default DialogContext;
