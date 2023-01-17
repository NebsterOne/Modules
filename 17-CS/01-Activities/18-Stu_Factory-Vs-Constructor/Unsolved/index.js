// TODO: Refactor the class to a factory function.
class Lesson {
  constructor() {
    this.title = 'Module 17 - Computer Science';
    this.description = 'CS for JS';
  }
  information() {
    console.log(this.title, this.description);
  }
}



const getInfo = (state) => ({
  information: () => console.log(`${state.title}', ${state.description}`),
});



const lesson = () {
  const info = {
    title: 'Module 17 - Computer Science',
    description: 'CS for JS'
  }


  return {...getInfo(state)  }
}


const csForJS = new Lesson();
csForJS.information();
