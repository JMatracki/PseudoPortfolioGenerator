import React, { useState, useEffect } from 'react'
import ContactModal from './modals/ContactModal'
import { address as reduxAddress, phone as reduxPhone, email as reduxEmail, updateContactInfo } from '../redux/slices/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
import { WrapperElement, SectionHeader, SectionContent, HeaderTitle, HeaderButton, SectionItem, SectionItemTitle } from '../styledcomponents/generatorStyled'
import { CiEdit } from 'react-icons/ci'

const ContactSection = () => {
    const [showModal, setShowModal] = useState(false);
    const address = useSelector(reduxAddress);
    const phone = useSelector(reduxPhone);
    const email = useSelector(reduxEmail);

    const dispatch = useDispatch();

    useEffect(() => {
        const contactInfo = JSON.parse(localStorage.getItem('contactInfo'));
        if (contactInfo) {
            dispatch(updateContactInfo(contactInfo))
        }
    }, [dispatch])

    return (
        <WrapperElement>
            <SectionHeader>
                <HeaderTitle>Dane kontaktowe</HeaderTitle>
                <HeaderButton onClick={e => setShowModal(true)}><CiEdit /></HeaderButton>
            </SectionHeader>
            {address.length > 0 && <SectionContent>
                <SectionItem>
                    <SectionItemTitle>Adres zamieszkania</SectionItemTitle>
                    {address}
                </SectionItem>
                <SectionItem>
                    <SectionItemTitle>Numer telefonu</SectionItemTitle>
                    {phone}
                </SectionItem>
                <SectionItem>
                    <SectionItemTitle>Adres Email</SectionItemTitle>
                    {email}
                </SectionItem>
            </SectionContent>}
            {address.length === 0 && <SectionContent>Wciśnij przycisk aby uzupełnić dane!</SectionContent>}
            <ContactModal show={showModal} onHide={() => setShowModal(false)} />
        </WrapperElement>
    )
}

export default ContactSection