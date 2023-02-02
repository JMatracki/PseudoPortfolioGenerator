import React, { useState, useEffect } from 'react'
import ExperienceModal from './modals/ExperienceModal'
import { experience as reduxExperience, removeExperienceInfo, updateExperienceInfo } from '../redux/slices/experienceSlice'
import { useSelector, useDispatch } from 'react-redux'
import { WrapperElement, SectionHeader, SectionContent, HeaderTitle, HeaderButton, SectionItem, SectionItemTitle, RemoveSectionInfoButton, ExperienceList } from '../styledcomponents/generatorStyled'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoRemoveOutline } from 'react-icons/io5'

const ExperienceSection = () => {
    const [showModal, setShowModal] = useState(false);
    const experience = useSelector(reduxExperience);

    const dispatch = useDispatch();

    useEffect(() => {
        const experienceInfo = JSON.parse(localStorage.getItem('experienceInfo'));
        if (experienceInfo) {
            experienceInfo.forEach((experience) => {
                dispatch(updateExperienceInfo(experience))
            })
        }
    }, [dispatch])

    const removeExperienceFn = (id) => {
        dispatch(removeExperienceInfo(id))

        let localStorageData = JSON.parse(localStorage.getItem('experienceInfo'));
        localStorageData = localStorageData.filter((experience) => {
            return experience.id !== id;
        })
        localStorage.setItem('experienceInfo', JSON.stringify(localStorageData))
    }

    return (
        <WrapperElement>
            <SectionHeader>
                <HeaderTitle>Doświadczenie</HeaderTitle>
                <HeaderButton onClick={e => setShowModal(true)}><AiOutlinePlus /></HeaderButton>
            </SectionHeader>
            {experience.length > 0 && <SectionContent>{experience.map((experience, index) =>
                <div key={index}>
                    <SectionItem>
                        <SectionItemTitle>Doświadczenie</SectionItemTitle>
                        {experience.name}
                    </SectionItem>
                    <SectionItem>
                        <SectionItemTitle>Okres pracy</SectionItemTitle>
                        {experience.date}
                    </SectionItem>
                    <SectionItem>
                        <SectionItemTitle>Zakres pracy</SectionItemTitle>
                        <ExperienceList>
                            {experience.tasksInfo.split(';').map((item, index) => <li key={index}>{item}</li>)}
                        </ExperienceList>

                    </SectionItem>
                    <SectionItem>
                        <RemoveSectionInfoButton onClick={e => removeExperienceFn(experience.id)}><IoRemoveOutline /></RemoveSectionInfoButton>
                    </SectionItem>
                </div>
            )}
            </SectionContent>}
            {experience.length === 0 && <SectionContent>Wciśnij przycisk aby uzupełnić dane!</SectionContent>}
            <ExperienceModal show={showModal} onHide={() => setShowModal(false)} />
        </WrapperElement>
    )
}

export default ExperienceSection