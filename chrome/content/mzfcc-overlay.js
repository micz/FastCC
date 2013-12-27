var miczFastCC = {
	onLoad: function() {
		// initialization code
		window.addEventListener("keypress",miczFastCC.keyHandler, false);
		this.initialized = true;
	},


	keyHandler : function(event) {
		if (event.altKey && event.ctrlKey && ((event.charCode == 99 /*"c"*/)||(event.charCode == 67 /*"C"*/))) {
			//alert('pressed on id:'+event.target.id+' tagName: '+event.target.tagName);
			if(miczFastCC.checkValidAction(event.target.id)){
				//alert('target element: '+miczFastCC.getTargetElement(event.target.id).id);
				miczFastCC.setValue(miczFastCC.getTargetElement(event.target.id));
			}
		}
		return;
	},

	checkValidAction: function(element_id){	//check if we are calling the action on the right element
		return String(element_id).indexOf('addressCol')==0;
	},

	getTargetElement: function(element_id){		//get the element to update given the element from which we're calling che action
		var target_id='addressCol1#';
		var row_num=element_id.substring(element_id.indexOf('#')+1,element_id.length);
		var target=document.getElementById(target_id+row_num);
		return target;
	},

	setValue: function(element){	//set the right value: toggle between "cc:" and "to:"
		if(element.value=='addr_to'){
			element.value='addr_cc';
		}else{
			element.value='addr_to';
		}
	},
};

window.addEventListener("load", miczFastCC.onLoad, false);
