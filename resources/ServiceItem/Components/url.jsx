import React from 'react'

const CityContentInList = (props) => {
    return <a href={"/qrcode/gen/" + props.record.id} target="_blank">QRcode</a>;
};

export default CityContentInList