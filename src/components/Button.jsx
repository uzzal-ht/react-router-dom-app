const Button = ({className="", children, type}) => {
    return (
        <button type={type || 'button'} className={`font-medium border border-[#aaa] rounded-md px-5 h-12 w-40 hover:bg-black hover:text-white hover:border-black transition-all ${className}`}>{children}</button>
    )
}

export default Button