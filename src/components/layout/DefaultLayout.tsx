import React, { ReactNode } from 'react'
import Header from '../header/Header'

type Props = {
    children?: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
    return (
        <div className="default-layout-container">
            <main>
                <Header />
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DefaultLayout