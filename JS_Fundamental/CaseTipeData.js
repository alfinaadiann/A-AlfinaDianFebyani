
    // String
    let fullname = "Alfina Dian Febyani";
    console.log("String:", fullname);

    // Boolean
    let isStudent = true;
    let hasGraduated = false;
    let isEmployed = false;
    let lovesProgramming = true;

    console.log("Boolean - isStudent:", isStudent);
    console.log("Boolean - hasGraduated:", hasGraduated);
    console.log("Boolean - isEmployed:", isEmployed);
    console.log("Boolean - lovesProgramming:", lovesProgramming);

    // Numbers
    let age = 21;
    let height = 158; 
    let weight = 45; 
    
    console.log("Age (Integer):", age);
    console.log("Height (Integer):", height);
    console.log("Weight (Integer):", weight);

    // Array
    let fruits = ["Strawberry", "Mango", "Durian"];
    let vegetables = ["Chili", "Tomato", "Spinach"];
    
    console.log("Array of Fruits:", fruits);
    console.log("Array of Vegetables:", vegetables);

    // Object
    let student = {
        name: "Alfina Dian Febyani",
        age: 21,
        major: "Informatics",
        isGraduated: false,
        hobbies: ["Shopping", "Traveling", "Drawing"] 
    };

    console.log("Object:", student);

    alert(
        "String:\nFull Name: " + fullname +
        "\n\nBoolean Values:\n" +
        "isStudent: " + isStudent +
        "\nhasGraduated: " + hasGraduated +
        "\nisEmployed: " + isEmployed +
        "\nlovesProgramming: " + lovesProgramming +
        "\n\nNumbers:\n" +
        "Age: " + age +
        "\nHeight: " + height + " cm" +
        "\nWeight: " + weight + " kg" +
        "\n\nArrays:\n" +
        "Fruits: " + fruits.join(", ") +
        "\nVegetables: " + vegetables.join(", ") +
        "\n\nObject:\n" +
        "Name: " + student.name +
        "\nAge: " + student.age +
        "\nMajor: " + student.major +
        "\nGraduated: " + student.isGraduated +
        "\nHobbies: " + student.hobbies.join(", ")
    );

