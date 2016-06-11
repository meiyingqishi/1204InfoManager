/*首页使用MDI显示框脚本*/
var contentWin = null;
function showJunXunPic() {
    if (!isWinExist("showJunXunPic")) {  // If window not exist
        contentWin = new HWWeb("showJunXunPic");
        contentWin.showDialog({ title: '军训照片', themeName: document.value, url: 'junxun.html', top: '60', left: '0', width: screen.availWidth - 50, height: '535' });
        contentWin.toFront();
    }
}

function showSearch(link) {
	if (!isWinExist("showSearch")) {
		contentWin = new HWWeb("showSearch");
        contentWin.showDialog({ title: '搜索结果', themeName: document.value, url: link, top: '60', left: '0', width: screen.availWidth - 50, height: '532' });
        contentWin.toFront();
	}
}