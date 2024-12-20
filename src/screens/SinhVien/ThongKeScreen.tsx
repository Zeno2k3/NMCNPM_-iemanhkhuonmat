import React from 'react'
import { HeaderComponent } from '../../components'
import { ThongKe } from '../../assets/svg'

const ThongKeScreen = () => {
  return (
    <>
      <HeaderComponent title={'Thống Kê'} icon = {<ThongKe/>} />
    </>
  )
}

export default ThongKeScreen
