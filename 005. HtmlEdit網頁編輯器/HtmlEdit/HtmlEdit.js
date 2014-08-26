//編輯器物件
function HtmlEdit() {
	var path="HtmlEdit/";this.path=function(n) { path=n; };
	var width=512;this.width=function(n) { width=n; };
	var height=200;this.height=function(n) { height=n; };
	var data;this.data=function(n) { data=n; };
	var Bold=true;this.Bold=function(n) { Bold=n; };
	var Italic=true;this.Italic=function(n) { Italic=n; };
	var Underline=true;this.Underline=function(n) { Underline=n; };
	var StrikeThrough=true;this.StrikeThrough=function(n) { StrikeThrough=n; };
	var JustifyLeft=true;this.JustifyLeft=function(n) { JustifyLeft=n; };
	var JustifyCenter=true;this.JustifyCenter=function(n) { JustifyCenter=n; };
	var JustifyRight=true;this.JustifyRight=function(n) { JustifyRight=n; };
	var Superscript=true;this.Superscript=function(n) { Superscript=n; };
	var Subscript=true;this.Subscript=function(n) { Subscript=n; };
	var FontSize=true;this.FontSize=function(n) { FontSize=n; };
	var FontName=true;this.FontName=function(n) { FontName=n; };
	var InsertImage=true;this.InsertImage=function(n) { InsertImage=n; };
	var HyperLink=true;this.HyperLink=function(n) { HyperLink=n; };
	var ForeColor=true;this.ForeColor=function(n) { ForeColor=n; };
	var BackColor=true;this.BackColor=function(n) { BackColor=n; };
	var Indent=true;this.Indent=function(n) { Indent=n; };
	var Outdent=true;this.Outdent=function(n) { Outdent=n; };
	var InsertOrderedList=true;this.InsertOrderedList=function(n) { InsertOrderedList=n; };
	var InsertUnorderedList=true;this.InsertUnorderedList=function(n) { InsertUnorderedList=n; };
	var InsertHorizontalRule=true;this.InsertHorizontalRule=function(n) { InsertHorizontalRule=n; };
	var InsertTable=true;this.InsertTable=function(n) { InsertTable=n; };
	var Cut=true;this.Cut=function(n) { Cut=n; };
	var Copy=true;this.Copy=function(n) { Copy=n; };
	var Paste=true;this.Paste=function(n) { Paste=n; };
	var Delete=true;this.Delete=function(n) { Delete=n; };
	var Undo=true;this.Undo=function(n) { Undo=n; };
	var Print=true;this.Print=function(n) { Print=n; };
	var StripAll=true;this.StripAll=function(n) { StripAll=n; };
	//初始化
	this.control=function(div) {
		//無id
		if (div.id=="") { div.id=div.name; };
		//功能按鈕
		var html="";
		html+="<div style=\"width:" + width + "px;\">";
		if (Bold==true) {
			html+="<input type=\"button\" title=\"粗體\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Bold.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Bold')\">";
		}
		if (Italic==true) {
			html+="<input type=\"button\" title=\"鞋體\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Italic.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Italic')\">";
		}
		if (Underline==true) {
			html+="<input type=\"button\" title=\"底線\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Underline.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Underline')\">";
		}
		if (StrikeThrough==true) {
			html+="<input type=\"button\" title=\"刪除線\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "StrikeThrough.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'StrikeThrough')\">";
		}
		if (JustifyLeft==true) {
			html+="<input type=\"button\" title=\"靠左對齊\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "JustifyLeft.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'JustifyLeft')\">";
		}
		if (JustifyCenter==true) {
			html+="<input type=\"button\" title=\"靠中對齊\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "JustifyCenter.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'JustifyCenter')\">";
		}
		if (JustifyRight==true) {
			html+="<input type=\"button\" title=\"靠右對齊\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "JustifyRight.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'JustifyRight')\">";
		}
		if (Superscript==true) {
			html+="<input type=\"button\" title=\"上標字\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Superscript.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Superscript')\">";
		}
		if (Subscript==true) {
			html+="<input type=\"button\" title=\"下標字\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Subscript.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Subscript')\">";
		}
		if (FontSize==true) {
			html+="<select title=\"大小\" onchange=\"HtmlEditFunctionButton(" + div.id + "_iframe,'FontSize', false, this.options[this.selectedIndex].value);this.selectedIndex=0;return false;\"><option selected>大小</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3 (預設)</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option></select>";
		}
		if (FontName==true) {
			html+="<select title=\"字型\" onchange=\"HtmlEditFunctionButton(" + div.id + "_iframe,'FontName', false, this.options[this.selectedIndex].value);this.selectedIndex=0;return false;\"><option selected>字型</option><option value=\"細明體\">細明體</option><option value=\"新細明體\">新細明體 (預設)</option><option value=\"標楷體\">標楷體</option><option value=\"arial\">arial</option></select>";
		}
		if (InsertImage==true) {
			html+="<input type=\"button\" title=\"插入圖片\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "InsertFormImageButton.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'InsertImage','dd','');\">";
		}
		if (HyperLink==true) {
			html+="<input type=\"button\" title=\"插入連結\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "LinkManager.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'CreateLink');\">";
		}
		if (ForeColor==true) {
			html+="<input type=\"button\" title=\"文字顏色\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "ForeColor.gif);\" onclick=\"var fcolor=showModalDialog('" + path + "SelectColor.htm',false,'dialogWidth:282px;dialogHeight:292px;status:0;scroll:no;');HtmlEditFunctionButton(" + div.id + "_iframe,'ForeColor',false,fcolor);\">";
		}
		if (BackColor==true) {
			html+="<input type=\"button\" title=\"背景顏色\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "BackColor.gif);\" onclick=\"var fcolor=showModalDialog('" + path + "SelectColor.htm',false,'dialogWidth:282px;dialogHeight:292px;status:0;scroll:no;');HtmlEditFunctionButton(" + div.id + "_iframe,'BackColor',false,fcolor);\">";
		}
		if (Indent==true) {
			html+="<input type=\"button\" title=\"增加縮排\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Indent.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Indent')\">";
		}
		if (Outdent==true) {
			html+="<input type=\"button\" title=\"減少縮排\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Outdent.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Outdent')\">";
		}
		if (InsertOrderedList==true) {
			html+="<input type=\"button\" title=\"數字標題\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "InsertOrderedList.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'InsertOrderedList')\">";
		}
		if (InsertUnorderedList==true) {
			html+="<input type=\"button\" title=\"無數字標題\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "InsertUnorderedList.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'InsertUnorderedList')\">";
		}
		if (InsertHorizontalRule==true) {
			html+="<input type=\"button\" title=\"插入分隔線\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "InsertHorizontalRule.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'InsertHorizontalRule')\">";
		}
		if (InsertTable==true) {
			html+="<input type=\"button\" title=\"插入表格\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "InsertTable.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'InsertTable',null,null,'" + path + "')\">";
		}
		if (Cut==true) {
			html+="<input type=\"button\" title=\"剪下\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Cut.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Cut')\">";
		}
		if (Copy==true) {
			html+="<input type=\"button\" title=\"複製\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Copy.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Copy')\">";
		}
		if (Paste==true) {
			html+="<input type=\"button\" title=\"貼上\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Paste.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Paste')\">";
		}
		if (Delete==true) {
			html+="<input type=\"button\" title=\"刪除\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Delete.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Delete')\">";
		}
		if (Undo==true) {
			html+="<input type=\"button\" title=\"復原\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Undo.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Undo')\">";
		}
		if (Print==true) {
			html+="<input type=\"button\" title=\"列印\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "Print.gif);\" onclick=\"HtmlEditFunctionButton(" + div.id + "_iframe,'Print')\">";
		}
		if (StripAll==true) {
			html+="<input type=\"button\" title=\"原始碼\" style=\"width:22px;height:20px;background-position:-1px -1px;border:0;background-image:url(" + path + "StripAll.gif);\" onclick=\"HtmlEditSourceCode('" + div.id + "_iframe','" + div.id + "_source')\">";
		}
		html+="</div>";
		html+="<iframe id=\"" + div.id + "_iframe\" width=\"" + width + "\" height=\"" + height + "\" marginheight=\"0\" marginwidth=\"0\" scrolling=\"yes\"></iframe>";
		html+="<textarea id=\"" + div.id + "_source\" style=\"display:none;\">"
		//取代原物件
		var creatediv=document.createElement("div");
		creatediv.id=div.id + "_div"
		creatediv.innerHTML=html;
		var parentdiv=div.parentNode;
		parentdiv.replaceChild(creatediv,div);
		//設計模式
		HtmlEditDesignMode(div.id+"_iframe"); 
		//監聽表單
		var form=document.forms[0]; 
		try{
			form.attachEvent('onsubmit',function(){HtmlEditGetValue(div.id+"_iframe",div.id+"_source",div);});
		}
		catch(e){
			form.addEventListener('submit',function(){HtmlEditGetValue(div.id+"_iframe",div.id+"_source",div);},false);
		}
		//載入資料
		HtmlEditSetValue(div.id+"_iframe",div.value);
		//隱藏原物件
		div.style.display="none";
		
		/*
		setTimeout(function() {
			document.forms[0].appendChild(div);
		},250);
		*/
		
		var isAdd=false;
		do {	
			try  {
				document.forms[0].appendChild(div);
				isAdd=true;
			}
			catch(e) {
			}
		}
		while (isAdd==false);
		
	};
}

//啟用設計模式
function HtmlEditDesignMode(iframe) {
	var DesignModeOn=false;
	try {
		iframe.document.designMode="On";
		DesignModeOn=true;
	} catch(e) {
		setTimeout(function() {
			document.getElementById(iframe).contentWindow.document.body.contentEditable=true;
		},250);
	}
};
//執行功能按鈕
function HtmlEditFunctionButton(iframe,value1,value2,value3,path) {
	if (value1=="InsertTable") {
		var dotable=showModalDialog(path + 'InsertTable.htm',false,'dialogWidth:435px;dialogHeight:225px;status:0;');
		if (dotable!=undefined) {
			try {
				iframe.focus();
				iframe.document.selection.createRange().pasteHTML(dotable);
			} catch(e) {
				iframe.contentWindow.focus();
				document.getElementById(iframe.id).contentWindow.document.selection.createRange().pasteHTML(dotable);
			}
		}
	}
	try {
		iframe.focus();
		iframe.document.execCommand(value1,value2,value3);
	} catch(e) {
		iframe.contentWindow.focus();
		document.getElementById(iframe.id).contentWindow.document.execCommand(value1,value2,value3);
	}
}
//檢視原始碼
function HtmlEditSourceCode(iframe,source) {
	if(document.getElementById(iframe).style.display==""){
		document.getElementById(iframe).style.display="none";
		document.getElementById(source).style.display="";
		document.getElementById(source).style.width=document.getElementById(iframe).width+"px";
		document.getElementById(source).style.height=document.getElementById(iframe).height+"px";
		document.getElementById(source).value=document.getElementById(iframe).contentWindow.document.body.innerHTML;
	} else {
		document.getElementById(iframe).style.display="";
		document.getElementById(source).style.display="none";
		document.getElementById(iframe).contentWindow.document.body.innerHTML=document.getElementById(source).value;
		setTimeout(function() {
			document.getElementById(iframe).contentWindow.document.open();
			document.getElementById(iframe).contentWindow.document.write(document.getElementById(source).value);
			document.getElementById(iframe).contentWindow.document.close();
			document.getElementById(iframe).contentWindow.document.body.contentEditable=true;
		},250);
	}
}
//讀取資料
function HtmlEditGetValue(iframe,source,div) {
	if(document.getElementById(iframe).style.display==""){
		div.value=document.getElementById(iframe).contentWindow.document.body.innerHTML;
	} else {
		div.value=document.getElementById(source).value;
	}
}
//載入資料
function HtmlEditSetValue(iframe,value) {
	setTimeout(function() {
		document.getElementById(iframe).contentWindow.document.body.innerHTML=value;
	},250);
}