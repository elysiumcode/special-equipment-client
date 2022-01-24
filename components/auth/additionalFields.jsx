import React from 'react'
import Select from './Select'
import TextField from './TextField'
import {Grid, Typography, Box} from '@material-ui/core'
import MultiSelect from './MultiSelect'
import Checkbox from './Checkbox'


function BasicFields({variant}) {
  
  let payWays = {
    cash: 'Наличный',
    card: 'Безналичный',
    vat: 'НДС'
  }

  return (
    <>
      <Grid item xs={6}>
        <TextField name="desc" label="Краткое описание задачи" variant={'filled' && variant}/>
      </Grid>
      <Grid item xs={6}>
        <TextField name="time" label="Примерное время в часах" variant={'filled' && variant}/>
      </Grid>
      <Grid item xs={6}>
        <Select name="payWay" options={payWays} label="Способ оплаты" variant={'filled' && variant}/>
      </Grid>
    </>
  )
}



function additionalFields({type, variant}) {

  const groundTypes = ['Асфальт', 'Гравий', 'Грунт'];
  const tonnages = ['5т', '10т', '16т', '25т', '32т', '50т', '60т', '70т', '100т', '200т'];
  const arrowLength = ['16м', '22м', '28м', '32м', '40м', '50м', '60м', '70м', '80м'];
  const craneTypes = ['Шоссейник', 'Вездеход']
  let addArr = []
  switch(type) {
    case 'Автокран': {
      addArr = [
        <Select name="craneType" label="Тип крана" options={craneTypes} variant={'filled' && variant} />,
        <Select name="arrowLength" label="Длина стрелы" options={arrowLength} variant={'filled' && variant}/>,
        <Select name="tonnage" label="Тоннаж крана" options={tonnages} variant={'filled' && variant}/>,
        <Select name="groundType" label="Тип подъездного грунта" options={groundTypes} variant={'filled' && variant}/>,
        <TextField name="distance" label="Растояние от крана до точки выгрузки/загрузки" inputProps={{type: 'number'}} variant={'filled' && variant}/>
      ]
      break;
    }
    case 'Манипулятор': {
      addArr = [
        <TextField name="bodyVolume" label="Объем кузова, м3" inputProps={{type: 'number'}} variant={'filled' && variant}/>,
        <Select name="arrowLength" label="Длина стрелы" options={arrowLength} variant={'filled' && variant}/>,
        <Select name="tonnage" label="Тоннаж крана" options={tonnages} variant={'filled' && variant}/>,
      ]
      break;
    }
    case 'Экс ЭП / ПП Гусянка / Колёсник': {
      addArr = [
        <TextField name="bodyVolume" label="Объем кузова, м3" inputProps={{type: 'number'}} variant={'filled' && variant}/>
      ]
      break;
    }
    case 'Самосвал': {
      addArr = [
        <Select name="craneType" label="Тип самосвала" options={craneTypes} variant={'filled' && variant}/>,
        <TextField name="bodyVolume" label="Объем кузова, м3" inputProps={{type: 'number'}} variant={'filled' && variant}/>,
        <TextField name="shoulderLength" label="Длина плеча" inputProps={{type: 'number'}} variant={'filled' && variant}/>
      ]
      break;
    }
    case 'Тонар': {
      addArr = [
        <TextField name="bodyVolume" label="Объем кузова, м3" inputProps={{type: 'number'}} variant={'filled' && variant}/>,
        <Select name="tonnage" label="Тоннаж крана" options={tonnages} variant={'filled' && variant}/>,
        <TextField name="shoulderLength" label="Длина плеча" inputProps={{type: 'number'}} variant={'filled' && variant}/>
      ]
      break;
    }
    case 'Бетононасос': {
      addArr = [
        <Select name="arrowLength" label="Длина стрелы" options={arrowLength} variant={'filled' && variant}/>,
        <TextField name="pumpVolume" label="Объем кузова, м3" inputProps={{type: 'number'}} variant={'filled' && variant}/>
      ]
      break;
    }
    case 'Экскаватор погрузчик': {
      addArr = [
        <MultiSelect name='addStuff' label='Навесное оборудование' options={['30см', '40см', '60см', 'Гидромолот', 'Ковш', 'Виброплита']}  variant={'filled' && variant}/>,
      ]
      break;
    }
    case 'Бульдозер': {
      addArr = [
        <Select name='tonnage' label='Тоннаж' options={['16т', '20т', '25т', '30т', '40т', '50т', '60т']} variant={'filled' && variant} />,
        <Checkbox name="ripper" label="Pыхлитель" variant={'filled' && variant}/>
      ]
      break;
    }
    case 'Грейдер': {
      addArr = [
        <Select name='tonnage' label='Тоннаж' options={['14т', '18т', '25т']} variant={'filled' && variant} />
      ]
      break;
    }
    default: addArr = [];
  }

  return (
    <Grid container spacing={3}>
      <BasicFields variant={variant}/>
      {addArr.map(item => (
        <Grid item xs={6}>{item}</Grid>
      ))}
    </Grid>
  )
}


export default additionalFields
