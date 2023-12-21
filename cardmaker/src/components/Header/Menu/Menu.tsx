import React from 'react'
import HeaderButton from '../HeaderButton/HeaderButton'
import css from './Menu.module.css'
/*import New_project from './New_project/New_project'
import Save_project from './Save_project/Save_project'
import Save_as_project from './Save_as_project/Save_as_project'
import Open_project from './Open_project/Open_project'
import Exit from './Exit/Exit'
*/

function Menu() {
  return (
    <div className={css.menu}>
      <HeaderButton text={'Menu'} onClick={() => alert('Menu clicked')} />
      {/*<New_project />
      <Save_project />
      <Save_as_project />
      <Open_project />
  <Exit />"*/}
    </div>
  )
}
export default Menu
