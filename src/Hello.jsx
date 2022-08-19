import React from 'react'

const Hello = () => {
    const isReact = true;
    return (
        <p>
            {(() => {
                if (isReact) {
                    return "Hello React";
                } else {
                    return "Hello World";
                }
            })}
        </p>
    )
}

export default Hello
