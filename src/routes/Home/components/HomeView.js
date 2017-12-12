import React from 'react'
import './HomeView.less'
import { Icon, Grid } from 'antd-mobile';


import { Button } from 'antd-mobile';

export const HomeView = () => (
  <div>
    <h4 className="welcome">Welcome!</h4>
    <Icon type='cross-circle' />

    <Button  type="primary">default</Button>
    <Button disabled>default disabled</Button>

  </div>
)

export default HomeView
