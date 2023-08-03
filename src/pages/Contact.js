import React,{useState} from 'react'

function Contact() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  return (
    <div>
      
      <form>
        <input
        type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input
        type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />


      </form>








 
        {/* <h3> Table </h3> */}


        

      {/* <table>
        <thead> 
          <tr> 
            <th> product name </th>
            <th> price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> mobile </td>
            <td> 10,000</td>
          </tr>
        </tbody>
      </table> */}


    </div>
  )
}

export default Contact