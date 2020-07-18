<script>
		function loginAdmin(){
			var userNameAdmin=$("#userNameAdmin").val();
			var PasswordAdmin=$('#PasswordAdmin').val();
			if((userNameAdmin==='youssef'&&PasswordAdmin==='12345')||(userNameAdmin==='issam'&&PasswordAdmin==='56789')){
				alert('welcome boss');
			}
			else {
				alert('wrong login');
			}
			
		}
		function registerFans(){
			var newFanName=$('#userNameFans').val();
			var newFanPassword=$('#PasswordFans').val();
			window.localStorage.setItem(newFanName,newFanPassword);
			alert('you are now registered');
		}
		function loginFans(){
			var fanName=$('#userNameFans').val();
			var fanPassword=$('#PasswordFans').val();
			if(fanPassword===localStorage.getItem(fanName)){
					alert('welcome '+fanName);
				}
				else{
					alert('you entered a wrong login. Please check the verification e-mail we sent you the first time');
				}
			}

		
		
	</script>