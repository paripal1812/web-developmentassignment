let user = {

    name: "Pari Pal",

    age: 19,

    role: "BCA AI Student",

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Power BI"
    ],

    education: {
        degree: "BCA",
        specialization: "Artificial Intelligence"
    }
};


function generateSummary(user) {

    return `
Name: ${user.name}
Age: ${user.age}
Role: ${user.role}
Degree: ${user.education.degree}
Specialization: ${user.education.specialization}
Skills: ${user.skills.join(", ")}
`;
}


console.log(generateSummary(user));