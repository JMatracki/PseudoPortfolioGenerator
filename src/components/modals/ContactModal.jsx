import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateContactInfo } from '../../redux/slices/contactSlice'
import { ModalDiv, ModalInput, ModalLabel } from '../../styledcomponents/modalsStyled';

const ContactModal = (props) => {
    const [addressInput, setAddressInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const contactInfo = {
            address: addressInput,
            phone: phoneInput,
            email: emailInput,
        }

        const validationErrors = [];

        if (/^(\+\d{2}|)\d{9}$/.test(phoneInput) === false) {
            validationErrors.push('Prosze wprowadzic poprawny numer telefonu');
        }

        if (addressInput.length === 0) {
            validationErrors.push('Prosze wprowadzic adres');
        }

        if (/^\S+@\S+\.\S+$/.test(emailInput) === false) {
            validationErrors.push('Prosze wprowadzic poprawny adres email');
        }

        setErrors(validationErrors);

        if (validationErrors.length === 0) {
            dispatch(updateContactInfo(contactInfo));
            localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

            setAddressInput('');
            setPhoneInput('');
            setEmailInput('');
            props.onHide();
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edytuj dane kontaktowe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errors.length > 0 && <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>}
                <ModalDiv>
                    <ModalLabel>Adres</ModalLabel>
                    <ModalInput value={addressInput} onChange={e => setAddressInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Numer telefonu</ModalLabel>
                    <ModalInput value={phoneInput} onChange={e => setPhoneInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Email</ModalLabel>
                    <ModalInput value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                </ModalDiv>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveClick}>Zapisz</Button>
                <Button variant="danger" onClick={props.onHide}>Anuluj</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactModal;