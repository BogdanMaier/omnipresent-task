import React, { useEffect, useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import './DropdownModal.scss'

interface Props {
    options: string[],
    selectOption: (selection: string) => void
}

const DropdownModal: React.FC<Props> = ({ options, selectOption }) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    useEffect(() => {
        setTimeout(toggle, 100)
    }, [])

    return (
        <Modal className="dd-modal"
               show={show}
               onHide={toggle}>
            <Modal.Header closeButton
                          closeLabel="">
                <Modal.Title>Action required</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    In order to proceed please select your country of residence:
                </p>
                <Dropdown>
                    <Dropdown.Toggle>
                        Select country
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            options.map(option =>
                                <Dropdown.Item
                                    key={option}
                                    onClick={() => selectOption(option)}>
                                    {option}
                                </Dropdown.Item>)
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}

export default DropdownModal
