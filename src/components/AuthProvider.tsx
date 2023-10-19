"use client";

import React from 'react'

type Props = {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    return (
        <div>AuthProvider</div>
    )
}

export default AuthProvider