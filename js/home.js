<!--home-->
<!--��������ʵ��-->
function baiduSearch() {
	var searchinput = document.getElementById('txtSearchStr');
	var val = searchinput.value;
	if (val == "")
		return;
	searchinput.value = "";
	var link = "http://www.baidu.com/baidu?word=" + val;
	showSearch(link);
	//window.open("http://www.baidu.com/baidu?word=" + val, '_blank');
}

function clickButton(){
	if (event.keyCode == 13)
		baiduSearch();
}

/*�����ͣ�˵���ѡ��*/
function mymouseover(item){
	item.style.color="red";
	item.style.borderTop="5px solid #f00";
}

/*����뿪�˵���ѡ��*/
function mymouseout(item){
	item.style.color="";
	item.style.borderTop="";
}