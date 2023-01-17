 const form = document.getElementById('form-detail');
 const il = document.getElementById('listOfUsers');
 

form.addEventListener('submit', userDetails); 
function userDetails(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phonenumber=event.target.phonenumber.value;
    
    let obj={
      name,
      email,
      phonenumber
    };

    axios.post('http://localhost:4000/user/add-user', obj)
    .then((response)=>{
      console.log(response);
      showUser(response.data.newUserDetail);
      
    })
    .catch((err)=>{ 
      document.body.innerHTML=document.body.innerHTML+'<h3>something went wrong</h3>';
      console.log(err);
    }) 
}

document.addEventListener('DOMContentLoaded', refresh)
function refresh(){
    axios.get('http://localhost:4000/user/get-users')
    .then((response)=>{
        console.log(response);
    for(var i=0;i<response.data.allUsers.length;i++){
        showUser(response.data.allUsers[i]);
    }
    })
    .catch((error)=>{
        console.log(error);
    })
}

    function showUser(user){
                
     document.getElementById('email').value = '';
     document.getElementById('username').value = '';
     document.getElementById('phonenumber').value ='';

     if(localStorage.getItem(user.email) !== null){
     removeUserFromScreen(user.email)
     }

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.id}> ${user.name} - ${user.email}
                        <button onclick=deleteUser('${user.id}')> Delete User </button>
                       <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user.id}')>Edit User </button>
                       </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
            }


function deleteUser(userid){
    axios.delete(`http://localhost:4000/user/delete-user/${userid}`)
    .then(()=>{
        removeUserFromScreen(userid);
    })
    .catch((error)=>{
      console.log(error);
    })
       
}

 function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);      
 }
}
        
