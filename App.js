import React from 'react'

const App = () => {
  const arr=[
    {name:"Rahul",roll:37},
    {name:"Manish",roll:38},
    {name:"Monu",roll:39},
    {name:"Shiva",roll:40},
  ];
  return <>
  <table border='1'>
    <tbody>
    <tr>
      <td>Name</td>
      <td>Roll</td>
    </tr>
    
    {
      arr.map((val,id)=>
      <tr key={id}>
        <td>{val.name}</td>
        <td>{val.roll}</td>
      </tr>
      
      )
    }
    </tbody>
  </table>
  </>
}

export default App;