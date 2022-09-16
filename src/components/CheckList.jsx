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

  const rawCheckLists = [
    {
      id: 1,
      product: 'Arroz 🍙',
      price: '$19,98',
    },
    {
      id: 2,
      product: 'Banana 🍌 ',
      price: '$5,45',
    },

    {
      id: 3,
      product: 'Peito de frango 🐔',
      price: '$19,98',
    },
    {
      id: 4,
      product: 'Agua Mineral 🥛',
      price: '$1,79',
    },
    {
      id: 5,
      product: 'Nozes sem casca 🍚',
      price: '$19,98',
    },
  ]

  const checkLists = rawCheckLists.map((item) => item.product)

  // seria bastante interessante se tivessemos um Hover em `item.product` de `item.price`, trazendo as mesmas regras de negocios que estamos usando.

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
