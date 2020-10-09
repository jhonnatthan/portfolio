import { Formik } from 'formik';
import React from 'react';
import { Form } from 'reactstrap';
import PageTitle from '~/components/PageTitle/PageTitle';
import Input from '~/components/Input/Input';
import PageTransition from '~/components/PageTransition/PageTransition';
import PageSubtitle from '~/components/PageSubtitle/PageSubtitle';
import PageDescription from '~/components/PageDescription/PageDescription';

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
    <PageTransition>
      <PageTitle>Contato</PageTitle>

      <PageSubtitle>Formulário de contato</PageSubtitle>

      <PageDescription>Maneiras de me encontrar</PageDescription>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, errors }) => (
          <Form>
            <Input value="teste" error="Campo inválido" />

            <Input />
          </Form>
        )}
      </Formik>
    </PageTransition>
  );
};

export default Contact;
