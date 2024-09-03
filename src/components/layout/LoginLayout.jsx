import React from "react";

const LoginLayout = ({ children }) => {

    const containerStyle = {
        backgroundColor: '#f5f5f5',
        height: '100vh',
    }

    return (
        <>
            <div style={containerStyle} className="flex align-items-center justify-content-center">
                {children}
            </div>
        </>
    )
}

export default LoginLayout;