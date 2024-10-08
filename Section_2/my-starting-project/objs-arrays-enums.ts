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

// enum Role { ADMIN, AUTHOR, READ_ONLY };

let Role; 
(function (Role) {
    Role[Role["ADMIN"]  = 0] = "ADMIN";
    Role[Role["ADMIN2"] = 1] = "ADMIN2";
    Role[Role["ADMIN3"] = 2] = "ADMIN3";
}(Role || (Role = {})));


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