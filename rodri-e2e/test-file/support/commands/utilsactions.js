/// <reference types="cypress"/>

class utilACtions {

  returnCurrentDate() {
    let today = new Date()
    let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = months[today.getMonth()]
    var yyyy = today.getFullYear();
    return [parseInt(dd), mm, yyyy]
  }

  returnIsoformat() {
    return new Date().toISOString().split("T")
  }

  getusername(data, name) {
    let username
    for (let index = 0; index < data.length; index++) {
      if (data[index].username === name) {
        console.log("encontre a Samantha")
        username = data[index].username
        return username
      }
    }
    return username
  }

selectUser(){
  let user
  const splitIndex = Cypress.env('splitIndex');
  else user = `security.test${splitIndex === 0 ? '' : '+' + splitIndex}@visma.com`;
  return user
  }
}

export default utilACtions
