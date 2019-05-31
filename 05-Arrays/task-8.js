result_list = []


function recursive_filter(original_list){
	if (original_list.length == 0){
		result_list = 0;
	} else{

		function loop (x=0){

			if (Array.isArray(original_list[x]))
				recursive_filter(original_list[x])
			else {
				result_list.push(original_list[x])
			}
			if (x < (original_list.length - 1)){
				loop(x+1)
			}
		}
		loop()
	}
	return result_list
}


const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// const arr = []
console.log(recursive_filter(arr))



