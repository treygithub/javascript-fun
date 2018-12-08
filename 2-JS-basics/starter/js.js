var mark = {
    height : 6,
    mass : 200,
    bmi : function () {
        return (this.mass / (this.height * this.height))
    },
    boo : function (){
        if(this.bmi() > john.bmi()){
            return alert("Mark says: 'I am way fatter than john' ");
        }else{
            return alert(" Mark says: 'I a skinny' ");
        }
    },
}
var john = {
    height : 5,
    mass :100,
    bmi : function () {
        return (this.mass / (this.height * this.height))
    },
    boo : function (){
        if(mark.bmi() < this.bmi()){
            return alert("  John says: ' I am fatter than mark ' ");
        }else{
           return alert("John says: 'i am in better shape than Mark' ");
        }
    },
}

alert(mark.boo());
alert(john.boo());



