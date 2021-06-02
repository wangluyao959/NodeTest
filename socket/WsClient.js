let ws = new WebSocket('ws://127.0.0.1:9000');

ws.onopen = ()=>{
  ws.send('大家好')
}

ws.onmessage = (event)=>{
  let chatroom = document.querySelector('#chatroom');
  chatroom.innerHTML += '<br/>'+event.data;
}

ws.onclose = ()=>{
  alert("Closed");
}
ws.onerror = (err)=>{
  alert('Error：'+err)
}