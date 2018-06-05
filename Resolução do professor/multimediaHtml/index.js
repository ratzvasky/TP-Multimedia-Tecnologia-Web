function remove() {
    $( ".removeItem" ).click(function(e) {
      console.log('id');
      var elem = $( this );
      e.preventDefault();
      var id = elem.closest('.itemlist').attr( "id" );
      $.ajax({
          url: "http://localhost:3000/team/players/" + id,
          type: 'DELETE',
          contentType:'application/json',
          success: function(result) {
             elem.closest('.itemlist').empty();
             getPlayers();
          },
          error: function(result){
            console.log(result);
          }
      });
      return false;
    });
}

function addPlayer(){
  let name = $('input[id="firstname"]').val();
  let lastName = $('input[id="lastname"]').val();
  let body = { name : name, lastName :lastName };

  $.post( "http://localhost:3000/team/players", body ,function( data, status ) {
    if(status === 200 || status.toString() === 'success') {
      alert('Sucess : name -> ' + data.name);
    }
    else  {
      alert('error');
    }
  });
}

function getPlayers(){
  $.get( "http://localhost:3000/team/players",function( data, status ) {
    if(status === 200 || status.toString() === 'success') {
      let list = $('.list');
      data.map((player) => {
        let item = '<div class= "itemlist" id="'+ player._id + '"> <div class="field">Player: </div> <div class="name">' + player.name + '</div> <div class="name">'+ player.lastName + '</div> <div class="removeItem">  X </div></div>';
        $(list).append(item);
      });
      remove();
    }
    else  {
      alert('error');
    }
  });
}

$(document).ready(function () {
  getPlayers();
  $('#get').click(function (event) {
    addPlayer();
  });
});