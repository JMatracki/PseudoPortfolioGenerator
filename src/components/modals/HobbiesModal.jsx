import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateHobbyInfo } from '../../redux/slices/hobbiesSlice';
import { ModalDiv, ModalInput, ModalLabel } from '../../styledcomponents/modalsStyled';

const HobbiesModal = (props) => {
    const [hobbyInput, setHobbyInput] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const hobbiesInfo = {
            name: hobbyInput,
            id: Math.floor(Math.random() * 9999999)
        }

        const validationErrors = [];

        if (hobbyInput.length <= 3 && hobbyInput.length > 40) {
            validationErrors.push('Prosze wprowadzic od 3 do 40 znakow.');
        }

        setErrors(validationErrors);

        if (validationErrors.length === 0) {
            dispatch(updateHobbyInfo(hobbiesInfo));
            if (localStorage.getItem('hobbiesInfo') === null) {
                localStorage.setItem('hobbiesInfo', JSON.stringify([hobbiesInfo]));
            }
            else {
                const localStorageData = JSON.parse(localStorage.getItem('hobbiesInfo'));
                localStorageData.push(hobbiesInfo);
                localStorage.setItem('hobbiesInfo', JSON.stringify(localStorageData))
            }
            setHobbyInput('');
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
                    Edytuj dane o hobby
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errors.length > 0 && <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>}
                <ModalDiv>
                    <ModalLabel>Nazwa hobby</ModalLabel>
                    <ModalInput value={hobbyInput} onChange={e => setHobbyInput(e.target.value)} />
                </ModalDiv>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveClick}>Zapisz</Button>
                <Button variant="danger" onClick={props.onHide}>Anuluj</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default HobbiesModal;