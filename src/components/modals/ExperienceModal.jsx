import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateExperienceInfo } from '../../redux/slices/experienceSlice';
import { ModalDiv, ModalInput, ModalLabel, ModalTextArea } from '../../styledcomponents/modalsStyled';

const ExperienceModal = (props) => {
    const [experienceInput, setExperienceInput] = useState('');
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const [tasksInfoInput, setTasksInfoInput] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const experienceInfo = {
            name: experienceInput,
            date: `${startDateInput} - ${endDateInput ? endDateInput : 'obecnie'}`,
            tasksInfo: tasksInfoInput,
            id: Math.floor(Math.random() * 9999999),
        }

        const validationErrors = [];

        if (experienceInput.length <= 5 && experienceInput.length > 100) {
            validationErrors.push('Prosze wprowadzic od 5 do 100 znakow.');
        }

        if (startDateInput.length === 0) {
            validationErrors.push('Prosze wprowadzic date rozpoczęcia pracy.');
        }

        if (startDateInput.length !== 0 && endDateInput.length !== 0) {
            if (new Date(startDateInput).getTime() > new Date(endDateInput).getTime()) {
                validationErrors.push('Data początkowa nie może być większa niż końcowa.');
            }
        }

        if (tasksInfoInput.length <= 5 && tasksInfoInput.length > 100) {
            validationErrors.push('Prosze wprowadzic od 5 do 100 znakow.');
        }

        setErrors(validationErrors);

        if (validationErrors.length === 0) {
            dispatch(updateExperienceInfo(experienceInfo))

            if (localStorage.getItem('experienceInfo') === null) {
                localStorage.setItem('experienceInfo', JSON.stringify([experienceInfo]));
            }
            else {
                const localStorageData = JSON.parse(localStorage.getItem('experienceInfo'));
                localStorageData.push(experienceInfo);
                localStorage.setItem('experienceInfo', JSON.stringify(localStorageData))
            }

            setExperienceInput('');
            setStartDateInput('');
            setEndDateInput('');
            setTasksInfoInput('');
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
                    Edytuj doświadczenie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errors.length > 0 && <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>}
                <ModalDiv>
                    <ModalLabel>Doświadczenie</ModalLabel>
                    <ModalInput value={experienceInput} onChange={e => setExperienceInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Data rozpoczęcia pracy</ModalLabel>
                    <ModalInput value={startDateInput} onChange={e => setStartDateInput(e.target.value)} type="date" />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Data zakończenia pracy</ModalLabel>
                    <ModalInput value={endDateInput} onChange={e => setEndDateInput(e.target.value)} type="date" />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Zakres pracy (poszczególne pozycje rozdziel średnikiem)</ModalLabel>
                    <ModalTextArea value={tasksInfoInput} onChange={e => setTasksInfoInput(e.target.value)} />
                </ModalDiv>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveClick}>Zapisz</Button>
                <Button variant="danger" onClick={props.onHide}>Anuluj</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ExperienceModal;