import React from 'react';
import {TextInputProps} from 'react-native';
import {useFormikContext} from 'formik';

import {TextInput} from '../';
import ErrorMessage from './ErrorMessage';

type Props = TextInputProps & {
  name: string;
};

const FormField: React.FC<Props> = ({name, ...otherProps}) => {
  const {setFieldTouched, setFieldValue, errors, touched, values} =
    useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
