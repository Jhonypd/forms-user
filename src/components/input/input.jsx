/** @format */

import "./inputs.css";

const Inputs = ({
  type,
  id,
  name,
  className,
  value,
  placeholder,
  onClick,
  onChange,
  checked,errors
}) => {
  return (
    <div className="form-control">
      <input
        onChange={onChange}
        onClick={onClick}
        className={`input input-alt ${className}`}
        placeholder={placeholder}
        autoComplete="off"
        required=""
        type={type}
        id={id}
        value={value}
        name={name}
        checked={checked}
      />

      <span className="input-border input-border-alt"></span>
      {errors && <span className="error-message">{errors}</span>}
    </div>
  );
};

export default Inputs;
