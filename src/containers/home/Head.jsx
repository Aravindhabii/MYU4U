import React from 'react'
import { Heading ,Head1} from './right.style'
import {SettingOutlined,BellOutlined } from '@ant-design/icons'


const Head = () => {
  return (
    <Heading>
        <BellOutlined className='setting'/>
        <span  className='setting'>
            <SettingOutlined/>
            <Head1 style={{marginLeft:'10px'}}>User</Head1>
        </span>

    </Heading>
  )
}

export default Head