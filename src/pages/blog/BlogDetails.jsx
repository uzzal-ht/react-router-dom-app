import { useParams } from "react-router-dom"

const BlogDetails = () => {
    const { slug } = useParams()
    return (
        <div className="task-wrapper">
            <div className="container">
                <h1 className="text-xl mb-5">{slug}</h1>
                <h2 className="text-xl">This is blog details page</h2>
            </div>
        </div>
    )
}

export default BlogDetails