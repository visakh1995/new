import React from 'react'

function List({people}) {
  return (
<>

{
    people.map((person) => {
        const{ id, name, age, image } = person;
        return (
            <div className="card flex" key={id}>
                <div>
                <img style={{width:"30%"}} src={image} alt={name} />
                </div>
                <div className="desc">
                    <h4>{name}</h4>
                    <p>Age : {age}</p>
                    <p>lorem ipsum lorem ipsum</p>
                </div>
  
            </div>
        )
    })
}
</>

  )}

export default List