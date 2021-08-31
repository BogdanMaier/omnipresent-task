import React from 'react';
import { Form } from 'react-bootstrap';
import { FieldConfig } from "../omni-form/FieldsConfig";

interface Type {
    config: FieldConfig
    id: string,
}

const OmniField: React.FC<Type> = ({ id, config }):any =>  {
    const { label, type, validation }: FieldConfig = config

    const renderControlByType = () => {
        if (type === 'checkbox') {
            return <Form.Check type={type} />
        }

        if (type === 'number') {
            console.log(`> validation: `, validation);

            return <Form.Control
                type={type}
                placeholder={`Enter ${label}`}
                min={validation?.min}
                max={validation?.max}
                required
            />
        }

        return (
            <Form.Control type={type}
                          placeholder={`Enter ${label}`}
                          required />
        )
    }

    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>
                {label}
            </Form.Label>
            {
                renderControlByType()
            }
        </Form.Group>
    );
}

export default OmniField;
