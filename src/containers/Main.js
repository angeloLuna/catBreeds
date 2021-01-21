import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { getAllCats } from '../services/api'
import Header from '../components/Header'
import SelectBreed from '../components/SelectBreed'
import Map from '../components/Map'


const Main = () => {
  const [catsList, setCatsList] = useState([])
  const [error, setError] = useState('')
  const [selectedItem, setSelectedItem] = useState('')


  useEffect(() => {
    getAllCats()
      .then(res => setCatsList(res))
      .catch(err => setError(err))
  }, [])

  const handleSelectChange = (itemValue, itemPosition) => {
    console.log('change', itemValue, itemPosition)
    setSelectedItem(itemValue)
  }


  return (
    <View>
      <Header />
      <SelectBreed catsList={catsList} selectedItem={selectedItem} handleSelectChange={handleSelectChange} />
      <Map />
    </View>
  )
}

export default Main