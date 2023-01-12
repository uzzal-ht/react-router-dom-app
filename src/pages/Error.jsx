
import { useNavigate } from "react-router-dom"

const Error = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="task-wrapper">
            <div className="container">
                <h2 className="text-xl mb-4">This page is not found</h2>
                <button className="border px-6 py-1.5 bg-slate-800 text-white" onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default Error