import React from 'react';

const Avatar = ({
    children,
    px,
    py,
    backgroundColor,
    padding,
    color,
    borderRadius,
    fontSize,
    cursor,
}) => {
    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color || 'black',
        borderRadius,
        textAlign: 'center',
        cursor: cursor || null,
        fontSize,
    };
    return <div style={style}>{children}</div>;
};

export default Avatar;
