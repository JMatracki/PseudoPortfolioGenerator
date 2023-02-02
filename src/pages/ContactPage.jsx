import React, { useRef } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ContactAreaButton, ContactContainer, ContactInputs, ContactMainText, ContactTextAreas, ErrorsParagraph } from '../styledcomponents/contactpageStyled';

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string().required('Imię jest obowiązkowe!').min(3, 'Podaj przynajmniej 3 znaki!').max(20, 'Maksymalna długość imienia to 20 znaków!'),
  email: Yup.string().required('Email jest obowiązkowy!').email('Podaj poprawny adres email!'),
  subject: Yup.string().required('Temat jest obowiązkowy!').min(5, 'Podaj minimum 5 znaków!'),
  content: Yup.string().required('Treść jest obowiązkowa!').min(10, 'Podaj minimum 10 znaków!')
})

const ContactPage = () => {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      content: ""
    },
    validationSchema: ContactValidationSchema,
    onSubmit: (values) => {
      emailjs.sendForm('service_ft4didz', 'template_l3lw6vg', form.current, 'XU80HmNix-D4JRwkw')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  })

  return (
    <ContactContainer>
      <ContactMainText>Skontaktuj się z nami!</ContactMainText>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <div>
          <ContactInputs name="name" placeholder="Nazwa" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name && <ErrorsParagraph>{formik.errors.name}</ErrorsParagraph>}
        </div>
        <div>
          <ContactInputs name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && <ErrorsParagraph>{formik.errors.email}</ErrorsParagraph>}
        </div>
        <div>
          <ContactInputs name="subject" placeholder="Temat" onChange={formik.handleChange} value={formik.values.subject} />
          {formik.errors.subject && <ErrorsParagraph>{formik.errors.subject}</ErrorsParagraph>}
        </div>
        <div>
          <ContactTextAreas name="content" placeholder="Treść" onChange={formik.handleChange} value={formik.values.content} />
          {formik.errors.content && <ErrorsParagraph>{formik.errors.content}</ErrorsParagraph>}
        </div>
        <ContactAreaButton type="submit" value="Send">Wyślij wiadomość</ContactAreaButton>
      </form>
    </ContactContainer>
  )
}

export default ContactPage