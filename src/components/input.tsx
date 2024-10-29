const classTypes: any = {
  default:
    "px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white outline-none  focus:ring focus:ring-gray-400 w-full",
  compact:
    "px-2 py-1.5 placeholder-slate-300 text-slate-600 relative bg-white outline-none focus:ring focus:ring-red-300 w-full",
};
const Input = ({
  className,
  disabled,
  Icon,
  initValue,
  label,
  name,
  placeholder,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  onIconClick,
  type,
  codequest,
  classType = "default",
  CodeColor,
  error,
  contact,

  ...props
}: any) => {
  const classTypes: any = {
    default: `px-3 py-1.5 placeholder-slate-300 text-slate-600 relative bg-white outline-none  focus:ring focus:ring-gray-400 w-full `,
    compact:
      "px-3 py-1 placeholder-slate-300 text-slate-600 relative bg-white outline-none focus:ring focus:ring-red-300 w-full",
  };
  var classNames =
    `relative flex items-stretch ${codequest || error ? "mb-0.5" : "mb-0"}   ` +
    className;

  if (CodeColor) {
    var Color = "text-white";
  } else {
    var Color = "text-black";
  }

  return (
    <div className={classNames}>
      {type == "phone" && (
        <select
          name="ph-code"
          className={`h-full font-normal text-center ${
            contact == true ? "" : "border-l "
          } border-gray-300 bg-white  text-base items-center justify-center py-1.5 px-1 ${Color}`}
          defaultValue={"+91"}
        >
          <option value="+91">+91</option>
        </select>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={classTypes[classType]}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        min="0"
        {...props}
      />
      {Icon && (
        <span
          className="h-full font-normal text-center  bg-transparent rounded text-base items-center justify-center w-11 px-3 py-3"
          onClick={onIconClick}
        >
          <Icon className="w-5 h-5" />
        </span>
      )}
    </div>
  );
};

export default Input;
