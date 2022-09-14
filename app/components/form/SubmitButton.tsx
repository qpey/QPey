import React from 'react';
import {useFormikContext} from 'formik';

import {Button} from '../';

type Props = {
  title: string;
};

const SubmitButton: React.FC<Props> = ({title}) => {
  const {handleSubmit} = useFormikContext();

  return <Button text={title} onPress={handleSubmit} />;
};

export default SubmitButton;
