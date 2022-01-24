import React from 'react'
import TextField from '../../TextField'
import Button from '../../Button'
import {Formik, Form} from 'formik'
import * as Yup from 'yup';
import Radio from '../../Radio'
import {Grid} from '@material-ui/core'
import styles from '../../../../styles/Registration.module.scss';




function Registration(props) {
  const initialValues = {
    email: '',
    password: '',
    stay: false
  }

  const validationSchema = Yup.object().shape({
    role: Yup.string(),
    email: Yup.string().email('Пожалуйста, введите валидную почту').required('Почта обязательна!'),
    password: Yup.string().required('Пароль обязателен!'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли должны совпадать!')
  })

  return (
    <>
      <Formik
        initialValues={{...initialValues}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values)
          props.setIsVisibleModal(false)
        }}
      >
        <Form>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Radio name="role" value="заказчик" label="Заказчик"/>
                <Radio name="role" value="исполнитель" label="Исполнитель"/>
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" variant="standard" label="Электронная почта"/>
              </Grid>
              <Grid item xs={12}>
                <TextField name="password" variant="standard" label="Пароль"/>
              </Grid>
              <Grid item xs={12}>
                <TextField name="passwordConfirmation" variant="standard" label="Подтвердите пароль"/>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit">Зарегистрироваться</Button>
              </Grid>
            </Grid>
        </Form>
      </Formik>
    </>
  )
}

export default Registration
