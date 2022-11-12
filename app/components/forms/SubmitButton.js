import React from 'react';
import { useFormikContext } from 'formik';

import Button from '../Button';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button color="dark" title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
