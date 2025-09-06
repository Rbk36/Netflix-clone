import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'
const RowList = () => {
  return (
    <>
    <Row title='NetflixOrignals'
    fetchUrl={requests.fetchNetflixOrignals}/>
     <Row/>
      <Row/>
       <Row/>
    </>
  )
}

export default RowList