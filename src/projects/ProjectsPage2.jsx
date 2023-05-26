import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Arle',
    lastName: 'Morales Ortiz'
  };

const ProjectsPage2 = ()=>{
  if (Object.keys(user).length === 0) {
    return <h1>Hello, Stranger.</h1>;
  }
  return <h1>Hello, {formatName(user)}!</h1>;
}

export default ProjectsPage2


