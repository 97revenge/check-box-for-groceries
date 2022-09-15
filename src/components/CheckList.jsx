import React, { useEffect, useState } from 'react'
import Headline from '../styled-components/HeadLine'
import IntroHeadline from '../styled-components/IntroHeadline'
import TittleHeadline from '../styled-components/TitleHeadline'
import Heading from '../styled-components/Heading'
import HeadingText from '../styled-components/HeadingText'
import ListDisplay from '../styled-components/ListDisplay'
import FooterList from '../styled-components/FooterList'
import TextFooterList from '../styled-components/TextFooterList'
import axios from 'axios'




const api = axios.create({
  baseURL: `https://raw.githubusercontent.com/97revenge/check-box-for-groceries/main/rawAPI.json`
})

function CheckList() {
  const [checked, setChecked] = useState([])
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get('/')
    .then((res) =>{
      console.log(res.data)
    })


  })

const checkedLists = fetch('./')
  // const checkLists = [
  //   'Pizza 🍕 ',
  //   'Hamburguer 🍔',
  //   ' Glizzy 🌭',
  //   ' Ice-Cream🍿',
  //   ' Bacon 🥓',
  // ]

  const handleCheck = (event) => {
    var updatedList = [...checked] // rest operator : buscando todos os itens para o primeiro resultado
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
    }
    setChecked(updatedList)
  }

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + '' + <br></br> + item
      })
    : ''

  return (
    <>
      <Headline color="black">
        {' '}
        <IntroHeadline>
          <TittleHeadline>Esta é a sua Check-List 🥗</TittleHeadline>
        </IntroHeadline>
        <Heading>
          <HeadingText> Este sao os produtos</HeadingText>
          <></>
        </Heading>
        <ListDisplay>
          <ul>Pizza 🍕 </ul>
          <ul>Hamburguer 🍔</ul>
          <ul>Glizzy 🌭</ul>
          <ul>Ice-Cream🍿</ul>
          <ul>Bacon 🥓</ul>
          
        </ListDisplay>
        <FooterList>
          <TextFooterList>
           <strong> Itens Comfirmados : </strong>

          </TextFooterList>
     


        </FooterList>




      </Headline>
    </>
  )
}

export default CheckList
