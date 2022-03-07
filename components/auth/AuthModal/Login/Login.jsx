import React from 'react'
import TextField from '../../TextField'
import Button from '../../Button'
import {Formik, Form} from 'formik'
import * as Yup from 'yup';
import Checkbox from '../../Checkbox'
import {Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux' 
import {loginThunk} from '../../../../store/reducers/userReducer'


function Login(props) {

  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
    stay: false,
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Пожалуйста, введите валидную почту').required('Почта обязательна!'),
    password: Yup.string().required('Пароль обязателен!')
  })

  return (
    <>
      <Formik
        initialValues={{...initialValues}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values)
          dispatch(loginThunk({
            email: values.email,
            password: values.password
          }))
          props.setIsVisibleModal(false)
        }}
      >
        <Form>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField name="email" variant="standard" label="Электронная почта"/>
              </Grid>
              <Grid item xs={12}>
                <TextField name="password" variant="standard" label="Пароль"/>
              </Grid>
              <Grid item xs={12}>
                <Checkbox name="stay" label="Остаться в системе"/>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit">Войти</Button>
              </Grid>
            </Grid>
        </Form>
      </Formik>
    </>
  )
}

export default Login
