console.log('The Iron Yard Rocks');

$(function() {

	function renderTemplate(templateId, location, model) {
    var templateString = $(templateId).text();
    var templateFunction = _.template(templateString);
    var renderedTemplate = templateFunction(model);
    $(location).append(renderedTemplate);
	}


	$("button").on("click", function() {
		var todo = $("input").val();
		
		$ajax("http://tiny-pizza-server.herokuapp.com/collections/allan-todo", {
			type: 'POST',
			dataType: 'json'
			data: todo,
		}).done(function(data) {
			
				$ajax({
					type: 'GET',
					url: "http://tiny-pizza-server.herokuapp.com/collections/allan-todo",
					todo: todo,
					
				})
				renderTemplate('#template-user', '.list', data);
		  }) 
	});

});

// $(document).ready(function() {
//     $('button').click(function() {
//     	var todo = $("input").val();
//         $('#list').append("<p>"+todo+"</p>");
//     });
// });
// $.ajax("http://tiny-pizza-server.herokuapp.com/collections/allan/5417569584d2ee0200000076",
// 	{
// 		type: "POST",
// 		dataType: 'json',
// 		data: {
// 			toppings: ['food']
// 		}
// 	})

// $.ajax("http://tiny-pizza-server.herokuapp.com/collections/allan/5417569584d2ee0200000076",


// 	})

