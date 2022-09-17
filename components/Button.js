

const Button = ({ children, className, onClick }) => {
  return (
    <button
    className={`w-6 h-6 hidden md:inline-flex text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-500 cursor-pointer $ 
    {className}`
  }
    onClick={onClick}>
{children}
    </button>
  )
}

export default Button