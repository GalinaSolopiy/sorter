 class Sorter {
  constructor() {
      this.value = [];
      this.comparator = function (a,b) {
          return a-b;
      } ;
   }
   add(element){
         //var sorter = new Sorter(element);
       this.value.push(element);
  }
  at(index){
      return this.value[index];
  }
  get length() {
     return this.value.length ;
  }
  toArray() {
      return this.value;
  }

  sort(indices) {
      indices = indices.sort(function (a,b) {
          return a-b;
      });
      let temp = [];
      indices.forEach((value, index) => {
         temp[index] =this.value[value];
      });
      temp.sort(this.comparator);
      indices.forEach((value, index) => {
          this.value[value] = temp[index];
      });

  }
  setComparator(compareFunction) {
     this.comparator = compareFunction;

  }
}



module.exports = Sorter;
