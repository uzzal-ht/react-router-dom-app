import { NavLink, Outlet } from "react-router-dom"

const Blog = () => {
    return (
        <>
            <div className="task-wrapper">
                <div className="container">
                    <h2 className="text-xl">This is blog page</h2>
                    <NavLink to="/blog/blog-details-page" className={"underline text-blue-400"}>Blog Details</NavLink>
                    <NavLink to="grid" className={"underline text-blue-400"}>Blog Grid</NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Blog