import React from 'react';

const SecondHeading = ({
    reduceBelow = 1024,
    maxFontSize = 48,
    minFontSize = 30,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;
    const styledChildren = React.Children.map(children, (child) => {
        if (typeof child === 'string') {
            return child;
        }
        if (child.type === 'span') {
            return React.cloneElement(child, {
                className: `${child.props.className || ''} relative after:absolute md:after:left-1 after:left-0.5 after:w-[94.5%] after:h-1.5 md:after:h-2.5 after:bg-off-yellow md:after:bottom-3.5 after:bottom-2 sm:after:bottom-2.5 after:-z-10`
            });
        }
        return child;
    });

    return (
        <h2
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-light leading-8 md:leading-9 lg:leading-custom-3xl -tracking-xl`}
        >
            {styledChildren}
        </h2>
    );
};

export default SecondHeading;