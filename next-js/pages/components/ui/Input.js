const Input = ({ type = "text", placeholder, ...props }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        {...props}
      />
    );
  };

  export default Input;