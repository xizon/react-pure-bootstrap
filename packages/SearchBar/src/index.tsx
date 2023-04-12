import React, { useId, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type SearchBarProps = {
    wrapperClassName?: string;
    appearance?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    icon?: React.ReactNode | string;
    btnId?: string;
    /** -- */
    id?: string;
    [key: `data-${string}`]: string | undefined;
    onClick?: (e: any) => void;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const SearchBar = forwardRef((props: SearchBarProps, ref: any) => {
    const {
        wrapperClassName,
        appearance,
        disabled,
        required,
        placeholder,
        value,
        label,
        name,
        btnId,
        id,
        maxLength,
        icon,
        onClick,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const rootRef = useRef<any>(null);

    function handleSubmit(event: any) {
   
        //
        onClick?.(event);
    }

    function handleFocus(event: any) {
        rootRef.current.classList.add('is-active');

        //
        onFocus?.(event);
    }

    function handleChange(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '' || val === 'blank') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onChange?.(event);
    }

    function handleBlur(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '' || val === 'blank') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onBlur?.(event);
    }

    const idRes = id || uniqueID;

    return (
        <>



            <div className={wrapperClassName ? wrapperClassName : "mb-3"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                <div className="input-group">
                    <input
                        ref={ref}
                        type={appearance === 'pill' ? 'input' : 'search'}
                        className={appearance === 'pill' ? 'form-control border rounded-pill' : 'form-control'}
                        id={idRes}
                        name={name}
                        placeholder={placeholder || ''}
                        defaultValue={value || ''}
                        maxLength={maxLength || null}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
                        {...attributes}
                    />

                    <span className={appearance === 'pill' ? 'position-absolute end-0' : 'input-group-text m-0 p-0 border-start-0'} style={appearance === 'pill' ? { zIndex: 5 } : {}}>
                        <button id={btnId} type="button" className={appearance === 'pill' ? 'btn border-end-0 rounded-pill' : 'btn btn-sm'} onClick={handleSubmit}>
                            {icon ? <>{icon}</> : <><svg width="20px" height="20px" fill="#333" viewBox="0 0 16 16">
                                <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fill-rule="evenodd" />
                            </svg></>}
                        </button>

                    </span>
                </div>
            </div>


        </>
    )  
});

export default SearchBar;