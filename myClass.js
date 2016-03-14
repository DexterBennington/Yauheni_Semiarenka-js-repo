var myClassLib = myClassLib || {};
(function(exports){
		function Vehicle(maxSpeed){
			this.maxSpeed = maxSpeed;
		}

		Vehicle.prototype.maxSpeedInfo = function (){
			console.log(this.maxSpeed + " maximum speed this vehicle.");
		}

		function Car(model, maxSpeed){
			this.model = model;
			Vehicle.call(this, maxSpeed);
		}

		if (Object.create){
			Car.prototype = Object.create(Vehicle.prototype);
			Car.prototype.constructor = Car;
		} else {
			extend(Car, Vehicle);
		}

		function extend(Child, Parent){
			var F = function() {};
			F.prototype = Parent.prototype;
			Child.prototype = new F();
			Child.prototype.constructor = Child;
			Child.superclass = Parent.prototype;
		}

		Car.prototype.modelInfo = function (){
			console.log("My model is " + this.model);
		}
		
		exports.Vehicle = Vehicle;
		exports.Car = Car;
		
}(myClassLib));
