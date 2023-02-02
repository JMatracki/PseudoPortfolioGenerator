import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateEducationInfo } from '../../redux/slices/educationSlice';
import { ModalDiv, ModalInput, ModalLabel } from '../../styledcomponents/modalsStyled';

const EducationModal = (props) => {
    const [schoolInput, setSchoolInput] = useState('')
    const [dateInput, setDateInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [errors, setErrors] = useState([]);


    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const educationInfo = {
            schoolName: schoolInput,
            date: dateInput,
            location: locationInput,
            id: Math.floor(Math.random() * 9999999),
        }

        const validationErrors = [];

        if (schoolInput.length < 3 && schoolInput.length > 20) {
            validationErrors.push('Prosze wprowadzic od 3 do 20 znakow.');
        }

        if (dateInput.length < 3 && dateInput.length > 40) {
            validationErrors.push('Prosze wprowadzic od 3 do 40 znakow.');
        }

        if (locationInput.length < 3 && locationInput > 20) {
            validationErrors.push('Prosze wprowadzic od 3 do 20 znakow.');
        }

        setErrors(validationErrors);

        if (validationErrors.length === 0) {
            dispatch(updateEducationInfo(educationInfo))

            if (localStorage.getItem('schools') === null) {
                localStorage.setItem('schools', JSON.stringify([educationInfo]));
            }
            else {
                const localStorageData = JSON.parse(localStorage.getItem('schools'));
                localStorageData.push(educationInfo);
                localStorage.setItem('schools', JSON.stringify(localStorageData))
            }

            setSchoolInput('');
            setDateInput('');
            setLocationInput('');
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
                    Edytuj wykształcenie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errors.length > 0 && <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>}
                <ModalDiv>
                    <ModalLabel>Ukonczona szkola</ModalLabel>
                    <ModalInput value={schoolInput} onChange={e => setSchoolInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Data ukonczenia</ModalLabel>
                    <ModalInput type="date" value={dateInput} onChange={e => setDateInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Miasto ukonczenia</ModalLabel>
                    <ModalInput value={locationInput} onChange={e => setLocationInput(e.target.value)} />
                </ModalDiv>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveClick}>Zapisz</Button>
                <Button variant="danger" onClick={props.onHide}>Anuluj</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EducationModal;
