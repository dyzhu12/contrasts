var paragraphs = document.getElementsByClassName('sample-paragraph');
var titles = document.getElementsByClassName('sample-title');
var headers = document.getElementsByClassName('sample-header');
var subheaders = document.getElementsByClassName('sample-subheader');
var lists = document.getElementsByClassName('sample-list');
var bg = document.getElementsByClassName('content');

function updateColors(id) {
	var color = document.getElementById(id).value;
	switch(id) {
		case 'bg-col': 
			for (var i = 0; i < bg.length; i++) {
				bg[i].style.backgroundColor = color;
			}
			break;
		case 't-col':
			for (var i = 0; i < titles.length; i++) {
				titles[i].style.color = color;
			}
			break;
		case 'h-col':
			for (var i = 0; i < headers.length; i++) {
				headers[i].style.color = color;
			}
			break;
		case 'sh-col':
			for (var i = 0; i < subheaders.length; i++) {
				subheaders[i].style.color = color;
			}
			break;
		case 'p-col': 
			for (var i = 0; i < paragraphs.length; i++) {
				paragraphs[i].style.color = color;
			}
			break;
		case 'li-col':
			for (var i = 0; i < lists.length; i++) {
				lists[i].style.color = color;
			}
			break;
		default: break
	}

}