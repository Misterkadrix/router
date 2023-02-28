import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Home = () => {
    return (
        <>
            <div>
                <button>
                    <Link to={'/connection'}>connection</Link>
                </button>
                <button>
                    <Link to={'/myaccount'}>myaccount</Link>
                </button>
            </div>

            <Outlet />
        </>

    )
}
