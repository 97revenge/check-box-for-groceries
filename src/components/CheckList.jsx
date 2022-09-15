import React, { useEffect, useState } from 'react'
// import { FooterList, Heading, HeadingText, IntroHeadline,  ListDisplay, TextFooterList, TittleHeadline , Headline} from './../styled-components/index';
import Headline from '../styled-components/HeadLine'
import IntroHeadline from '../styled-components/IntroHeadline'
import TittleHeadline from '../styled-components/TitleHeadline'
import Heading from '../styled-components/Heading'
import HeadingText from '../styled-components/HeadingText'
import ListDisplay from '../styled-components/ListDisplay'
import FooterList from '../styled-components/FooterList'
import TextFooterList from '../styled-components/TextFooterList'
import Item from '../styled-components/Item'
import axios from 'axios'

function CheckList() {
  const [checked, setChecked] = useState([])
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/97revenge/check-box-for-groceries/main/rawAPI.json',
      )
      .then((res) => {
        setPost(res.data)
        console.log(post)
      })
  }, [setPost])

  // const checkedLists = fetch('./')
  const checkLists = [
    'Arroz 🍙 ',
    'Banana 🍌',
    'Peito de frango 🐔',
    ' Agua Mineral 🥛',
    ' Nozes  🍚',
  ]
  // const checkLists = {setPost} ; 





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
        return total + '|      ' + item 
      })
    : 'Sem Itens... 😢' 

  return (
    <>
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
      <Headline>
        {' '}
        <IntroHeadline>
          <TittleHeadline>⁜ Esta é a sua Check-List ⁜</TittleHeadline>
        </IntroHeadline>
        <Heading>
          <HeadingText> Produtos 👇 </HeadingText>

          <></>
        </Heading>
        <ListDisplay>
          {/* block here */}
        {checkLists.map((list, index)=> (
          <Item key={index}>
            <input type="checkbox" value={list} onChange={handleCheck} />
            <span> {list}</span>
          </Item>
          
        ))}


        </ListDisplay>
        <FooterList>
          <TextFooterList>
            <strong> Itens Comfirmados ✅: {checkedItems} </strong>
          </TextFooterList>
        </FooterList>
      </Headline>
    </>
  )
}

export default CheckList
