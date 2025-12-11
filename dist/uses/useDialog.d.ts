import { ComponentClass, FunctionComponent } from 'react';
import { DialogRequireProps } from '../DialogContext';
export default function useDialog<P extends Partial<DialogRequireProps>>(dialogComponent: FunctionComponent<P> | ComponentClass<P>): (props: Omit<P, keyof DialogRequireProps> & Partial<DialogRequireProps>) => void;
