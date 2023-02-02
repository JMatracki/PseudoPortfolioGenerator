import React, { useState, useEffect } from 'react'
import MainInfoModal from './modals/MainInfoModal'
import { name as reduxName, role as reduxRole, location as reduxLocation, aboutMe as reduxAboutMe, updateMainInfo } from '../redux/slices/mainInfoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { WrapperElement, SectionHeader, SectionContent, HeaderTitle, HeaderButton, SectionItem, SectionItemTitle } from '../styledcomponents/generatorStyled'
import { CiEdit } from 'react-icons/ci'

const MainInfoSection = () => {
    const [showModal, setShowModal] = useState(false);
    const name = useSelector(reduxName)
    const role = useSelector(reduxRole)
    const location = useSelector(reduxLocation)
    const aboutMe = useSelector(reduxAboutMe)

    const dispatch = useDispatch();

    useEffect(() => {
        const mainInfo = JSON.parse(localStorage.getItem('mainInfo'));
        if (mainInfo) {
            dispatch(updateMainInfo(mainInfo))
        }
    }, [dispatch])

    return (
        <WrapperElement>
            <SectionHeader>
                <HeaderTitle>Dane podstawowe</HeaderTitle>
                <HeaderButton onClick={e => setShowModal(true)}><CiEdit /></HeaderButton>
            </SectionHeader>
            {name.length > 0 && <SectionContent>
                <SectionItem>
                    <SectionItemTitle>Imię i nazwisko</SectionItemTitle>
                    {name}
                </SectionItem>
                <SectionItem>
                    <SectionItemTitle>Rola</SectionItemTitle>
                    {role}
                </SectionItem>
                <SectionItem>
                    <SectionItemTitle>Lokalizacja</SectionItemTitle>
                    {location}
                </SectionItem>
                <SectionItem>
                    <SectionItemTitle>O mnie</SectionItemTitle>
                    {aboutMe}
                </SectionItem>
            </SectionContent>}
            {name.length === 0 && <SectionContent>Wciśnij przycisk aby uzupełnić dane!</SectionContent>}
            <MainInfoModal show={showModal} onHide={() => setShowModal(false)} />
        </WrapperElement>
    )
}

export default MainInfoSection