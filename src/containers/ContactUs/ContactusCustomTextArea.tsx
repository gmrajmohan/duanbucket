import { ChangeEventHandler, FocusEventHandler } from "react";
export interface TextAreaInterFace {
  placHolder: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string | number;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
}

const ContactusCustomTextArea = ({
  placHolder,
  onChange,
  onBlur,
}: TextAreaInterFace) => {
  const Class =
    "h-[80px] w-[100%] border border-theme-gray-100 bg-[#f4f4f4] shadow-sm focus:outline-none focus:ring-theme-red focus:border-theme-red sm:text-sm  pl-2  mt-4 p-2";
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex items-center justify-center">
          <textarea
            placeholder={placHolder}
            className={Class}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
    </>
  );
};

export default ContactusCustomTextArea;
