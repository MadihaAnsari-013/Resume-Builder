//generating resume
function createResume()
{

document.getElementById('data1').innerHTML=document.getElementById('name').value;
document.getElementById('data2').innerHTML=document.getElementById('phone').value;
document.getElementById('data3').innerHTML=document.getElementById('email').value;
document.getElementById('data4').innerHTML=document.getElementById('add').value;


document.getElementById('edu1').innerHTML=document.getElementById('education1').value;
document.getElementById('edu2').innerHTML=document.getElementById('education2').value;
document.getElementById('edu3').innerHTML=document.getElementById('education3').value;


document.getElementById('skill1').innerHTML=document.getElementById('addskills1').value;
document.getElementById('skill2').innerHTML=document.getElementById('addskills2').value;
document.getElementById('skill3').innerHTML=document.getElementById('addskills3').value;


document.getElementById('exp').innerHTML=document.getElementById('experience').value;

document.getElementById('obj').innerHTML=document.getElementById('objective').value;

document.getElementById('dec').innerHTML=document.getElementById('decl').value;

document.getElementById('L1').innerHTML=document.getElementById('fbook').value;
document.getElementById('L2').innerHTML=document.getElementById('git').value;
document.getElementById('L3').innerHTML=document.getElementById('linkedin').value;


document.getElementById('resume').style.display='none';

document.getElementById('template').style.display='block';

}

function addimage()
{
    let Propic=document.getElementById('upload-pic');
    let Inpic=document.getElementById('input-file');
    Inpic.onchange=function(){
        Propic.src=URL.createObjectURL(Inpic.files[0]);

    }
}

function showNext()
{
    document.getElementById('load').style.display='none';

    document.getElementById('resume').style.display='block';

}
