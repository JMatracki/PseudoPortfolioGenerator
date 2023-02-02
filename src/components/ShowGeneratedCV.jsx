import React from 'react'
import { PDFViewer, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { name as mainInfoNameHandler, role as mainInfoRoleHandler, aboutMe as mainInfoAboutMeHandler, location as mainInfoLocationHandler } from '../redux/slices/mainInfoSlice';
import { address as contactInfoAddressHandler, phone as contactInfoPhoneHandler, email as contactInfoEmailHandler } from '../redux/slices/contactSlice';
import { schools as educationInfoArrayHandler } from '../redux/slices/educationSlice';
import { experience as experienceInfoArrayHandler } from '../redux/slices/experienceSlice';
import { skills as skillsInfoArrayHandler } from '../redux/slices/skillsSlice';
import { hobbies as hobbyInfoArrayHandler } from '../redux/slices/hobbiesSlice';
import { useSelector } from 'react-redux';
import { PDFWrapper } from '../styledcomponents/generatorStyled';

Font.register({
    family: "Roboto Light",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

Font.register({
    family: "Roboto Medium",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        padding: "20px"
    },
    mainInfoText: {
        fontSize: "10px",
        marginBottom: "10px",
        fontFamily: "Roboto Medium",
        fontWeight: "bold",
    },
    contactText: {
        fontSize: "10px",
        marginBottom: "10px",
        fontFamily: "Roboto Medium",
        fontWeight: "bold",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: "16px",
        marginBottom: "20px",
        fontFamily: "Roboto Medium"
    },
    dataText: {
        fontSize: "10px",
        marginBottom: "10px",
        fontFamily: "Roboto Light"
    }

});


const ShowGeneratedCV = () => {
    const mainInfoName = useSelector(mainInfoNameHandler)
    const mainInfoRole = useSelector(mainInfoRoleHandler)
    const mainInfoAboutMe = useSelector(mainInfoAboutMeHandler)
    const mainInfoLocation = useSelector(mainInfoLocationHandler)

    const contactInfoAdress = useSelector(contactInfoAddressHandler)
    const contactInfoPhone = useSelector(contactInfoPhoneHandler)
    const contactInfoEmail = useSelector(contactInfoEmailHandler)

    const educationInfoArray = useSelector(educationInfoArrayHandler)

    const experienceInfoArray = useSelector(experienceInfoArrayHandler)

    const skillsInfoArray = useSelector(skillsInfoArrayHandler)

    const hobbyInfoArray = useSelector(hobbyInfoArrayHandler)

    return (
        <PDFWrapper>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.mainInfoText}>{mainInfoName}</Text>
                        <Text style={styles.mainInfoText}>{mainInfoRole}</Text>
                        <Text style={styles.mainInfoText}>{mainInfoLocation}</Text>
                        <Text style={styles.mainInfoText}>{mainInfoAboutMe}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.contactText}>{contactInfoAdress}</Text>
                        <Text style={styles.contactText}>{contactInfoPhone}</Text>
                        <Text style={styles.contactText}>{contactInfoEmail}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.headerText}>Edukacja</Text>
                        {educationInfoArray.map((school, id) =>
                            <View key={id}>
                                <Text style={styles.dataText}>{school.schoolName} - {school.date} - {school.location}</Text>
                            </View>
                        )}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.headerText}>Doświadczenie</Text>
                        {experienceInfoArray.map((experience, id) =>
                            <View key={id} style={{ marginBottom: "20px" }}>
                                <View>
                                    <Text style={styles.dataText}>{experience.date}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dataText}>{experience.name}</Text>
                                    {experience.tasksInfo.split(';').map((item, index) => <View key={index}><Text style={styles.dataText}>{item.trim()}</Text></View>)}
                                </View>
                            </View>
                        )}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.headerText}>Umiejętności</Text>
                        {skillsInfoArray.map((skill, id) =>
                            <View key={id}>
                                <Text style={styles.dataText}>{skill.name} - {skill.level} - Lata doświadczenia: {skill.yearsOfExperience} </Text>
                            </View>
                        )}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.headerText}>Zainteresowania</Text>
                        {hobbyInfoArray.map((hobby, id) =>
                            <View key={id}>
                                <Text style={styles.dataText}>{hobby.name}</Text>
                            </View>
                        )}
                    </View>
                </Page>
            </Document>
        </PDFWrapper>
    )
}

export default ShowGeneratedCV