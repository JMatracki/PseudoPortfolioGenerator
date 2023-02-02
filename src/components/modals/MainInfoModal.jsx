import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux'
import { updateMainInfo } from '../../redux/slices/mainInfoSlice';
import { ModalDiv, ModalInput, ModalLabel, ModalTextArea } from '../../styledcomponents/modalsStyled';

const MainInfoModal = (props) => {
    const [nameAndSurnameInput, setNameAndSurnameInput] = useState('');
    const [roleInput, setRoleInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [aboutMeInput, setAboutMeInput] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const mainInfo = {
            name: nameAndSurnameInput,
            role: roleInput,
            location: locationInput,
            aboutMe: aboutMeInput,
        }

        const validationErrors = [];

        if (nameAndSurnameInput.length < 3 && nameAndSurnameInput.length > 20) {
            validationErrors.push('Prosze wprowadzic od 3 do 20 znakow.');
        }

        if (roleInput.length < 3 && roleInput.length > 40) {
            validationErrors.push('Prosze wprowadzic od 3 do 40 znakow.');
        }

        if (locationInput.length < 3 && locationInput > 20) {
            validationErrors.push('Prosze wprowadzic od 3 do 20 znakow.');
        }

        if (aboutMeInput.length < 10 && aboutMeInput > 150) {
            validationErrors.push('Prosze wprowadzic od 10 do 150 znakow.');
        }

        setErrors(validationErrors);

        if (validationErrors.length === 0) {
            dispatch(updateMainInfo(mainInfo))
            localStorage.setItem('mainInfo', JSON.stringify(mainInfo))

            setNameAndSurnameInput('');
            setRoleInput('');
            setLocationInput('');
            setAboutMeInput('');
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
                    Edytuj główne informacje
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errors.length > 0 && <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>}
                <ModalDiv>
                    <ModalLabel>Imię i nazwisko</ModalLabel>
                    <ModalInput value={nameAndSurnameInput} onChange={e => setNameAndSurnameInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Rola</ModalLabel>
                    <ModalInput value={roleInput} onChange={e => setRoleInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Lokalizacja</ModalLabel>
                    <ModalInput value={locationInput} onChange={e => setLocationInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>O mnie</ModalLabel>
                    <ModalTextArea value={aboutMeInput} onChange={e => setAboutMeInput(e.target.value)} />
                </ModalDiv>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveClick}>Zapisz</Button>
                <Button variant="danger" onClick={props.onHide}>Anuluj</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MainInfoModal;