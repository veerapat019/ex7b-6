function isNum(value){
	return !isNaN(value)
  }

function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
  if (sid.length == 10&isNum(sid)) {
    return true;
  } else {
    return false;
  }
  } 
  	else{
		return false;
	}
}

function checkCandiNo() {
    let candi = (document.getElementById("candi").value).trim();
    if (isNaN(candi) & candi < 1) {
        } else {
            if (candi > 1 || candi < 10 & candi.length !=0) {
            return true;
        } else {
            return false;
        }
    }
}
function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}