import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactSection from '../components/ContactSection'
import MainInfoSection from '../components/MainInfoSection'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import HobbiesSection from '../components/HobbiesSection'
import { resetHobby } from '../redux/slices/hobbiesSlice'
import { resetMainInfo } from '../redux/slices/mainInfoSlice'
import { resetContact } from '../redux/slices/contactSlice'
import { resetEducation } from '../redux/slices/educationSlice'
import { resetExperience } from '../redux/slices/experienceSlice'
import { resetSkills } from '../redux/slices/skillsSlice'
import ShowGeneratedCV from '../components/ShowGeneratedCV'
import { name as reduxName } from '../redux/slices/mainInfoSlice'
import { GenerateButton, ResetButton, WrapperButtonsElement } from '../styledcomponents/generatorStyled'

const GeneratorPage = () => {
    const [generateButtonStatus, setGenerateButtonStatus] = useState(false)
    const dispatch = useDispatch();
    const name = useSelector(reduxName)
    const resetFn = () => {
        if (window.confirm('Czy napewno chcesz wymazac dane?') === true) {
            dispatch(resetHobby());
            dispatch(resetMainInfo());
            dispatch(resetContact());
            dispatch(resetEducation());
            dispatch(resetExperience());
            dispatch(resetSkills());
            localStorage.clear();
        }
    }

    const checkIfLocalStorageDataIsNotEmpty = () => {
        if (name.length > 0) {
            return true;
        }
        return false;
    }

    return (
        <>
            {generateButtonStatus === false &&
                <>
                    <MainInfoSection />
                    <ContactSection />
                    <EducationSection />
                    <ExperienceSection />
                    <SkillsSection />
                    <HobbiesSection />
                    <WrapperButtonsElement>
                        {checkIfLocalStorageDataIsNotEmpty() === true && <GenerateButton onClick={e => setGenerateButtonStatus(true)}>Generuj</GenerateButton>}
                        <ResetButton onClick={resetFn}>Reset</ResetButton>
                    </WrapperButtonsElement>
                </>
            }
            {generateButtonStatus === true && <ShowGeneratedCV />}
        </>
    )
}

export default GeneratorPage

