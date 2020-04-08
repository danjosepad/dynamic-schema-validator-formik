// code extracted from https://codesandbox.io/s/6ll36y9qjw
// (view this discussion: https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8)

import React from 'react';
import Select from '@atlaskit/select';

function CustomSelect({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}) {
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? option.map(item => item.value)
        : option.value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    }
    return isMulti ? [] : '';
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default CustomSelect;
