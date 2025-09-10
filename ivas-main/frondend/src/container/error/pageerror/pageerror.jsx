import { useNavigate } from 'react-router-dom'

const PageError = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>This is error page</div>
            <button
                onClick={() => {
                    navigate(-1)
                }}
            >
                Go Back
            </button>
        </div>
    )
}

export default PageError