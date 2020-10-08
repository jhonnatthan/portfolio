import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { Form } from 'reactstrap';
import PageTitle from '~/components/PageTitle/PageTitle';
import Input from '~/components/Input/Input';

type Values = {
  briefing: string;
  name: string;
  email: string;
  company: string;
  role: string;
};

const initialValues: Values = {
  briefing: '',
  name: '',
  email: '',
  company: '',
  role: '',
};

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <Fragment>
      <PageTitle>Contato</PageTitle>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, errors }) => (
          <Form>
            <Input value="teste" error="Campo inválido" />

            <Input />
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default Contact;
