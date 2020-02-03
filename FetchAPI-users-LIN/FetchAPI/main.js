fetch('https://jsonplaceholder.typicode.com/users').then(
            function(result){
                return result.json();
            }
        ).then(
            function(j){
                var $info = document.querySelector("tbody");

                console.log(j);
                //https://jsonplaceholder.typicode.com/users
                for(i =0; i<j.length; i++){
                    var dati = document.createElement("tr");
                   
                    
                     dati.innerHTML = `  
                                <td > ${j[i].id} </td>     
                                <td > ${j[i].name} </td>  
                                <td > ${j[i].username} </td>
                                <td > ${j[i].email} </td>
                                <td > ${j[i].address.street} </td>
                                <td > ${j[i].phone} </td>
                                <td > ${j[i].company.name} </td>
                                `;                              
                   
                    $info.appendChild(dati);
                    
                }
            }
        )

           function myFunction() {

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  input.placeholder ="Search for ID.."
  for  (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }



}
        