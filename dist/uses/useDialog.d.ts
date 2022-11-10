import { ComponentClass, FunctionComponent } from 'react';
import { DialogRequireProps } from '../DialogContext';
export default function useDialog<P extends DialogRequireProps = never, U extends P = P>(dialogComponent: FunctionComponent<U> | ComponentClass<U>): (props?: Partial<U>) => void;
