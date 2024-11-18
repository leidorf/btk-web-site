import Link from "next/link";

const Button = ({ href, variant = "primary", size = "md", children, ...props }) => {
  const baseClass = "rounded px-4 py-2 mb-2 font-semibold focus:outline-none";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    disabled: "bg-red-500 text-white hover:bg-red-700"
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass} ${variants[variant]} ${sizes[size]}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
  

  return (
    <button className={`${baseClass} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
