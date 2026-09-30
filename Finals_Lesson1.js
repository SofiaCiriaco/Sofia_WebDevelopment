// Source - https://stackoverflow.com/q/27111342
// Posted by a contributor; modified by community. See the post 'Timeline' for change history.
// Retrieved 2026-09-30, License - CC BY-SA 3.0

function showResult(choice){
var n1=parseFloat(document.getElementById('num1').value);
var n2=parseFloat(document.getElementById('num2').value);
var r;
var c=choice;

switch(c)
	{
	case '1':
		r=n1+n2;
		break;
	case '2':
		r=n1-n2;
		break;
	case '3':
		r=n1*n2;
		break;
	case '4': 
		r=n1/n2;
		break;
	case '5':
		r=n2*100/n1;
		break;
	default:
		break;
			
	}
document.getElementById('result').innerHTML=r;

	

}