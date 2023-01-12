import { Routes, Route } from "react-router-dom";
import { Home, About, Service, Blog, Contact, Error, BlogDetails, BlogGrid } from "../../pages"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="blog" element={<Blog />}>
                <Route path="grid" element={<BlogGrid />} />
                <Route path=":slug" element={<BlogDetails />} />
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    )
}

export default AllRoutes