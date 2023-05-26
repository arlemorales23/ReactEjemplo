const people = [
    'Mateo vasquez: Matematicas',
    'Julio Ospina: Ingeniero de software',
    'Ana Perez: QA',
    'Felipe Ruiz: Diseñador',
    'Andrea Gonzalez: Desarrollador'
  ];
  
  export default function List() {
    const listItems = people.map(person =>
      <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
  }
  