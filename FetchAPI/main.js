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

        
