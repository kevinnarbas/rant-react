import React from 'react'
import SearchList from '../../components/SearchList/SearchList'

const MainPage = (props) => {
  const user = props.user ? 
  <SearchList user={props.user} />
  :
  <SearchList />

  return(
    <>
      {user}
    </>
  )

}
export default MainPage