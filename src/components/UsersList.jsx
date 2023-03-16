import { UserItem } from "./userItem";
export function UserList({users}){
    return ( <div>
        {users.map((user) => 
        <UserItem key={user.id} name={user.name} email={user.email}/>
        )}
        


    </div>
    );
}