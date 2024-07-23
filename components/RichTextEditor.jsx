import React, { useState } from 'react';
import RichTextEditor from 'react-rte';

const MyEditor = ({ setValue }) => {
  const [valueEditor, setValueEditor] = useState(RichTextEditor.createEmptyValue());

  const handleChange = (newValue) => {
      setValue(newValue.toString('html'))
      setValueEditor(newValue)
  };

  return (
    <RichTextEditor
      value={valueEditor}
      onChange={handleChange}
      placeholder='Type Description Here ..'
    />
  );
};
export default MyEditor
