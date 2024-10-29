const Select = ({
  name,
  label,
  options,
  onChange,
  value,
  onBlur,
  classProp,
  errors,
  contact,
}: any) => {
  const stateIds: any = [1, 4, 5, 7];
  var arr: any[] = [];
  const unique =
    options &&
    options?.filter((element: { id: undefined; centre_code: any }) => {
      const isDuplicate = arr.includes(
        element.id != undefined ? element.id : element.centre_code
      );
      if (!isDuplicate) {
        arr.push(element.id);
        return true;
      } else {
        return false;
      }
    });

  return (
    <>
      <select
        name={name}
        className={`${!errors ? "mb-3" : ""} ${
          contact == true ? "" : "rounded-md"
        } block py-1 px-2  border border-theme-gray-100 bg-white  shadow-sm focus:outline-none focus:ring-theme-red focus:border-theme-red sm:text-sm w-full`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <>
          <option value={""}>{label}</option>
          {unique &&
            unique.map((state: any, index: any) =>
              state.centre_code !== undefined
                ? state.centre_status == "Active" &&
                  state.company_type != "Test Centre" &&
                  state.id != "91BS007" &&
                  state.centre_code != "91BS007" &&
                  state.id != "91SBS001" &&
                  state.id != "91STN001" &&
                  state.id != "SB91CC001" && (
                    <option
                      key={index}
                      value={
                        state.centre_code !== undefined
                          ? state.centre_code
                          : state.id
                      }
                      data-id={state.name}
                    >
                      {state.centre_name ? state.centre_name : state.name}
                    </option>
                  )
                : state.id != "91BS007" &&
                  state.centre_code != "91BS007" &&
                  state.centre_status != "Inactive" &&
                  state.centre_status != "Closed" &&
                  state.company_type != "Test Centre" &&
                  state.id != "91SBS001" &&
                  state.id != "91STN001" &&
                  state.id != "SB91CC001" && (
                    <option
                      key={index}
                      value={
                        state.centre_code !== undefined
                          ? state.centre_code
                          : state.id
                      }
                      data-id={state.name}
                    >
                      {state.centre_name ? state.centre_name : state.name}
                    </option>
                  )
            )}
        </>
      </select>
    </>
  );
};

export default Select;
