import React, { useState } from 'react'
import Background from './Background'

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
      product: 'Nozes  🍚',
      price: '$19,98',
    },
  ]

  const checkLists = rawCheckLists.map((item) => item.product) // {checkedItems}
  const priceLists = rawCheckLists.map((item) => item.price) // hover for checkedItems
  // console.log(checkLists.map((currentValue) => currentValue.slice(-1)))

  function sliceThis(num) {
    return num.slice(-1)
  }

  const handleCheck = (event) => {
    var updatedList = [...checked]
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
      <Background />

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
