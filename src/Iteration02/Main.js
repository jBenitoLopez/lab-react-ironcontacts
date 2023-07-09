import './styles.css'
import oscar from '../assets/images/oscar.svg'
import emmy from '../assets/images/emmy.svg'
import contacts from '../contacts.json'

function Main() {
  let contactList = contacts.slice(0, 5).map((contact, ix) => {
    if(ix===2) contact.wonOscar = true
    if(ix===4) contact.wonEmmy = true
    return contact
  })


  console.log(contactList)
  // 🏆

  return (
    <div className='contenedor mt-2'>
      <h1 className='header-1'>IronContacts</h1>
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
          {contactList.map(function ({ id, name, pictureUrl, popularity, wonOscar, wonEmmy}) {
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

export default Main
