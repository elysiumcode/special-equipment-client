import React from 'react'
import Title from '../../components/main/Title/Title'
import styles from '../../styles/Search.module.scss';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Box } from '@material-ui/core'
import TextField from '../../components/auth/TextField'
import Button from '../../components/auth/Button'
import Select from '../../components/auth/Select'
import Date from '../../components/main/Date'
import DocContainer from '../../components/DocContainer'
import AccountContainer from '../../components/AccountContainer'
import OrdersContainer from '../../components/main/OrdersContainer';
import {useDispatch, useSelector} from "react-redux";
import {getAllOrdersThunk} from "../../store/reducers/ordersReducer";



function Search() {

  let machineTypes = [
    'Автокран',
    'Манипулятор',
    'Экс ЭП / ПП гусянка / колёсник',
    'Самосвал',
    'Тонар',
    'Бетононасос',
    'Экскаватор погрузчик',
    'Бульдозер',
    'Грейдер',
  ]



  const initialValues = {
    firstDate: '',
    secondDate: '',
    number: '',
    address: '',
    machineType: ''
  }

  const validationSchema = Yup.object().shape({
    firstDate: Yup.string().required('Дата обязательна!'),
    secondDate: Yup.string().required('Дата обязательна!'),
    address: Yup.string().required('Адрес обязателен!'),
    number: Yup.number().integer().required('Номер обязателен!'),
    machineType: Yup.string().required('Тип обязателен!')
  })


  const dispatch = useDispatch()
  const allOrders = useSelector(state => state.orders.allOrders)

  const showAllHandler = () => {
    dispatch(getAllOrdersThunk())
  }



  return (
    <DocContainer>
      <AccountContainer>
        <div className={styles.cabinet__container}>
          <div className={styles.title__wrapper}>
            <Title>Общая информация</Title>
          </div>
          <div className={styles.form__wrapper}>
            <Formik
              initialValues={{ ...initialValues }}
              validationSchema={validationSchema}
              onSubmit={values => console.log(values)}
            >
              <Form>
                <Grid container spacing={5}>
                  <Grid item xs={3}>
                    <Date
                      name="firstDate"
                      label="Дата от"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Date
                      name="secondDate"
                      label="Дата до"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      name="number"
                      label="Номер заявки"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined" call="clear">Очистить</Button>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="address"
                      label="Адрес"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="machineType"
                      label="Тип оборудования"
                      variant="standard"
                      options={machineTypes}
                    />
                  </Grid>
                  <Box sx={{
                    width: "50%",
                    heigth: 10
                  }}/>
                  <Grid item xs={3}>
                    <Button>Найти</Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button onClick={showAllHandler}>Показать все</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
          <OrdersContainer orders={allOrders}/>
        </div>
      </AccountContainer>
    </DocContainer>
  )
}

export default Search
