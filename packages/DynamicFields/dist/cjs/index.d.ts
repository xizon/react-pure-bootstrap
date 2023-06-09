import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type DynamicFieldsProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    tempHtmlString?: any;
    maxFields?: any;
    confirmText?: string;
    iconAddBefore?: React.ReactNode | string;
    iconAddAfter?: React.ReactNode | string;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    startFromZero?: boolean;
    /** -- */
    id?: string;
    onAdd?: () => void;
    onRemove?: () => void;
    onComplete?: () => void;
};
declare const DynamicFields: (props: DynamicFieldsProps) => JSX.Element;
export default DynamicFields;
