import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateSkillsInfo } from '../../redux/slices/skillsSlice';
import { ModalDiv, ModalInput, ModalLabel } from '../../styledcomponents/modalsStyled';

const SkillsModal = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [levelInput, setLevelInput] = useState('');
    const [yearsOfExperienceInput, setYearsOfExperienceInput] = useState(0);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const skillsInfo = {
            name: nameInput,
            level: levelInput,
            yearsOfExperience: yearsOfExperienceInput,
            id: Math.floor(Math.random() * 9999999),
        }

        const validationErrors = [];

        if (nameInput.length <= 5 && nameInput.length > 60) {
            validationErrors.push('Prosze wprowadzic od 5 do 60 znakow.');
        }

        if (levelInput.length === "") {
            validationErrors.push('Prosze wprowadzic poziom zaawansowania.');
        }

        if (yearsOfExperienceInput < 0 && yearsOfExperienceInput >= 70) {
            validationErrors.push('Prosze wprowadzic poprawny poziom umiejetnosci.');
        }

        setErrors(validationErrors);

        if (validationErrors.length === 0) {
            dispatch(updateSkillsInfo(skillsInfo));

            if (localStorage.getItem('skillsInfo') === null) {
                localStorage.setItem('skillsInfo', JSON.stringify([skillsInfo]));
            }
            else {
                const localStorageData = JSON.parse(localStorage.getItem('skillsInfo'));
                localStorageData.push(skillsInfo);
                localStorage.setItem('skillsInfo', JSON.stringify(localStorageData))
            }
            setNameInput('');
            setLevelInput('');
            setYearsOfExperienceInput(0);
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
                    Edytuj umiejętności
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errors.length > 0 && <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>}
                <ModalDiv>
                    <ModalLabel>Nazwa</ModalLabel>
                    <ModalInput value={nameInput} onChange={e => setNameInput(e.target.value)} />
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Poziom doświadczenia</ModalLabel>
                    <select name="experienceLevel" value={levelInput} onChange={e => setLevelInput(e.target.value)}>
                        <option>Początkujacy</option>
                        <option>Zaawansowany</option>
                        <option>Expert</option>
                    </select>
                </ModalDiv>
                <ModalDiv>
                    <ModalLabel>Lata doświadczenia</ModalLabel>
                    <ModalInput value={yearsOfExperienceInput} onChange={e => setYearsOfExperienceInput(e.target.value)} />
                </ModalDiv>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveClick}>Zapisz</Button>
                <Button variant="danger" onClick={props.onHide}>Anuluj</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SkillsModal;