import React, { useState, useEffect } from 'react'
import SkillsModal from './modals/SkillsModal'
import { skills as reduxSkills, updateSkillsInfo, removeSkill } from '../redux/slices/skillsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { WrapperElement, SectionHeader, SectionContent, HeaderTitle, HeaderButton, SectionItem, SectionItemTitle, RemoveSectionInfoButton } from '../styledcomponents/generatorStyled'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoRemoveOutline } from 'react-icons/io5'

const SkillsSection = () => {
    const [showModal, setShowModal] = useState(false);
    const skills = useSelector(reduxSkills);

    const dispatch = useDispatch();

    useEffect(() => {
        const skillsInfo = JSON.parse(localStorage.getItem('skillsInfo'));
        if (skillsInfo) {
            skillsInfo.forEach((skill) => {
                dispatch(updateSkillsInfo(skill))
            })
        }
    }, [dispatch])

    const removeSkillFn = (id) => {
        dispatch(removeSkill(id))

        let localStorageData = JSON.parse(localStorage.getItem('skillsInfo'));
        localStorageData = localStorageData.filter((skill) => {
            return skill.id !== id;
        })
        localStorage.setItem('skillsInfo', JSON.stringify(localStorageData))
    }

    return (
        <WrapperElement>
            <SectionHeader>
                <HeaderTitle>Umiejętności</HeaderTitle>
                <HeaderButton onClick={e => setShowModal(true)}><AiOutlinePlus /></HeaderButton>
            </SectionHeader>
            {skills.length > 0 && <SectionContent>{skills.map((skill, index) =>
                <div key={index}>
                    <SectionItem>
                        <SectionItemTitle>Nazwa</SectionItemTitle>
                        {skill.name}
                    </SectionItem>
                    <SectionItem>
                        <SectionItemTitle>Poziom</SectionItemTitle>
                        {skill.level}
                    </SectionItem>
                    <SectionItem>
                        <SectionItemTitle>Lata doswiadczenia</SectionItemTitle>
                        {skill.yearsOfExperience}
                    </SectionItem>
                    <SectionItem>
                        <RemoveSectionInfoButton onClick={e => removeSkillFn(skill.id)}><IoRemoveOutline /></RemoveSectionInfoButton>
                    </SectionItem>
                </div>
            )}
            </SectionContent>}
            {skills.length === 0 && <SectionContent>Wciśnij przycisk aby uzupełnić dane!</SectionContent>}

            <SkillsModal show={showModal} onHide={() => setShowModal(false)} />
        </WrapperElement>
    )
}

export default SkillsSection