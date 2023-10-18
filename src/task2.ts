// 2. 
type TypeUser = {
    name: string;
    surname: string;
}

type TypeInformation = {
    fullname: string;
    initials: string;
}
function getUserNamings(a: TypeUser) : TypeInformation {
    return { 
          fullname: a.name + " " + a.surname, 
          initials: a.name[0] + "." + a.surname[0] 
    };
}