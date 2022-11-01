var namapengguna = document.getElementById('Username');
var katasandi = document.getElementById('Password');
var errormessage = document.getElementById('error');

function validate(){
    if(namapengguna.value == "admin" && katasandi.value == 123){
        alert("Login Berhasil!");
    }else{
        alert("Login GAGAL!");
        errormessage.style.display = "block";
    }



}



