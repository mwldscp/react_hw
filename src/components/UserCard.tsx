interface UserCardProps{
name: string;
age: number;
role: string;
}

export function UserCard({name, age, role}: UserCardProps){
return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black', borderRadius: '10px', width: '200px'}}>
    {name && <h2 style={{fontWeight: 'bold'}}>{name}</h2>}
    <p style={{color: 'grey'}}>{age}</p>
    <p style={{color: 'grey'}}>{role}</p>
</div>
}