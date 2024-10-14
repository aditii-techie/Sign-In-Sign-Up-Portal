function validatePassword(){
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;
	const errorElement = document.getElementById('error');
	
	if(password === '' || confirmPassword === ''){
		errorElement.textContent = 'Password and confirm password both are required.';
		return false;
	}
	
	if(password.length < 8){
		errorElement.textContent = 'Password must be atleast 8 characters.';
		return false;
	}
	
	if(password !== confirmPassword){
		errorElement.textContent = 'Passwords do not match.';
		return false;
	}
	
	if (!/[A-Z]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one uppercase letter.';
        return false;
    }
    if (!/[a-z]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one lowercase letter.';
        return false;
    }
    if (!/[0-9]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one number.';
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one special character.';
        return false;
    }

    if (/\s/.test(password)) {
        errorElement.textContent = 'Password must not contain spaces.';
        return false;
	}
	
	    errorElement.textContent = '';
		return true;
}