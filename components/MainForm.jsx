import React, {useState} from 'react'
import {Grid, Typography, Box} from '@material-ui/core'
import {Formik, Form} from 'formik'
import * as Yup from 'yup';
import {useDispatch} from 'react-redux'
import TextField from '../components/auth/TextField'
import Button from '../components/auth/Button'
import Select from '../components/auth/Select'
import AdditionalFields from '../components/auth/additionalFields'
import {addOrderThunk} from '../store/reducers/ordersReducer'

function MainForm({variant}) {


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



  const dispatch = useDispatch()
  const [currentType, setCurrentType] = useState(null)
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const initialValues = {

  }

  const formValidation = Yup.object().shape({
    machineType: Yup.string().required('Тип обязателен!'),
    craneType: Yup.string(),
    arrowLength: Yup.string(),
    tonnage: Yup.string(),
    groundType: Yup.string(),
    distance: Yup.number().integer(),
    dumpTruckType: Yup.string(),
    bodyVolume: Yup.number().integer(),
    bucketSize: Yup.string(),
    addStuff: Yup.string(),
    ripper: Yup.boolean(),
    shoulderLength: Yup.number().integer(),
    pumpVolume: Yup.number().integer(),
    time: Yup.number().integer(),
    payWay: Yup.string(),
    desc: Yup.string(),
    address: Yup.string().required('Адрес обязателен!'),
    fullName: Yup.string().required('Имя обязательно!'),
    phone: Yup.number().integer().typeError('Пожалуйста, введите валидный номер').required('Номер обязателен!'),
    email: Yup.string().email('Пожалуйста, введите валидную почту').required('Почта обязательна!')
  })


  const makePayload = (obj) => {
    const {fullName, phone, email, time, address, payWay, ...desc} = obj
    console.log(desc)
    dispatch(addOrderThunk({fullName, phone, email, time, address, payWay, desc}))
  }


  return (
    <Formik
            initialValues={{
              ...initialValues,
            }}
            validationSchema={formValidation}
            onSubmit={values => {
              makePayload(values)
            }}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Typography>
                    * ФИО
                  </Typography>
                  <TextField name="fullName" label="Введите ваши данные" variant={variant}/>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    * Телефон
                  </Typography>
                  <TextField name="phone" label="Номер телефона" variant={variant}/>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    * Электронная почта
                  </Typography>
                  <TextField name="email" label="Электронная почта" variant={variant}/>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    * Тип необходимой техники
                  </Typography>
                  <Select 
                    name="machineType" 
                    label="Выберите тип техники" 
                    options={machineTypes}
                    setCurrentType={setCurrentType}
                    multiple={true} variant={variant}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    * Адрес работ
                  </Typography>
                  <TextField name="address" label="Введите адрес" variant={variant}/>
                </Grid>
                <Grid item xs={12}>
                  {currentType !== null &&  <AdditionalFields type={currentType} variant={variant} />
                  }
                </Grid>
                <Box sx={{
                  width: '100%',
                  height: 20
                }}></Box>
                <Grid item xs={2}>
                  <Button call={'add'}>ДОБАВИТЬ</Button>
                </Grid>
                <Grid item xs={2}>
                  <Button call={'submit'}>ОТПРАВИТЬ</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
  )
}

export default MainForm
