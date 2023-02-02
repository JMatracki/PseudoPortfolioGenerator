import React, { useState, useEffect } from 'react'
import HobbiesModal from './modals/HobbiesModal'
import { hobbies as reduxHobbies, updateHobbyInfo, removeHobbyInfo } from "../redux/slices/hobbiesSlice"
import { useSelector, useDispatch } from 'react-redux'
import { WrapperElement, SectionHeader, SectionContent, HeaderTitle, HeaderButton, SectionItem, SectionItemTitle, RemoveSectionInfoButton } from '../styledcomponents/generatorStyled'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoRemoveOutline } from 'react-icons/io5'

const HobbiesSection = () => {
    const [showModal, setShowModal] = useState(false);
    const hobbies = useSelector(reduxHobbies);

    const dispatch = useDispatch();

    useEffect(() => {
        const hobbiesInfo = JSON.parse(localStorage.getItem('hobbiesInfo'));
        if (hobbiesInfo) {
            hobbiesInfo.forEach((hobbies) => {
                dispatch(updateHobbyInfo(hobbies));
            })
        }
    }, [dispatch])

    const removeHobbyFn = (id) => {
        dispatch(removeHobbyInfo(id))

        let localStorageData = JSON.parse(localStorage.getItem('hobbiesInfo'));
        localStorageData = localStorageData.filter((hobby) => {
            return hobby.id !== id;
        })
        localStorage.setItem('hobbiesInfo', JSON.stringify(localStorageData))
    }


    return (
        <WrapperElement>
            <SectionHeader>
                <HeaderTitle>Hobby</HeaderTitle>
                <HeaderButton onClick={e => setShowModal(true)}><AiOutlinePlus /></HeaderButton>
            </SectionHeader>
            {hobbies.length > 0 && <SectionContent>{hobbies.map((hobby, index) =>
                <div key={index}>
                    <SectionItem>
                        <SectionItemTitle>Nazwa hobby</SectionItemTitle>
                        {hobby.name}
                    </SectionItem>
                    <RemoveSectionInfoButton onClick={e => removeHobbyFn(hobby.id)}><IoRemoveOutline /></RemoveSectionInfoButton>
                </div>
            )}
            </SectionContent>}
            {hobbies.length === 0 && <SectionContent>Wciśnij przycisk aby uzupełnić dane!</SectionContent>}
            <HobbiesModal show={showModal} onHide={() => setShowModal(false)} />
        </WrapperElement>
    )
}

export default HobbiesSection