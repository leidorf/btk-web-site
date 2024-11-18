const Card = ({ title, children, ...props }) => {
    return (
      <div
        className="border rounded-lg shadow-md p-4"
        {...props}
      >
        {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
        <div>{children}</div>
      </div>
    );
  };

export default Card;