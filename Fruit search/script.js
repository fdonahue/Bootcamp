const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.onkeyup = function(){

	let result = [];
	let inputResult = input.value;
	if (inputResult.length){
		result = fruit.filter((keyword)=>{
			return keyword.toLowerCase().includes(inputResult.toLowerCase());
		});
		console.log(result);
	}
	display(result);
}


function display(result){
	const content = result.map((list)=>{
		return "<li onclick=selectInput(this)>" + list + "</li>";
	});

	suggestions.innerHTML = content.join('');
}

function selectInput(list){
	input.value = list.innerHTML;
	suggestions.innerHTML='';
};

// function search(str) {
// 	let results = [];
// // iterate over fruits
// 	for (i=0; i < fruit.length; i++){
// 		if (str === fruit[i].slice(0, str.length)){
// 			results.push(fruit[i]);
// 		}
// 	}

// 	// TODO

// 	return results;
// }

function searchHandler(e) {
	// TODO
}

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}

// input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

