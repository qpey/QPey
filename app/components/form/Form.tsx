import React, {Fragment} from 'react';
import {Formik} from 'formik';

type Props = {
  children: React.ReactNode;
  initialValues?: any;
  onSubmit?: (values: any) => void;
  validationSchema?: any;
};

const Form: React.FC<Props> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
};

export default Form;
