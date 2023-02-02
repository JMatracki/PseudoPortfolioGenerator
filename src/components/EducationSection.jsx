import React, { useState, useEffect } from 'react'
import EducationModal from './modals/EducationModal'
import { schools as reduxSchools, updateEducationInfo, removeEducationInfo } from "../redux/slices/educationSlice"
import { useSelector, useDispatch } from 'react-redux'
import { WrapperElement, SectionHeader, SectionContent, HeaderTitle, HeaderButton, SectionItem, SectionItemTitle, RemoveSectionInfoButton } from '../styledcomponents/generatorStyled'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoRemoveOutline } from 'react-icons/io5'

const EducationSection = () => {
    const [showModal, setShowModal] = useState(false);
    const schools = useSelector(reduxSchools);

    const dispatch = useDispatch();

    useEffect(() => {
        const educationInfo = JSON.parse(localStorage.getItem('schools'));
        if (educationInfo) {
            educationInfo.forEach((school) => {
                dispatch(updateEducationInfo(school))
            })
        }
    }, [dispatch])

    const removeSchoolFn = (id) => {
        dispatch(removeEducationInfo(id))

        let localStorageData = JSON.parse(localStorage.getItem('schools'));
        localStorageData = localStorageData.filter((school) => {
            return school.id !== id;
        })
        localStorage.setItem('schools', JSON.stringify(localStorageData))
    }

    return (
        <WrapperElement>
            <SectionHeader>
                <HeaderTitle>Edukacja</HeaderTitle>
                <HeaderButton onClick={e => setShowModal(true)}><AiOutlinePlus /></HeaderButton>
            </SectionHeader>
            {schools.length > 0 && <SectionContent>
                {schools.map((school, index) =>
                    <div key={index}>
                        <SectionItem>
                            <SectionItemTitle>Ukończona szkoła</SectionItemTitle>
                            {school.schoolName}
                        </SectionItem>
                        <SectionItem>
                            <SectionItemTitle>Data ukończenia</SectionItemTitle>
                            {school.date}
                        </SectionItem>
                        <SectionItem>
                            <SectionItemTitle>Lokalizacja ukończenia</SectionItemTitle>
                            {school.location}
                        </SectionItem>
                        <SectionItem>
                            <RemoveSectionInfoButton onClick={e => removeSchoolFn(school.id)}><IoRemoveOutline /></RemoveSectionInfoButton>
                        </SectionItem>
                    </div>
                )}
            </SectionContent>}
            {schools.length === 0 && <SectionContent>Wciśnij przycisk aby uzupełnić dane!</SectionContent>}
            <EducationModal show={showModal} onHide={() => setShowModal(false)} />
        </WrapperElement>
    )
}

export default EducationSection