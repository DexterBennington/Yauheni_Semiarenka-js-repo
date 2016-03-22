(function(){
	
	function ToggleButton(){
		this.handleClick = this.handleClick.bind(this);
	};
	
	ToggleButton.prototype.Css = {
		BLUE: 'blue'
	};
	
	ToggleButton.prototype._element;
	
	ToggleButton.prototype.attach = function (element){
		if (!element) {
			throw new Error('No element!');
		}
		this._element = element;
		this._element.addEventListener('click', this.handleClick);
	};
	
	ToggleButton.prototype.detach = function (){
		this._element.removeEventListener('click', this.handleClick);
		this._element = null;
	}; 
	
	ToggleButton.prototype.handleClick = function (){
		this._element.classList.toggle(this.Css.BLUE);
	};
	
	function attachComp(selector, compConstructor){
		var elements = document.querySelectorAll(selector);
		var i = 0;
		var length = elements.length;
		var component;
		for (;i < length; i++){
			element = elements[i];
			component = new compConstructor();
			component.attach(element);
		}
	};
	
	attachComp('.btn', ToggleButton);
}());