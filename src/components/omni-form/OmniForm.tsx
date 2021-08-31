import React, { useEffect, useState } from 'react';
import { merge, omit } from 'lodash';
import { BASE_FIELDS, FieldConfig, FormConfig, LOCATION_BASED_FIELDS } from "./FieldsConfig";
import OmniField  from "../omni-field/OmniField";
import { Button, Form } from "react-bootstrap";


interface Type {
    country: string | null
}

const OmniForm: React.FC<Type> = ( { country } ) => {
    const [formConfig, setFormConfig] = useState<FormConfig>()

    const onSubmit = (e: any) => {
        e.preventDefault()
        let result = {}

        for (let i = 0; i < e.target.elements.length; i++) {
            const { id, value, checked } = e.target.elements[i]
            const val = id === 'martialStatus' ? checked : value

            result = {
                ...result,
                [id]: val,
            }
        }

        console.log(JSON.stringify(omit(result, [''])))
    }

    useEffect(() => {
      if (country) {
          // initialize fields config based on @country property
          const countryFields = LOCATION_BASED_FIELDS[country];
          const runtimeCfg = merge({}, BASE_FIELDS, countryFields )

          setFormConfig(runtimeCfg)
      }
    }, [country])

    return (
        <div className="omni-form">
            <Form onSubmit={onSubmit}>
                {
                    formConfig &&
                    Object.entries(formConfig).map(([key, fieldCfg]) =>
                        <OmniField key={key}
                                   id={key}
                                   config={fieldCfg}/>)
                }
                <Button variant="primary"
                        type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default OmniForm;
