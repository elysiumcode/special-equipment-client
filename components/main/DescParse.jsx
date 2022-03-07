import React from 'react';

const parseDescKeys = {
    desc: 'Краткое описание задачи',
    machineType: 'Тип техники',
    bodyVolume: 'Объем кузова, м3',
    arrowLength: 'Длина стрелы',
    tonnage: 'Тоннаж крана',
    craneType: 'Тип самосвала',
    shoulderLength: 'Длина плеча',
    addStuff: 'Дополнительное оборудование',
    ripper: 'Pыхлитель',
    groundType: 'Тип подъездного грунта',
    distance: 'Растояние от крана до точки выгрузки/загрузки'
}

const DescParse = ({desc}) => {

    const descJson = JSON.parse(desc)

    return (
        <div>
            {Object.keys(descJson).map(key => (
                <p>{parseDescKeys[key]}: {descJson[key]}</p>
            ))}
        </div>
    );
};

export default DescParse;
