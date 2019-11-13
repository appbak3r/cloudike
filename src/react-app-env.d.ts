/// <reference types="react-scripts" />

import { FieldProps, FieldValidator, GenericFieldHTMLAttributes } from "formik";
import { default as React, FC } from "react";

declare module "formik" {
  type Props = {
    component?:
      | keyof JSX.IntrinsicElements
      | React.ComponentType<FieldProps<any>>
      | React.ComponentType;
    as?:
      | React.ComponentType<FieldProps<any>["field"]>
      | keyof JSX.IntrinsicElements
      | React.ComponentType;
    render?: (props: FieldProps<any>) => React.ReactNode;
    children?: ((props: FieldProps<any>) => React.ReactNode) | React.ReactNode;
    validate?: FieldValidator;
    name: string;
    type?: string;
    value?: any;
    innerRef?: (instance: any) => void;
  } & GenericFieldHTMLAttributes;

  export const Field: FC<Props>;
}
