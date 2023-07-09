import './styles.css'
import React, { useState, useEffect } from 'react'
import oscar from '../assets/images/oscar.svg'
import emmy from '../assets/images/emmy.svg'
import contactsJson from '../contacts.json'
// console.log(contacts)
// 🏆

const Main = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log('render!')
    // Lógica o llamada a función que deseas ejecutar la primera vez
    handlerClickRandomNumber()
  }, [])

  const handlerClickRandomNumber = () => {
    const contactsLenght = contactsJson.length - 1
    let contactList = []

    for (let i = 0; contactList.length < 5; i++) {
      const contact = contactsJson[getRandomNumber(0, 10)]
      const isExist = contactList.some(item => contact.id === item.id)

      if (isExist)
        i++
      else
        contactList.push(contact)
    }
    console.log(contactList)
    setContacts(contactList)
  }

  const handlerClickSortByPopularity = () => {
    const contactList = structuredClone(contacts)
    contactList.sort((a, b) => b.popularity - a.popularity)
    setContacts(contactList)
  }

  const handlerClickSortByName = () => {
    const contactList = structuredClone(contacts)
    contactList.sort(({ name: nameA }, { name: nameB }) => {
      return nameA.toUpperCase() < nameB.toUpperCase() ? -1
        : nameA.toUpperCase() > nameB.toUpperCase() ? 1 : 0
    })
    setContacts(contactList)
  }


  return (
    <div className='contenedor mt-2'>
      <h1 className='header-1'>IronContacts</h1>
      <div className='botonera'>
        <button className='button' onClick={handlerClickRandomNumber}>Add Random Contact</button>
        <button className='button' onClick={handlerClickSortByPopularity}>Sort by popularity</button>
        <button className='button' onClick={handlerClickSortByName}>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr className='header-4'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, pictureUrl, popularity, wonOscar, wonEmmy }) => {
            return (
              <tr key={id}>
                <td><img src={pictureUrl} alt={`Image of ${pictureUrl}`} /></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                <td>{wonOscar && <img className='icon-size' src={oscar} alt={name} />}</td>
                <td>{wonEmmy && <img className='icon-size' src={emmy} alt={name} />}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default Main


