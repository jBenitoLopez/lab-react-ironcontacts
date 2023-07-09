import './styles.css'
import contacts from '../contacts.json'

function Main() {
  const contactList = contacts.slice(0, 5)

  console.log(contactList)

  return (
    <div className='contenedor mt-2'>
      <h1 className='header-1'>IronContacts</h1>
      <table>
        <thead>
          <tr className='header-4'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(function ({ id, name, pictureUrl, popularity }) {
            return (
              <tr key={id}>
                <td><img src={pictureUrl} alt={`Image of ${pictureUrl}`} /></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Main
