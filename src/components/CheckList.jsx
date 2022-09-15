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
import axios from 'axios'






function CheckList() {

  const [checked, setChecked] = useState([])
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/97revenge/check-box-for-groceries/main/rawAPI.json')
    .then((res) =>{
      setPost(res.data);
      console.log(data);
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
 <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
</div>
      <Headline>
        {' '}
        <IntroHeadline>
          <TittleHeadline>⁜ Esta é a sua Check-List ⁜</TittleHeadline>
        </IntroHeadline>
        <Heading>
          <HeadingText> Produtos 👇  </HeadingText>
          
          <></>
        </Heading>
        <ListDisplay>
          <ul> <input type="checkbox" name="Pizza 🍕" id="" />  🍕 </ul>
          <ul> <input type="checkbox" name="Hamburguer 🍔" id="" /> 🍔</ul>
          <ul><input type="checkbox" name="Glizzy 🌭" id="" />🌭</ul>
          <ul><input type="checkbox" value="Ice-Cream🍿" />🍿</ul>
          <ul><input type="checkbox" name="Bacon 🥓" id="" /> 🥓</ul>
          
        </ListDisplay>
        <FooterList>
          <TextFooterList>
           <strong> Itens Comfirmados ✅: </strong>

          </TextFooterList>
     


        </FooterList>




      </Headline>
     
      
    </>
  )
}

export default CheckList ; 
