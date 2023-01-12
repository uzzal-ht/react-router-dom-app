const Input = ({inputData, inputChangeHandler, placeholder}) => {
    return (
        <input placeholder={placeholder} className='border rounded-md w-full px-5 h-12' value={inputData} onChange={inputChangeHandler} />
    )
}

export default Input