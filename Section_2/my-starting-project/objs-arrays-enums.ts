function printHobby(hobbies: string[])
{
	for(const hobby of hobbies) {
		console.log(hobby.toUpperCase())
		// console.log(hobby.map()) -- ERROR -- Cannot use map() for string array
	}
}

function authenticateRole(name: string, role: Role)
{
    if (role === Role.ADMIN) {
        console.log(name + " is admin");
    }
    if (role === Role.AUTHOR) {
        console.log(name + " is author");
    }
    if (role === Role.READ_ONLY) {
        console.log(name + " is read-only");
    }
}

enum Role { ADMIN, AUTHOR, READ_ONLY };

const person: {
    name: string,
    hobbies: string[],
    age: number,
    role: [Role, string],
} = {
    name: 'Tri',
	hobbies: ["Soccer", "Chess", "Game"],
    role: [Role.AUTHOR, 'Author'],
	age: 25
}

printHobby(person.hobbies);
authenticateRole(person.name, person.role[0]);