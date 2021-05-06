

var count;
  $(document).ready(function(){
   
   
    $("#button").on("click", function(){
      var a = document.getElementById("email").value;
      var b = document.getElementById("pass").value;
      
      $.getJSON('../js/login.json',function(data){
       
        var dat ='';
            table_data = data;
            
             console.log(table_data);
            
             $.each(data,function(key,value){
                if(value.Email == a && value.Password == b){                  
                  alert("Done");
                  
                  count = 1;
                }
             });
             if(count == 1){
              window.location.href = "../html/welcome.html";
              return false;
             } 
             
      });
    }); 
    
 });

              

// $(function(){
//     $('#table_id').dataTable({
//       "ajax" : "Q2.json",
//       "columns" : [
//         { "data" : "ID" },
//         { "data" : "Sender" },
//         { "data" : "Received" },
//       ]
//     });
// } );

// var table;
// var table_data;
//   $(document).ready( function () {
//     $('#table_id').dataTable();

//   $.getJSON('../js/Q2.json',function(data){
//      var dat ='';
//     table_data = data;
    
//     console.log(table_data);

    
//     $.each(data,function(key,value){
     
    
      
//        dat+='<tr>';
//        dat+='<td>'+value.ID+'</td>';
//        dat+='<td>'+value.Sender+'</td>';
//        dat+='<td>'+value.Recieved+'</td>';
//        dat+='</tr>';
//       //}
//     });
//     $('#table_id').append(dat);
//   });
// } );
