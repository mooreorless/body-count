const formHelper = () =>{
	let form = document.getElementById('webcamForm');
	form.onSubmit = (e) => {
		window.alert('firiing from form helper');
		console.log('firing from form helper');
		e.preventDefault();
	}
}

export default formHelper;