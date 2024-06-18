/** @format */

import React from "react";

const formHandling = (GeneratedComponent, validate, initialValues) => {
  class FormHandling extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        values: initialValues,
        errors: {},
        isSubmitting: false,
        isSuccess: false,
        toastMessage: "",
        toastType: "",
      };
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        values: {
          ...this.state.values,
          [name]: value,
        },
        errors: {
          ...this.state.errors,
          [name]: "",
        },
      });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const errors = validate(this.state.values);

      this.setState({ errors });

      if (Object.keys(errors).length === 0) {
        this.setState({
          isSubmitting: true,
          isSuccess: true,
          toastMessage: "Formulário enviado com sucesso!",
          toastType: "success",
        });
      } else {
        const errorMessage = Object.values(errors).join(", ");
        this.setState({
          errors,
          isSuccess: false,
          toastMessage: `Erro no envio do formulário:${errorMessage}`,
          toastType: "error",
        });
      }
    };

    render() {
      return (
        <>
          <GeneratedComponent
            {...this.props}
            values={this.state.values}
            errors={this.state.errors}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            ref={this.props.forwardedRef}
          />
          {this.state.toastMessage && (
            <div className={`toast ${this.state.toastType}`}>
              {this.state.toastMessage}
            </div>
          )}
        </>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <FormHandling {...props} forwardedRef={ref} />;
  });
};

export default formHandling;
