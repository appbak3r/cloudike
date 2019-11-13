import { Field, Formik, FormikHelpers } from "formik";
import React, { FC, memo } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { AuthorizeRequestPayload } from "../../store/auth/types";
import { validateEmail, validatePhone } from "../../utils/validations";
import { Button } from "../common/Button";
import { FieldError } from "../forms/FieldError";
import { Input } from "../forms/Input";

type Props = {
  onSubmit: (
    values: AuthorizeRequestPayload,
    actions: FormikHelpers<any>
  ) => void;
};

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 30px;
  background-color: #fff;
  border-radius: 4px;
  padding: 17% 15%;
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const FormError = styled.p`
  color: #f35159;
  font-size: 0.8em;
  position: absolute;
  top: 100%;
  padding: 15px;
`;

const Title = styled.div`
  font-size: 1.6rem;
`;

const ValidationSchema = Yup.object().shape({
  login: Yup.string().test(
    "is-email-or-phone",
    "Please, enter valid email or phone",
    value => Promise.resolve(validatePhone(value) || validateEmail(value))
  ),
  password: Yup.string()
    .min(2)
    .required("This field is required")
});

export const SignInForm: FC<Props> = memo(({ onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
      initialValues={{
        login: "",
        password: ""
      }}
    >
      {({ handleSubmit, status = {} }) => (
        <Form onSubmit={handleSubmit}>
          <Title>Sign in</Title>

          <Field name="login">
            {({ field, meta }) => (
              <FieldError
                hasError={meta.touched && !!meta.error}
                error={meta.error}
              >
                <Input {...field} label="Email or Phone" />
              </FieldError>
            )}
          </Field>
          <Field name="password">
            {({ field, meta }) => (
              <FieldError
                hasError={meta.touched && !!meta.error}
                error={meta.error}
              >
                <Input {...field} type="password" label="Password" />
              </FieldError>
            )}
          </Field>

          <Button type="submit" isLoading={status.loading}>
            Sign in
          </Button>

          {status.error && <FormError>{status.error}</FormError>}
        </Form>
      )}
    </Formik>
  );
});
