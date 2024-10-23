//your JS code here. If required.
const select= document.querySelector("#colorSelect");
const options= document.querySelectorAll("#colorSelect option");
const button= document.querySelector("form input[type='button']");

button.addEventListener("click", (e) => {
	const selectValue= select.value;
	//console.log(select.value);
	options.forEach(option => {
		if(option.value === selectValue) {
			//console.log(option.value, selectValue);
			option.remove();
			return;
		}
	})
})





