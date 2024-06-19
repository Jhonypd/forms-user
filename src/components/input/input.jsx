/** @format */

import "./inputs.css";

const Inputs = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  errors,
  className,
  onClick,
  id,
  checked,
  min,
  max,
  step,
}) => {
  return (
    <>
      <div className=" form-control">
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
          min={min}
          max={max}
          step={step}
        />

        <span className="input-border input-border-alt"></span>
      </div>
      {errors && <span className="error-message">{errors}</span>}
    </>
  );
};

export default Inputs;
