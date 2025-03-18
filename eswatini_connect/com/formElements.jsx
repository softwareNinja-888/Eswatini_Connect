import React from "react";

const FormElementInput = () => {
  return (
    <section className='py-12 dark:bg-dark'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          <DefaultColumn>
            <DefaultInput />
          </DefaultColumn>

          <DefaultColumn>
            <ActiveInput />
          </DefaultColumn>

          <DefaultColumn>
            <DisabledInput />
          </DefaultColumn>

          <DefaultColumn>
            <NameInput />
          </DefaultColumn>

          <DefaultColumn>
            <EmailInput />
          </DefaultColumn>

          <DefaultColumn>
            <CompanyNameInput />
          </DefaultColumn>

          <DefaultColumn>
            <CurrencyInput />
          </DefaultColumn>

          <DefaultColumn>
            <InvalidInput />
          </DefaultColumn>

          <DefaultColumn>
            <StrongInput />
          </DefaultColumn>
        </div>
      </div>
    </section>
  )
};

export default FormElementInput;

