import { ComponentClass, FunctionComponent } from 'react';
import { DialogRequireProps } from '../DialogContext';
export default function useDialog<P extends Partial<DialogRequireProps> = never, U extends P = P>(dialogComponent: FunctionComponent<U> | ComponentClass<U>): (props: Omit<U, keyof DialogRequireProps> & Partial<DialogRequireProps>) => void;
