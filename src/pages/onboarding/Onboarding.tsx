import React, { useContext } from 'react';
import {  Container, Row, Col } from "react-bootstrap";
import { CountryContext } from "../../contexts/country/CountryContext";
import OmniForm from "../../components/omni-form/OmniForm";
import DropdownModal from '../../components/dropdown-modal/DropdownModal';
import './Onboarding.scss';



const Onboarding = () => {
    const { countries, selected, select } = useContext(CountryContext)

    const renderCountrySelection = () => {
        if (selected) {
            return null
        }
        return <DropdownModal options={countries}
                              selectOption={select} />
    }

    return (
        <Container className="onboarding">
            <Row>
                {
                    renderCountrySelection()
                }
                <Col  sm="12" md={{ span: 6, offset: 3 }}>
                    <h4>
                        In order to join Omnipresent please fill this fields:
                    </h4>
                    <OmniForm country={selected}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Onboarding;
