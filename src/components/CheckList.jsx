import React, { useState } from 'react'

import {
  FooterList,
  Heading,
  HeadingText,
  IntroHeadline,
  ListDisplay,
  TextFooterList,
  TittleHeadline,
  Headline,
  Item,
} from './../styled-components/index'

function CheckList() {
  const [checked, setChecked] = useState([])

  const checkLists = [
    'Arroz 🍙 ',
    'Banana 🍌',
    'Peito de frango 🐔',
    ' Agua Mineral 🥛',
    ' Nozes  🍚',
  ]

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
        <IntroHeadline>
          <TittleHeadline>⁜ Esta é a sua Check-List ⁜</TittleHeadline>
        </IntroHeadline>
        <Heading>
          <HeadingText> 🔅 Produtos 🔅 </HeadingText>

          <></>
        </Heading>
        <ListDisplay>
          {checkLists.map((list, index) => (
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
