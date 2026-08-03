const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const styles = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white",

    secondary:
      "border border-orange-500 text-orange-500 hover:bg-orange-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full h-12 rounded-xl font-semibold transition ${styles[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;